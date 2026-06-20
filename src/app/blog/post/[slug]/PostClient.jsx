"use client"
import React from 'react'
import { PostOptionContext } from "@/contexts/PostOptionContext";
import { useParams, usePathname } from "next/navigation";
import { useContext, useState } from "react";
// import { GetThumbnail } from '@/components/PostThumbnail';
// import { JalaliDate } from '@/components/Date';
// import { PostContentRender } from '@/components/PostContentRender';
import PostOptions from '@/components/PostOptions';
import PostShare from '@/components/PostShare';
import Scroll from '@/components/Scroll';
import { AiOutlineToTop } from 'react-icons/ai';

const PostClient = ({ post }) => {


    const { fontWeight, lineSpacing,fontSize } = useContext(PostOptionContext);
    const pathname = usePathname();
    return (
        <div key={post.frontMatter.slug} className="container mx-auto px-2 mt-10">
            <div className="flex justify-between items-center">
                <h4 className="text-xl md:text-3xl font-bold mb-2">{post.frontMatter.title}</h4>
                <div className="flex flex-col items-center">
                    <p className="text-sm md:text-md mb-4">نویسنده: {post.frontMatter.author}</p>
                </div>
            </div>
            <img id="content" src={post.frontMatter.thumb} loading="lazy" alt={post.frontMatter.title} className="rounded-xl mb-4 object-contain mt-5 mx-auto" width={800} height={400} />
            <p style={{fontWeight:fontWeight, fontSize:fontSize}}>{post.frontMatter.description}</p>
            <p style={{fontWeight:fontWeight, lineHeight:lineSpacing, fontSize:fontSize}}>{post.content}</p>
            <PostShare url={typeof window !== "undefined" ? window.location.href : pathname} title={post.title} />
            <PostOptions />
            <Scroll />
            <div className="bg-green-400 cursor-pointer rounded-sm p-1 my-10 flex justify-center">
                <div className="flex items-center gap-2 text-lg">
                    <span className="select-none">رفتن به بالای پست</span>
                    <AiOutlineToTop size={43} />
                </div>
            </div>
        </div>
    )
}

export default PostClient





{/* <span className="porse porse-lg mt-10 text-white px-10" style={{ fontWeight, lineHeight: lineSpacing }}>
                <PostContentRender content={post.fields.richcontent} />
            </span> */}


{/* <span className="text-md text-gray-400">{JalaliDate(post.fields.date)}</span> */ }
