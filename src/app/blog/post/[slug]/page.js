import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import { getPostsBySlug } from "@/lib/server/post";
export default async function PostPage({ params }) {
    const post = getPostsBySlug(params.slug)
    if (!post) {
        return <h1>Post Not Found</h1>
    }
    return (
        <div>
            <PostClient post={post} />
        </div>
    )
}