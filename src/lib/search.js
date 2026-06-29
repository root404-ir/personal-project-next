import Fuse from "fuse.js";
import { getAllPosts } from "./server/post";
import { useMemo } from "react";

export async function createSearchIndex() {
    const posts = await getAllPosts()
    const fuse = useMemo(() => {

        return new Fuse(posts, {
            includeScore: true,
            includeMatches: true,
            threshold: 0.35,
            ignoreLocation: true,
            minMatchCharLength: 2,
            keys: [
                {
                    name: "title",
                    weight: 5
                },
                {
                    name: "description",
                    weight: 3
                },
            ]
        })

    }, [posts])
    const results = useMemo(() => {
        if (!query) return []
        return fuse.search(query)
    }, [query, fuse])
}