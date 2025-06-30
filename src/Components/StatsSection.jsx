'use client';

import React, { useEffect, useState, useRef, createContext, useContext } from 'react'
import { useInView } from 'motion/react';

export const UserContext = createContext();

function StatsSection({ children }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1, once: true })
    const [statAnimActive, setAnimActive] = useState(false);

    useEffect(() => {
        if (isInView && !statAnimActive) {
            setAnimActive(!statAnimActive)
            console.log('IS IN VIEW');
        }
    }, [isInView])

    return (
        <>
            <UserContext.Provider value={statAnimActive}>
                <div className='max-w-[1240px] mx-auto px-8' ref={ref}>
                    {children}
                </div>
            </UserContext.Provider>
        </>
    )
}

export default StatsSection