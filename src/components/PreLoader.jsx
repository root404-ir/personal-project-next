
// export const PreLoader = () => {
//     return (
//         <>
//             <div className='absolute w-full bg-white top-0 '>
//                 <div className='flex justify-center items-center h-screen'>
//                     <img src={PreGif} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }
'use client'
export const ContactPreLoader = () => {
    return (
        <>
            <div>
                <div className='flex justify-center items-center'>
                    <img src='/assets/image/gif/Dual Ball@1x-1.0s-200px-200px.gif' alt="" width={30} className='h-10 object-contain' />
                </div>
            </div>
        </>
    )
}
