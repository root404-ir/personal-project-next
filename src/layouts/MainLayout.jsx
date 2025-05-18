/* eslint-disable react/prop-types */
'use client'
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuOpenContext"
import TitlePage from "../components/TitlePage"
import Header from "@/components/Header/Header"
import Order from "@/components/Services"
import Blog from "@/pages/Blog"

const MainLayout = ({ children }) => {
    const { setIsMenuOpen } = useContext(MenuContext)
    return (
        <div className="fanum" onClick={() => setIsMenuOpen(false)}>
            <TitlePage />
            <Header />
            <Order />
            <Blog />
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
