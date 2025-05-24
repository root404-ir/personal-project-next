'use client'
import { MdContactPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import Link from 'next/link'

const ContactIcons = () => {
    const [contactMenuOpen, setContactMenuOpen] = useState(false)

    useEffect(() => {
        let tl = gsap.timeline()
        if (contactMenuOpen) {
            tl.to('.telegram', { y: 50 })
            tl.to('.github', { y: 100 })
            tl.to('.telegram_bot', { y: 150 })
        } else {
            tl.to('.telegram', { y: 0 })
            tl.to('.github', { y: 0 })
            tl.to('.telegram_bot', { y: 0 })
        }
    }, [contactMenuOpen])


    return (
        <>
            <div className="absolute left-[50] md:left-1 bottom-0 flex gap-10 my-5 md:top-10 z-10">
                <Link href={'https://t.me/root404'}>
                    <div title="پیام در تلگرام" className={`telegram bg-white border border-gray-400 md:absolute md:left-1 md:top-1  flex justify-center items-center text-black rounded-full p-2`}>
                        <FaTelegramPlane className="text-2xl" />
                    </div>
                </Link>
                <Link href={'https://github.com/root404-ir'}>
                    <div title="گیت هاب" className={`github bg-white border border-gray-400   md:absolute md:left-1 md:top-1 flex justify-center items-center text-black rounded-full p-2`}>
                        <PiGithubLogoBold className="text-2xl" />
                    </div>
                </Link>
                <Link href={'https://t.me/mtjsBot'}>
                    <div title="ربات تلگرام" className={`telegram_bot bg-white border border-gray-400  md:absolute md:left-1 md:top-1 flex justify-center items-center text-black rounded-full p-2`}>
                        <FaRobot className="text-2xl" />
                    </div>
                </Link>
                <div onClick={() => setContactMenuOpen(!contactMenuOpen)} className="bg-white hidden md:block border border-gray-400 cursor-pointer absolute left-0 md:flex justify-center items-center text-black rounded-full p-2">
                    {contactMenuOpen ? <AiOutlineClose className="text-3xl" /> : <MdContactPhone className="text-3xl" />}
                </div>
            </div >
        </>
    )
}

export default ContactIcons