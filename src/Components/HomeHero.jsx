'use client'
import React from 'react'
import { motion } from 'motion/react'

function HomeHero({ children }) {
    return (
        <>
            <motion.div className='max-w-[1240px] px-4 w-full min-h-[calc(100vh+-96px)] md:max-h-[calc(100vh+-96px)] mx-auto md:text-center grid md:grid-cols-12'>
                {children}
            </motion.div>
        </>
    )
}

export default HomeHero