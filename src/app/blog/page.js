import React, { Suspense } from 'react'
import { getAllPosts } from '@/lib/server/post'
import BlogClient from '@/components/BlogClient'
import SearchDialog from '@/components/SearchDialog'
import SearchClient from '@/components/SearchClient'

const BlogPage = () => {
    const posts = getAllPosts()
    return (
        <Suspense>
            <BlogClient posts={posts} />
            <SearchClient />
        </Suspense>
    )
}

export default BlogPage