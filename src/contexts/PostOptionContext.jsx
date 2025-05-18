/* eslint-disable react/prop-types */
'use client'
import { createContext, useEffect, useState } from "react";

export const PostOptionContext = createContext()

export const PostOptionProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState('24px')
    const [fontWeight, setFontWeight] = useState('normal')
    const [lineSpacing, setLineSpacing] = useState('40px')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFontSize(localStorage.getItem('fontSize') || '24px')
            setFontWeight(localStorage.getItem('fontWeight') || 'normal')
            setLineSpacing(localStorage.getItem('lineSpacing') || '40px')
        }
    },[])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('fontSize', fontSize)
            localStorage.setItem('fontWeight', fontWeight)
            localStorage.setItem('lineSpacing', lineSpacing)
        }
    }, [fontSize, fontWeight, lineSpacing])
    return (
        <PostOptionContext.Provider value={{ fontSize, setFontSize, fontWeight, setFontWeight, lineSpacing, setLineSpacing }}>
            {children}
        </PostOptionContext.Provider>
    )
}