'use client'
import React from 'react'
import { motion } from 'motion/react'

function HomeHero({ children }) {
    return (
        <>
            <motion.div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                {children}
            </motion.div>
        </>
    )
}

export default HomeHero