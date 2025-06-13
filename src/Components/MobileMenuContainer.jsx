'use client'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


function MobileMenuContainer({ children }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    console.log(nav)
    
    return (
        <>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {!nav ? <AiOutlineMenu size={20} /> : '' }
            </div>
            <div className={!nav ? 'fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500' : 'fixed left-0 top-0 w-[100vw] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-900 z-100'}>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mr-0'>REACT.</h1>
                    <div onClick={handleNav} className='block md:hidden pe-4'>
                        <AiOutlineClose className='z-100 cursor-pointer' size={24} />
                    </div>
                </div>
                <ul className='uppercase p-4'>
                    {children}
                </ul>
            </div>
        </>
        
    )
}

export default MobileMenuContainer