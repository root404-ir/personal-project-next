// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-6">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">صفحه پیدا نشد</h2>
            <p className="text-gray-200 mb-6 text-center">
                متأسفیم، صفحه‌ای که دنبالش بودید وجود ندارد یا ممکن است حذف شده باشد.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all duration-300"
            >
                بازگشت به صفحه اصلی
            </Link>
        </div>
    );
}
