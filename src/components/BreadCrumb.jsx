'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const formatSlug = (slug) => {
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
}

const BreadCrumb = () => {
    const pathname = usePathname() || '/'
    const pathName = pathname.split('/').filter(Boolean)

    if (pathName.length === 0) return null

    return (
        <nav className="text-sm my-4">
            <ul className="flex flex-wrap items-center gap-2 text-gray-600">
                <li>
                    <Link href="/">خانه</Link>
                </li>
                {pathName.map((part, index) => {
                    const to = '/' + pathName.slice(0, index + 1).join('/')
                    const label = formatSlug(part)
                    const isLast = index === pathName.length - 1
                    return (
                        <li key={to} className="flex items-center gap-1">
                            <span className='text-lg mx-'>{'>'}</span>
                            {isLast ? (
                                <span className="text-gray-500">{label}</span>
                            ) : (
                                <Link href={to} className="hover:underline">
                                    {label}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumb
