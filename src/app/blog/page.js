import React, { Suspense } from 'react'
import { getAllPosts } from '@/lib/server/post'
import BlogClient from '@/components/BlogClient'

const BlogPage = () => {
    const posts = getAllPosts()
    return (
        <Suspense>
            <BlogClient posts={posts}/>
        </Suspense>
    )
}

export default BlogPage