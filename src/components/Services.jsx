import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect } from 'react'
const Order = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.set('#bot', { x: 200, opacity: 0 })
        gsap.set('#website', { x: 200, opacity: 0 })
        gsap.set('#linux', { x: 200, opacity: 0 })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#service_container',
                toggleActions: 'play none none none',
            }
        })

        tl.to('#bot', { x: 0, opacity: 1, duration: 1 })
        tl.to('#website', { x: 0, opacity: 1, duration: 1 })
        tl.to('#linux', { x: 0, opacity: 1, duration: 1 })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])
    return (
        <>
            <div id='service_container' className="grid lg:grid-cols-3 text-white md:grid-cols-2 container mx-auto gap-10 md:gap-5 my-10">
                <div id='bot' className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(135deg, #0088cc, #32c5ff)' }}>
                    <p className='font-bold text-xl w-full'>توسعه ربات های تلگرامی</p>
                    <img src='/assets/image/my_service/bot.webp' loading='lazy' alt="ربات تلگرامی" className='w-67 -translate-y-4 h-43 object-contain' />
                </div>
                <div id='website' className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(331deg,rgba(0, 208, 245, 1) 0%, rgba(3, 3, 3, 1) 100%)' }}>
                    <p className='font-bold text-xl w-full'>طراحی و توسعه وبسایت</p>
                    <img src='/assets/image/my_service/web.webp' loading='lazy' alt="وب" className='w-50 -translate-y-4 h-43 object-contain' />
                </div>
                <div id='linux' className='flex relative items-center justify-between h-35 px-4 rounded-xl' style={{ background: 'linear-gradient(133deg,rgba(255, 255, 255, 1) 0%, rgba(64, 64, 64, 1) 0%, rgba(255, 229, 0, 1) 100%)' }}>
                    <p className='font-bold text-xl'>مدیریت سرور های لینوکسی</p>
                    <img src='/assets/image/my_service/linux.webp' loading='lazy' alt="سرور های لینوکسی" className='w-67 -translate-y-4 h-43 object-contain' />
                </div>
            </div>
        </>
    )
}

export default Order