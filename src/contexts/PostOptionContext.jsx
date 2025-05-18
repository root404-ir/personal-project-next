/* eslint-disable react/prop-types */
'use client'
import { createContext, useEffect, useState } from "react";

export const PostOptionContext = createContext()

export const PostOptionProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(
        localStorage.getItem('fontSize') || '24px'
    )
    const [fontWeight, setFontWeight] = useState(
        localStorage.getItem('fontWeight') || 'noraml'
    )
    const [lineSpacing, setLineSpacing] = useState(
        localStorage.getItem('lineSpacing') || '40px'
    )

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize)
        localStorage.setItem('fontWeight', fontWeight)
        localStorage.setItem('lineSpacing', lineSpacing)
    }, [fontSize, fontWeight, lineSpacing])
    return (
        <PostOptionContext.Provider value={{ fontSize, setFontSize, fontWeight, setFontWeight, lineSpacing, setLineSpacing }}>
            {children}
        </PostOptionContext.Provider>
    )
}