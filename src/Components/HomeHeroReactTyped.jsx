'use client'
import React from 'react'
import { ReactTyped } from 'react-typed'

function HomeHeroReactTyped() {
    const textArr = [
        // 'John Angelo', 
        // 'Web Developer', 
        'Continuously Learning'
    ]

    return (
        <>
            <ReactTyped className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#00df9a] py-4' strings={textArr} typeSpeed={60} backSpeed={140} loop />
        </>
    )
}

export default HomeHeroReactTyped