import Link from 'next/link'
const Menu = () => {
    return (
        <>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link href={'/'}>صفحه اصلی</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link href={'/blog'}>وبلاگ</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link href={'https://t.me/mtjsBot'} target="_blank">ربات تلگرام</Link></li>
            <li className='nav-item hover:transform hover:scale-110 transition-all'><Link href={'/contact'}>تماس</Link></li>
        </>
    )
}

export default Menu