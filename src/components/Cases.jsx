/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


const Cases = () => {
  return (
    <div className='bg-white border-b-[1px] border-[#D4D4D4]'>
        <div className='p-4 max-w-[1240px] m-auto'>
            <div>
                <h2 className='flex text-[24px] sm:text-[40px] font-bold py-4'>Case Studies / Interfaces</h2>
                <p className=' text-[18px] sm:text-[20px] font-medium text-[#5F5F5F]'>
                    Discover my product design projects that aim to enhance user experience through potential feature identification. <br />
                    Check out my <span className='text-[#FF477E] font-medium underline underline-offset-4'><Link href='https://dribbble.com/uxbypalash'>Dribbble</Link></span> and <span className='text-[#F99D23] font-medium underline underline-offset-4'><Link href='https://www.instagram.com/uxbypalash'>Instagram</Link></span> for my hobby explorations of color palettes and UI trends.
                </p>
            </div>

            <div className='flex flex-col mt-4'>
                <div className='md:flex flex-nowrap gap-4'>
                    <div className='flex-col hover:animate-pulse'p-4>
                        <div className='py-1'>
                            <Link href='/'><img src="./assets/Debicover.svg" alt="" /></Link>
                        </div>
                        
                        <h5 className='text-[24px] font-bold py-[12px]'>Debi - A Safe transaction Application</h5>
                        <p className='text-[20px] font-medium text-[#5F5F5F]'>
                            Debi is the faster, safer way to send and receive money or make <br />
                            an online payment. Get started or create a merchant account to <br />
                            accept payments.
                        </p>
                    </div>

                    <div className='flex-col hover:animate-pulse'p-4>
                        <div className='py-1'>
                            <Link href='/'><img src="./assets/Upnetcover.svg" alt="" /></Link>
                        </div>
                        
                        <h5 className='text-[24px] font-bold py-[12px]'>Upnet - UI Design Challenge</h5>
                    </div>

                </div>

                <div className='flex flex-nowrap gap-4 mt-4'>
                    <div className='flex-col hover:animate-pulse'p-4>
                        <div className='py-1'>
                            <Link href='/'><img src="./assets/Docsaabcover.svg" alt="" /></Link>
                        </div>
                        
                        <h5 className='text-[24px] font-bold py-[12px]'>Upnet - UI Design Challenge</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cases