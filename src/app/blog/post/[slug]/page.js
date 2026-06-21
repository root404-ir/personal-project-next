import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import { getPostsBySlug } from "@/lib/server/post";
import PostContentRender from "@/components/PostContentRender";
export default async function PostPage({ params }) {
    const {slug} = await params
    const post = getPostsBySlug(slug)
    if (!post) {
        return <h1>Post Not Found</h1>
    }
    return (
        <div>
            <PostClient post={post} />
            {/* <PostContentRender content={post.content} /> */}
        </div>
    )
}
