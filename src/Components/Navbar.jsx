import React from 'react'
import MobileMenuContainer from './MobileMenuContainer'
import Link from 'next/link'
import ActiveLinkHighlight from './ActiveLinkHighlight'

export default function Navbar() {
    
    return (
        <>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <Link className='p-4 base-link' href="/">Home</Link>
                <Link className='p-4 base-link' href="/about">About</Link>
                <Link className='p-4 base-link' href="/projects">Projects</Link>
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
