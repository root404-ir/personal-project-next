import { PreLoader } from '@/components/PreLoader';
import Layout from '../layouts/MainLayout';
export default function MyApp({ Component, pageProps }) {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    const handlePageLoad = () => setPageLoad(true)
    if (document.readyState === 'complete') {
      setPageLoad(true)
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])
  return (
    <>
      {pageLoad ? <PreLoader /> : <Layout>
        <Component {...pageProps} />
      </Layout>}
    </>
  );
}
