import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 z-10 w-full ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
            <Link href='/'>
                <h4 className='font-medium text-[24px]'>uxbypalash</h4>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4 text-[20px]'>
                    <Link href='/'>Work</Link>
                </li>
                <li className='p-4 text-[20px]'>
                    <Link href='/'>Contact</Link>
                </li>
                <li className='p-4 text-[20px]'>
                    <Link href='/'><span>Dribbble</span></Link>
                </li>
            </ul>

            {/* Mobile Button */}

            <div className='block sm:hidden z-10'>
                <AiOutlineMenu size={20} />
            </div>

            {/* Mobile-slide Menu */}
            <div>
                <ul>
                    <li>
                        <Link href='/'>Work</Link>
                    </li>
                    <li>
                        <Link href='/'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/'><span>Dribbble</span></Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar