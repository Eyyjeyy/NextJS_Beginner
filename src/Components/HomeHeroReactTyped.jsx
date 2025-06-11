'use client'
import React from 'react'
import { ReactTyped } from 'react-typed'

function HomeHeroReactTyped() {
    return (
        <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />

    )
}

export default HomeHeroReactTyped