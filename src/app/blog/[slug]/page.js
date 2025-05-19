'use client'

import { useEffect, useState, useContext, use } from "react";
import { createClient } from "contentful";
import { GetThumbnail, LoadThumbnail } from "@/components/PostThumbnail";
import { JalaliDate } from "@/components/Date";
import { AiOutlineToTop } from "react-icons/ai";
import { PostOptionContext } from "@/contexts/PostOptionContext";
import PostShare from "@/components/PostShare";
import PostOptions from "@/components/PostOptions";
import Skeleton from "react-loading-skeleton";
import Scroll from "@/components/Scroll";
// import { PostContentRender } from "@/components/PostContentRender";
import { usePathname } from "next/navigation";
import RichTextRender from "@/components/RichTextRender";
import { PostContentRender } from "@/components/PostContentRender";
import Image from "next/image";
// import Img from 'next/image'
export default function PostPage({ params }) {
    const { slug } = use(params);

    const [post, setPost] = useState(null);
    const [assets, setAssets] = useState([]);
    const { fontSize, fontWeight, lineSpacing } = useContext(PostOptionContext);
    const pathname = usePathname();



    useEffect(() => {
        const client = createClient({
            space: "fulkbl2s1yqz",
            accessToken: "HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw"
        });
        client.getEntries({ content_type: 'post', 'fields.slug': slug, limit: 1 }).then(res => {
            setPost(res.items[0] || null);
            LoadThumbnail(res, client, setAssets);
        });
    }, [slug]);

    useEffect(() => {
        scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleGoTop = () => {
        document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
    };

    if (!post) {
        return (
            <div className="p-4 flex flex-col gap-10">
                <div className="flex justify-between">
                    <Skeleton width={200} baseColor="green" />
                    <Skeleton width={200} baseColor="green" />
                </div>
                <div className="flex justify-center">
                    <Skeleton width={100} height={100} baseColor="green" />
                </div>
                <Skeleton baseColor="green" className="my-4" count={10} />
            </div>
        );
    }

    const thumbnailUrl = GetThumbnail(post.fields.thumbnail?.sys.id, assets);

    return (
        <div key={post.sys.id} className="container mx-auto px-2 mt-10">
            <div className="flex justify-between items-center">
                <h4 className="text-xl md:text-3xl font-bold mb-2">{post.fields.title}</h4>
                <div className="flex flex-col items-center">
                    <p className="text-sm md:text-md mb-4">نویسنده: {post.fields.author}</p>
                    <span className="text-md text-gray-400">{JalaliDate(post.fields.date)}</span>
                </div>
            </div>
            {thumbnailUrl && (
                <Image id="content" src={thumbnailUrl} loading="lazy" alt={post.fields.title} className="rounded-xl mb-4 object-contain mt-5 mx-auto" width={800} height={400}/>
            )}
            <span className="porse porse-lg mt-10 text-white px-10" style={{ fontSize, fontWeight, lineHeight: lineSpacing }}>
                <PostContentRender content={post.fields.richcontent}/>
            </span>
            <PostShare url={typeof window !== "undefined" ? window.location.href : pathname} title={post.fields.title} />
            <PostOptions />
            <Scroll />
            <div onClick={handleGoTop} className="bg-green-400 cursor-pointer rounded-sm p-1 my-10 flex justify-center">
                <div className="flex items-center gap-2 text-lg">
                    <span className="select-none">رفتن به بالای پست</span>
                    <AiOutlineToTop size={43} />
                </div>
            </div>
        </div>
    );
}
