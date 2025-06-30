'use client';

import React, { act, useEffect, useState, useRef, useContext } from 'react'
import { UserContext } from '@/Components/StatsSection'
import NumberFlow from '@number-flow/react'
import { useInView } from 'motion/react';

function StatsAnimatedNumbers() {
    const stateActive = useContext(UserContext)
    console.log(`StateActive is: ${stateActive}`)

    const [projectNumber, setProjnumber] = useState(null)
    const [active, setActive] = useState(false)
    useEffect(() => {
        // setActive(true)
        // console.log(active)
        // console.log('trigger')
        // setTimeout(() => {
        //     setProjnumber(5)
        // }, 1000);
        if (stateActive && !active) {
            setActive(true);
            console.log('triggered');
            setTimeout(() => {
                setProjnumber(5);
            }, 1000);
        }
    }, [stateActive])

    return (
        <>
            { active ? <NumberFlow value={projectNumber} unstyled /> : '' }
        </>
    )
}

export default StatsAnimatedNumbers