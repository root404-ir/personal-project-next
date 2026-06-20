import React from 'react'
import { getAllPosts } from '@/lib/server/post'
import BlogClient from '@/components/BlogClient'

const BlogPage = () => {
    const posts = getAllPosts()
    return (
        <>
            <BlogClient posts={posts}/>
            {/* <h1>working...</h1> */}
        </>
    )
}

export default BlogPage