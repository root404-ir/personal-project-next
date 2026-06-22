'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from './codingAnimationIcon.json'
const CodeEditor = () => {
    return (
        <div className='container my-16'>
            <div className='flex justify-around my-10'>
                <div className='w-[50%] flex flex-col justify-between'>
                    <div>
                        <h2 className='text-4xl text-green-500 leading-32'>کد ادیتور آنلاین</h2>
                        <p>شما عزیزان میتوانید در شرایطی که دسترسی به IDE های خودتون ندارید از کد ادیتور آنلاین ما استفاده کنید کد ادیتوری ساده که از زبان های html,css,js پشتیبانی میکند و میتواند نیاز های اولیه شمارا در شرایط خاص برطرف سازد.</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='group hover:shadow-2xl hover:shadow-green-700 hover:scale-105 hover:bg-blue-900 transition-all delay-75 bg-green-400 w-[50%] py-2 px-4 rounded-2xl cursor-pointer border '>
                            <span className='font-bold group-hover:px-16 transition-all tracking-widest bg-gray-900/30 delay-75 rounded-2xl py-2 px-4'>ورود به کد ادیتور</span>
                        </button>
                    </div>
                </div>
                <Lottie animationData={animationData} />
            </div>
        </div>
    )
}

export default CodeEditor