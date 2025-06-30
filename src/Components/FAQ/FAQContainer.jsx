'use client'

import { useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'


function FAQContainer({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.3})

    useEffect(() => {
        console.log(isInView)
    }, [])

    return (
        <>
            <div className='max-w-[1240px] mx-auto px-8' ref={ref}>
                {children}
            </div>
        </>
    )
}

export default FAQContainer