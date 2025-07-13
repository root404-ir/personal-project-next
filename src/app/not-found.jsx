import Link from 'next/link';

export default function NotFound() {
    const suggestedLinks = [
        { title: 'صفحه اصلی', href: '/' },
        { title: 'وبلاگ', href: '/blog' },
        { title: 'تماس', href: '/contact' },
    ]
    return (
        <div className="bg-blue-950 flex flex-col my-10 items-center gap-8 justify-center p-6">
            <h1 className="text-9xl font-bold text-green-600 mb-4 hover:text-blue-600 transition-all">404</h1>
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">صفحه پیدا نشد</h2>
            <p className="text-gray-200 mb-6 text-center">
                متأسفیم، صفحه‌ای که دنبالش بودید وجود ندارد یا ممکن است حذف شده باشد.
            </p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-7'>
                <p>صفحات پیشنهادی</p>
                {suggestedLinks.map(suggestLink => (
                    <div key={suggestLink.href}>
                        <Link href={suggestLink.href} className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all duration-300">{suggestLink.title}</Link>
                    </div >
                ))}
            </div>
        </div>
    );
}
