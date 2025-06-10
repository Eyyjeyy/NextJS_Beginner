'use client'
import React from 'react'
import { motion } from 'motion/react';

function NavbarContainer({ children }) {
    return (
        <motion.div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' initial={{ opacity: 0, y: -50 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            { children }
        </motion.div>
    )
}

export default NavbarContainer