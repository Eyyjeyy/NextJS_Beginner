import React from 'react'
import MobileMenuContainer from './MobileMenuContainer'

export default function Navbar() {
    
    return (
        <>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <MobileMenuContainer>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contacts</li>
            </MobileMenuContainer>




            
            {/* <div onClick={handleNav} className='block md:hidden'>
                {!nav ? '' : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[100vw] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-900 z-100' : 'fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500'}>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mr-0'>REACT.</h1>
                    <div onClick={handleNav} className='block md:hidden pe-4'>
                        <AiOutlineClose className='z-100' size={24} />
                    </div>
                </div>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div> */}
        </>
    )
}
