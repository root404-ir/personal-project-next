import { Link } from 'react-router'
import Image404 from '/assets/image/404/gettyimages-108350978-612x612-removebg-preview (1).png'
import '../styles/404.css'
const Error404Page = () => {
  return (
    <>
      <div className='flex flex-col gap-10 items-center my-10'>
        <div className="flex justify-center">
          <h4 className='enFont text-6xl'>اوه ! رفیق انگاری راه رو اشتباه اومدی!</h4>
        </div>

        <div className='flex justify-center'>
          <img src={Image404} alt="" />
        </div>

        <div className='flex flex-col items-center gap-5'>
          <Link to={'/'} className='bg-green-600 rounded-2xl p-2'>بیا بریم صفحه اصلی</Link>
        </div>
      </div>
    </>
  )
}

export default Error404Page