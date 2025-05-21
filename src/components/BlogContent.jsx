/* eslint-disable react/prop-types */
import Link from 'next/link'
import { JalaliDate } from "./Date"
import { IoIosArrowBack } from "react-icons/io"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const BlogContent = ({ post, thumbnailUrl }) => {
    const summary = documentToPlainTextString(post.fields.richcontent).slice(0, 100) + '...'
    return (
        <>
            <div key={post.sys.id} className="border flex flex-col justify-between h-auto border-gray-600 rounded-lg">
                {thumbnailUrl && (
                    <div className="bg-white rounded-t-lg">
                        <img
                            src={thumbnailUrl}
                            loading='lazy'
                            alt={post.title}
                            className="mx-auto h-60 object-contain w-full"
                        />
                    </div>
                )}
                <div className="mt-5 flex h-full justify-between flex-col gap-4 p-2">
                    <Link href={`/blog/post/${post.fields.slug}`}>
                        <h4 className="text-3xl hover:text-blue-400">{post.fields.title}</h4>
                    </Link>
                    <p>
                        {summary}
                    </p>
                    <div className="flex justify-between">
                        <span>توسط : <span className="text-green-400 font-bold">{post.fields.author}</span></span>
                        <span>{JalaliDate(post.fields.data)}</span>
                    </div>
                </div>
                <Link href={`/blog/post/${post.fields.slug}`} className="bg-green-400 p-0 w-full text-white font-bold rounded-b-lg mt-5 cursor-pointer flex items-center justify-center gap-2">
                    ادامه مطلب
                    <IoIosArrowBack /> </Link>
            </div>
        </>
    )
}

export default BlogContent