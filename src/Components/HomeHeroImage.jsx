'use client'

import React from 'react'
import { motion } from 'motion/react'

function HomeHeroImage({ children }) {
    return (
        <>
            <motion.div className='relative' initial={{ opacity: 0, x: -150 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.25 }}>
                {children}
            </motion.div>
        </>
    )
}

export default HomeHeroImage