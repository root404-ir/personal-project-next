'use client'

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from 'next/navigation'
import { createClient } from "contentful"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GetThumbnail, LoadThumbnail } from "../components/PostThumbnail"
import BlogContent from "../components/BlogContent"
import ReactPaginate from "react-paginate"
import AutoCompleteSearch from '../components/Search/SearchBlog'
import Head from 'next/head'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const router = useRouter()

  const pageFromURL = parseInt(searchParams.get('page') || '1')
  const [currentPage, setCurrentPage] = useState(pageFromURL - 1)
  const postsPerPage = 6

  const client = createClient({
    space: "fulkbl2s1yqz",
    accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
  })

  useEffect(() => {
    client.getEntries({ content_type: 'post' }).then(res => {
      setPosts(res.items)
      setLoading(false)
      LoadThumbnail(res, client, setAssets)
    })
  }, [])

  useEffect(() => {
    setCurrentPage(pageFromURL - 1)
  }, [pageFromURL])

  const handlePageClick = (e) => {
    const newPage = e.selected + 1
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())
    router.push(`/Blog?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const offset = currentPage * postsPerPage
  const currentPost = posts.slice(offset, offset + postsPerPage)

  return (
    <>
      <Head>
        <title>وبلاگ | مقالات برنامه نویسی</title>
        <meta name="description" content="مقالات برنامه نویسی" />
      </Head>

      <div className="mt-5 text-white container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="md:h-10 h-5 w-1 bg-green-600"></div>
            <h4 className="text-4xl flex items-center">وبلاگ</h4>
          </div>
          <AutoCompleteSearch />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-10">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <Skeleton height={200} baseColor="green" />
                <Skeleton width={150} className="mt-4" baseColor="green" />
                <Skeleton count={2} className="mt-4" baseColor="green" />
              </div>
            ))
          ) : (
            currentPost.map(post => {
              const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets)
              return (
                <BlogContent key={post.sys.id} post={post} thumbnailUrl={thumbnailUrl} />
              )
            })
          )}
        </div>

        <div className="flex justify-center my-8">
          <ReactPaginate
            forcePage={currentPage}
            previousLabel={"قبلی"}
            nextLabel={"بعدی"}
            breakLabel={"..."}
            pageCount={Math.ceil(posts.length / postsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"flex space-x-2 justify-center"}
            pageClassName={"px-4 py-2 rounded-full cursor-pointer bg-gray-400 hover:bg-gray-300"}
            activeClassName={"bg-green-400 text-white"}
            previousClassName={"px-4 py-2 text-black rounded-full bg-gray-300 hover:bg-gray-400"}
            nextClassName={"px-4 py-2 text-black rounded-full bg-gray-300 hover:bg-gray-400"}
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      </div>
    </>
  )
}

export default Blog
