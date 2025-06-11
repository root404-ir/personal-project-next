
'use client'
import React from "react";
import { createContext, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PostOption = {
    fontSize: string,
    fontWeight: string,
    lineSpacing: string,
    setSettings: (settings: Partial<Omit<PostOption, 'setSettings'>>) => void
}

export const PostOptionContext = createContext<PostOption | undefined>(undefined)

export const PostOptionProvider = ({ children }: { children: React.ReactNode }) => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()


    const defaultSettings = {
        fontSize: '18px',
        fontWeight: 'normal',
        lineSpacing: '40px'
    }

    const [settings, setSettingsState] = useState({
        fontSize: defaultSettings.fontSize,
        fontWeight: defaultSettings.fontWeight,
        lineSpacing: defaultSettings.lineSpacing
    })


    useEffect(() => {
        const fontSize = searchParams.get('fontSize') || localStorage.getItem('font_size') || defaultSettings.fontSize
        const fontWeight = searchParams.get('fontWeight') || localStorage.getItem('font_weight') || defaultSettings.fontWeight
        const lineSpacing = searchParams.get('lineSpacing') || localStorage.getItem('line_spacing') || defaultSettings.lineSpacing

        setSettingsState({ fontSize, fontWeight, lineSpacing })
    }, [defaultSettings.fontSize, defaultSettings.fontWeight, defaultSettings.lineSpacing, searchParams])

    useEffect(() => {
        localStorage.setItem('font_size', settings.fontSize)
        localStorage.setItem('font_weight', settings.fontWeight)
        localStorage.setItem('line_spacing', settings.lineSpacing)
    }, [settings.fontSize, settings.fontWeight, settings.lineSpacing])

    const setSettings = (newSettings: Partial<typeof settings>) => {
        const updated = { ...settings, ...newSettings }
        setSettingsState(updated)

        const params = new URLSearchParams()
        params.set('fontSize', updated.fontSize)
        params.set('fontWeight', updated.fontWeight)
        params.set('lineSpacing', updated.lineSpacing)

        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <PostOptionContext.Provider value={{ ...settings, setSettings }}>
            {children}
        </PostOptionContext.Provider>
    )
}