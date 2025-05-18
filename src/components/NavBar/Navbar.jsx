'use client'
import '../../styles/navbar.css'
import { LuGithub } from "react-icons/lu";
import Menu from './Menu';
import { useContext, useEffect, useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import Link from 'next/link'
import { MenuContext } from '../../contexts/MenuOpenContext';
const Navbar = () => {
    const [isNavFixed, setIsNavFixed] = useState(false)
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsNavFixed(true)
            } else {
                setIsNavFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <>
            <nav className={`${isNavFixed ? 'fixed top-0 bg-green-400 text-white rounded-lg px-10' : ' bg-blue-950'} w-full transition-all delay-75 border-b z-50`}>
                <div className={`flex items-center justify-between h-auto rounded-2xl  ${isNavFixed ? 'p-0' : 'p-2'}`}>
                    <div className='lg:hidden' onClick={(e) => {
                        e.stopPropagation()
                        setIsMenuOpen(true)
                    }
                    } >
                        <CgMenuGridO className='text-4xl' />
                    </div>
                    <Link href={'/'}>
                        <img src='/assets/image/logo/logo.webp' alt="" width={200} />
                    </Link>

                    {isMenuOpen && <ul className={`${isNavFixed && 'h-screen'} lg:hidden absolute text-black top-0 z-50 bg-white h-full right-0 flex flex-col items-center gap-10 p-10`}>
                        <RiCloseFill className='text-4xl' onClick={(e) => {
                            e.stopPropagation()
                            setIsMenuOpen(false)
                        }} />
                        <Menu />
                    </ul>}

                    <ul className='lg:flex hidden gap-10 '>
                        <Menu />
                    </ul>
                    <div className='flex items-center gap-10'>
                        <Link href={'https://github.com/root404-ir/personal-project/tree/main/src'}>
                            <LuGithub className='text-3xl' />
                        </Link>

                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar