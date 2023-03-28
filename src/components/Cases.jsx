import React from 'react'
import Link from 'next/link'


const Cases = () => {
  return (
    <div className=''>
        <div>
            <h2 className='max-w-[1240px] m-auto flex text-[40px] font-bold p-4'>Case Studies / Interfaces</h2>
            <p className='max-w-[1240px] m-auto flex-col p-4 text-[20px]'>
                Discover my product design projects that aim to enhance user experience through potential feature identification. <br />
                Check out my 
                <Link href='https://dribbble.com/uxbypalash'><span className='text-[#FF477E] font-medium underline'> Dribbble</span></Link> and <Link href='https://www.instagram.com/uxbypalash'><span className='text-[#F99D23] font-medium underline'>Instagram</span></Link> for my hobby explorations of color palettes and UI trends.
            </p>
        </div>

        <div>
            <div>
                
                <div>
                    <Link href='/'><img src="./assets/Debicover.svg" alt="" /></Link>
                </div>
                
                <h5>Debi - A Safe transaction Application</h5>
                <p>
                    Debi is the faster, safer way to send and receive money or make <br />
                    an online payment. Get started or create a merchant account to <br />
                    accept payments.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cases