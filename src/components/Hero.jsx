/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 border-[1px] border-b-[#D4D4D4]'>
        <div className=''>
            <p className='flex py-10 text-[#D6D6D6] text-[20px] font-medium items-center justify-center'>
                <span>"</span>Fortune favors the bold<span>"</span>
            </p>
            <h1 className='font-[700] text-[128px]'>
                I'm Palash <br />
                <span className='animate-colorchange delay-500 duration-300 ease-in-out'>Product Designer.</span>
            </h1>
            <h3 className='py-5 mt-10 text-[20px] text-[#202020] font-medium'>
                Who crafts <span className='font-bold text-[#6E44FF]'>digital user experiences with creativity and critical thinking.</span> <br />
                I love solving problems by designing enjoyable, usable, and useful products.
            </h3>
            <h3 className='text-[20px] text-[#5F5F5F] font-medium'>
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