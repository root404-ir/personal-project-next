import BlogClient from "@/components/BlogClient"
import { Suspense } from "react"

const BlogPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogClient />
        </Suspense>
    )
}

export default BlogPage