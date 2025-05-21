import { MenuProvider } from "@/contexts/MenuOpenContext";
import './main.css'
import { PostOptionProvider } from "@/contexts/PostOptionContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import BreadCrumb from "@/components/BreadCrumb";

export const metadata = {
    title: 'وبلاگ شخصی محمد تفقدی',
    description: 'وبسایت محمد تفقدی ',
    verification: {
        google: 'YqRFW-zvQbF2eLCVZlaIVRjbXI932nrXpls25hlBKEM',
    },
    icons: {
        icon: '/fav.svg',
    },
};
export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <link rel="icon" href="/fav.svg" type="image/x-icon" />
            <body className="bg-blue-950 text-white">
                <PostOptionProvider>
                    <MenuProvider>
                        <Navbar />
                        <BreadCrumb />
                        {children}
                        <Footer />
                    </MenuProvider>
                </PostOptionProvider>
            </body>
        </html>
    );
}
