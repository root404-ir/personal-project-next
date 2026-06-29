import { getAllPosts } from '@/lib/server/post'
import React from 'react'
import SearchDialog from './SearchDialog'

const SearchClient = () => {
    const posts = getAllPosts()
    return (
        <>
            <SearchDialog posts={posts} />
        </>
    )
}

export default SearchClient