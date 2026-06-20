/* eslint-disable react/prop-types */
'use client'
import Link from 'next/link'
import { JalaliDate } from "./Date"
import { IoIosArrowBack } from "react-icons/io"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
// import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const BlogContent = ({ post }) => {

  const summary = documentToPlainTextString(post.title).slice(0, 100) + '...'
  console.log(post)
  return (
    <>
      <div>
        <div key={post.slug} className="border flex flex-col justify-between h-auto border-gray-600 rounded-lg">
          <div className="bg-white rounded-t-lg">
            <img
              src={post.thumb}
              loading='lazy'
              alt={post.title}
              className="mx-auto h-60 object-contain w-full"
            />
          </div>
          <div className="mt-5 flex h-full justify-between flex-col gap-4 p-2">
            <Link href={`/blog/post/${post.slug}`}>
              <h4 className="text-3xl hover:text-blue-400">{post.title}</h4>
            </Link>
            <p>
              {summary}
            </p>
            <div className="flex justify-between">
              <span>توسط : <span className="text-green-400 font-bold">{post.author}</span></span>
              {/* <span>{JalaliDate(post.fields.data)}</span> */}
            </div>
          </div>
          <Link prefetch href={`/blog/post/${post.slug}`} className="bg-green-400 p-0 w-full text-white font-bold rounded-b-lg mt-5 cursor-pointer flex items-center justify-center gap-2 hover:bg-white hover:text-green-400 transition-all">
            ادامه مطلب
            <IoIosArrowBack />
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogContent


