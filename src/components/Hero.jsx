/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
  return (
    <div id='work' className='flex items-center justify-center h-screen border-[1px] border-b-[#D4D4D4]'>
        <div className='px-10 max-w-[1240px] sm:px-5 '>
            <p className='flex py-10 text-[#D6D6D6] text-[10px] font-medium items-center justify-center sm:text-[16px] lg:text-[20px]'>
                <span>"</span>Fortune favors the bold<span>"</span>
            </p>
            <h1 className='font-[700] text-[34px] sm:text-[64px] md:text-[82px] lg:text-[94px] xl:text-[128px]'>
                I'm Palash <br />
                <span className='animate-colorchange delay-500 duration-300 ease-in-out'>Product Designer.</span>
            </h1>
            <h3 className='py-5 mt-10 text-[12px] text-[#202020] font-medium md:text-[18px] xl:text-[20px]'>
                Who crafts <span className='font-bold text-[#6E44FF]'>digital user experiences with creativity and critical thinking.</span> <br />
                I love solving problems by designing enjoyable, usable, and useful products.
            </h3>
            <h3 className='text-[12px] text-[#5F5F5F] font-medium md:text-[18px] xl:text-[20px]'>
                My passion lies in creating online experiences that customers and users find <br />
                enjoyable, with the use of business, marketing, and UX/UI design elements. <br />
                I strive to combine these elements to achieve satisfaction among users and <br />
                customers alike.
            </h3>
        </div>
    </div>
  )
}

export default Hero