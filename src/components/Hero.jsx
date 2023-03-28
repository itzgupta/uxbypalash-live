/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 border-2 border-b-[#D4D4D4]'>
        <div className=''>
            <p><span>"</span>Fortune favors the bold<span>"</span></p>
            <h1 className='font-[700] text-[128px]'>
                I'm Palash <br />
                <span className='animate-colorchange delay-500 duration-300 ease-in-out'>Product Designer.</span>
            </h1>
            <h3>
                Who crafts <span>digital user experiences with creativity and critical thinking.</span> <br />
                I love solving problems by designing enjoyable, usable, and useful products.
            </h3>
            <h3 className=''>
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