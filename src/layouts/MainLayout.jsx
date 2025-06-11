/* eslint-disable react/prop-types */
'use client'
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuOpenContext"
import Header from "@/components/Header/Header"
import Order from "@/components/Services"
import BlogPage from "@/app/blog/page"

const MainLayout = ({ children }) => {
    const { setIsMenuOpen } = useContext(MenuContext)
    return (
        <div className="fanum" onClick={() => setIsMenuOpen(false)}>
            <Header />
            <Order />
            <BlogPage showPaginate={false} showSearch={false} my={20}/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
