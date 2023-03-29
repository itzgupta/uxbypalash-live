import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    const [color, setcolor] = useState(false)
    const changecolor = () => {
        if (window.scrollY >=90) {
      setcolor(true)
        } else {
      setcolor(false)
        }
    };

    window.addEventListener('scroll', changecolor)

  return (
    <div className={color ? 'navbar-scroll-bg bg-white fixed left-0 top-0 z-10 w-full ease-in duration-300' : 'bg-white fixed left-0 top-0 z-10 w-full ease-in duration-300'}>
        <div className='max-w-[1240px] m-auto flex h-[94px] justify-between items-center p-4 text-black'>
            <Link href='/'>
                <h4 className='font-[500] text-[24px]'>uxbypalash</h4>
            </Link>
            <ul className='hidden sm:flex font-[500]'>
                <li className='p-4 text-[20px] text-[#828282] hover:text-[#6E44FF] text-medium'>
                    <Link href='/'>work</Link>
                </li>
                <li className='p-4 text-[20px] text-[#828282] hover:text-[#6E44FF] text-medium'>
                    <Link href='/#contact'>contact</Link>
                </li>
                <li className='p-4 text-[20px] text-[#FF477E] hover:text-[#D71F56] text-medium'>
                    <Link href='https://dribbble.com/uxbypalash'><span>dribbble</span></Link>
                </li>
            </ul>

            {/* Mobile Button */}

            <div onClick={handleNav} className='bg-white block sm:hidden text-[#828282] z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile-slide Menu */}
            <div className={
                nav 
                    ? 'bg-white sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
                }
            >
                <ul className='font-[500]'>
                    <li className='p-4 text-4xl text-[#828282] hover:text-[#6E44FF] text-medium'>
                        <Link href='/#work'>work</Link>
                    </li >
                    <li className='p-4 text-4xl text-[#828282] hover:text-[#6E44FF] text-medium'>
                        <Link href='/#contact'>contact</Link>
                    </li>
                    <li className='p-4 text-4xl text-[#FF477E] hover:text-[#D71F56] text-medium'>
                        <Link href='https://dribbble.com/uxbypalash'><span>dribbble</span></Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar