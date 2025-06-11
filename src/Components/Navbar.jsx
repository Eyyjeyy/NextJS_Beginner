import React from 'react'
import MobileMenuContainer from './MobileMenuContainer'
import Link from 'next/link'

export default function Navbar() {
    
    return (
        <>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <Link className='p-4' href="/">Home</Link>
                <Link className='p-4' href="/about">About</Link>
                <Link className='p-4' href="/projects">Projects</Link>
            </ul>

            <MobileMenuContainer>
                <Link className='p-4 border-b border-gray-600' href="/">Home</Link>
                <Link className='p-4 border-b border-gray-600' href="/about">About</Link>
                <Link className='p-4' href="/projects">Projects</Link>
            </MobileMenuContainer>
        </>
    )
}
