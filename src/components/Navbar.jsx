import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setboxshadow] = useState('none');

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(()=> {
        const changebackground = () => {
            if(window.scrollY >= 90) {
                setboxshadow('0px 6px 10px rgba(0, 0, 0, 0.14)')
            } else {
                setboxshadow('none')
            }
        };
        window.addEventListener('scroll', changebackground);
    }, []);

  return (
    <div style={{boxShadow: `${shadow}` }} className='bg-white fixed left-0 top-0 z-10 w-full ease-in duration-300'>
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
                        <Link onClick={handleNav} href='/'>work</Link>
                    </li >
                    <li className='p-4 text-4xl text-[#828282] hover:text-[#6E44FF] text-medium'>
                        <Link onClick={handleNav} href='/#contact'>contact</Link>
                    </li>
                    <li className='p-4 text-4xl text-[#FF477E] hover:text-[#D71F56] text-medium'>
                        <Link onClick={handleNav} href='https://dribbble.com/uxbypalash'><span>dribbble</span></Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar