/* eslint-disable react/prop-types */
'use client'
import { createContext, useState } from "react";

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
            {children}
        </MenuContext.Provider>
    )
}