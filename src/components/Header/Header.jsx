import text from '../../data/text.json'
import '../../styles/header.css'
import Icons from './Icons'
import gsap from 'gsap'
import { useEffect } from 'react'
import TextPlugin from 'gsap/TextPlugin'
import Img from 'next/image'
const Header = () => {
    gsap.registerPlugin(TextPlugin)
    useEffect(() => {
        gsap.to('#header-text', {
            duration: 2,
            text: text.headertext,
            ease: "none"
        })
    }, [])

    return (
        <>
            <div className='w-full flex flex-col justify-evenly h-screen bg-header-dark'>
                <div className='flex flex-col gap-10 items-center lg:gap-0 lg:flex-row lg:justify-between container mx-auto'>
                    <div className='lg:max-w-[60%] flex flex-col'>
                        <p id='header-text' className='text-4xl text-center leading-20 md:text-right'></p>
                    </div>
                    <div className='lg:max-w-[40%]'>
                        <Img src='/assets/image/logo/logo.webp' loading='lazy' alt="logo" width={400} height={400}/>
                    </div>
                </div>
                <div className=' w-full px-4'>
                    <Icons />
                </div>
            </div>
        </>
    )
}

export default Header