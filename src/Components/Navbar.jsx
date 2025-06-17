import React from 'react'
import MobileMenuContainer from './MobileMenuContainer'
import Link from 'next/link'
import ActiveLinkHighlight from './ActiveLinkHighlight'

export default function Navbar() {
    
    return (
        <>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <Link className='p-4 base-link' href="/">
                    <div className='relative'>
                        Home
                        <div className='hidden absolute left-1/2 transform -translate-x-1/2 w-[58px] border'></div>
                    </div>
                </Link>
                <Link className='p-4 relative base-link' href="/about">
                    <div className='relative'>
                        About
                        <div className='hidden absolute left-1/2 transform -translate-x-1/2 w-[60px] border'></div>
                    </div>
                </Link>
                <Link className='p-4 relative base-link' href="/projects">
                    <div className='relative'>
                        Projects
                        <div className='hidden absolute left-1/2 transform -translate-x-1/2 w-[72px] border'></div>
                    </div>
                </Link>
            </ul>
            <ActiveLinkHighlight />

            <MobileMenuContainer>
                <a className='block p-4 border-b border-gray-600' href="/">Home</a>
                <a className='block p-4 border-b border-gray-600' href="/about">About</a>
                <a className='block p-4 border-b border-gray-600' href="/projects">Projects</a>
            </MobileMenuContainer>
        </>
    )
}
