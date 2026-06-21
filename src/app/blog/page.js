import React from 'react'
import { getAllPosts } from '@/lib/server/post'
import BlogClient from '@/components/BlogClient'

const BlogPage = () => {
    const posts = getAllPosts()
    return (
        <>
            <BlogClient posts={posts}/>
        </>
    )
}

export default BlogPage