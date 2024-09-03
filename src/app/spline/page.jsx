import Buttons from '@/components/Global/Buttons'
import { Oxanium } from 'next/font/google'
import React from 'react'

const oxanium = Oxanium({ subsets: ['latin'] })

const Page = () => {
    return (
        <main>
            <div className='h-full w-full relative flex flex-col text-center'>
                {/* Content */}
                <div className='pt-12 absolute top-0 left-1/2 -translate-x-1/2'>
                    <h2 className={`linearTextTitle text-7xl mb-3 leading-[1.1] font-bold uppercase ${oxanium.className}`}>Web3 Design
                        <br /> <span> Co-bytes</span></h2>
                    <Buttons text="Get Started" />
                </div>
                <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-cd2c79bd0939c4c21914c21f70d07fb2/' width='100%' height='100%' className='h-[150vh] pt-20'></iframe>
            </div>
        </main>
    )
}

export default Page

