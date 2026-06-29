import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), "src/content")

export function getAllPosts() {
    const files = fs.readdirSync(POSTS_PATH)
    return files.map(file => {
        const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf-8")
        const { data, content } = matter(source)
        console.log("DATA:", data);
        return {
            ...data
        }
    })
}

export function getPostsBySlug(slug) {
    const files = fs.readdirSync(POSTS_PATH)
    for (const file of files) {
        const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf-8")
        const { data, content } = matter(source)
        if (data.slug === slug) {
            return { frontMatter: data, content }
        }
    }
    return null
}