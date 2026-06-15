import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SyncPostOptions = ({ setSettings }: any) => {
    const searchParams = useSearchParams()
    useEffect(() => {
        const fontSize = searchParams.get('fontSize')
        const fontWeight = searchParams.get('fontWeight')
        const lineSpacing = searchParams.get('lineSpacing')

        if (fontSize || fontWeight || lineSpacing) {
            setSettings({
                fontSize,
                fontWeight,
                lineSpacing
            })
        }
    }, [searchParams, setSettings])
    return null
}

export default SyncPostOptions