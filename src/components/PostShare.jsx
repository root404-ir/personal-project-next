/* eslint-disable react/prop-types */
'use client'
import { useEffect, useState } from "react"
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"
import { MdShare } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import gsap from "gsap";

const PostShare = ({ url, title }) => {
    const [copied, setCopied] = useState(false)
    const [shareOpen, setShareOpen] = useState(false)

    useEffect(() => {
        let tl = gsap.timeline()
        if (shareOpen) {
            tl.to('#whatsapp', { y: -50 })
            tl.to('#telegram', { y: -100 })
            tl.to('#linkedin', { y: -150 })
            tl.to('#email', { y: -200 })
            tl.to('#copy-link', { y: -250 })
        } else {
            tl.to('#whatsapp', { y: 0 })
            tl.to('#telegram', { y: 0 })
            tl.to('#linkedin', { y: 0 })
            tl.to('#email', { y: 0 })
            tl.to('#copy-link', { y: 0 })
        }
    }, [shareOpen])

    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        })
    }
    return (
        <div className="dark:text-white flex justify-end items-center gap-10 px-4">
            <div className="flex justify-end items-center gap-10 my-10">
                <WhatsappShareButton id="whatsapp" url={url} title={title} className="absolute">
                    <WhatsappIcon size={32} className="rounded-lg" />
                </WhatsappShareButton>
                <TelegramShareButton id="telegram" url={url} title={title} className="absolute">
                    <TelegramIcon size={32} className="rounded-lg" />
                </TelegramShareButton>
                <LinkedinShareButton id="linkedin" url={url} title={title} className="absolute">
                    <LinkedinIcon size={32} className="rounded-lg" />
                </LinkedinShareButton>
                <EmailShareButton id="email" url={url} title={title} className="absolute">
                    <EmailIcon size={32} className="rounded-lg" />
                </EmailShareButton>
                <div onClick={handleCopy} id="copy-link" className={`dark:bg-white bg-black text-white dark:text-black rounded-lg p-2 ${copied && 'flex items-center gap-2'}`}>
                    <FaLink size={19} />
                    <span>{copied && 'لینک کپی شد!'}</span>
                </div>
                <div  onClick={() => setShareOpen(!shareOpen)} className="absolute cursor-pointer bg-gray-600 p-2 text-white rounded-lg">
                    <MdShare size={33} title="اشتراک گزاری پست"/>
                </div>
            </div>
        </div>
    )
}

export default PostShare