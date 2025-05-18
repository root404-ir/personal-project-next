'use client'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

const TitlePage = () => {
    const pathname = usePathname()

    let mainTitle = 'وبلاگ شخصی محمد تفقدی'

    if (pathname === '/') {
        mainTitle = 'خانه'
    } else if (pathname === '/blog') {
        mainTitle = 'وبلاگ'
    } else if (pathname === '/contact') {
        mainTitle = 'تماس با من'
    } else if (pathname.startsWith('/post/post')) {
        mainTitle = 'پست'
    }
    return (
        <>
            <title>وبلاگ شخصی محمد تفقدی - {mainTitle}</title>
        </>
    )
}

export default TitlePage