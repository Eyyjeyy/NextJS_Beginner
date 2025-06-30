'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';

function FAQAccordion({ id, question, children, selected, setSelected }) {
    const ref = useRef(null)
    const [contentHeight, setContentHeight] = useState('auto');

    useLayoutEffect(() => {
        if (ref.current) {
            setContentHeight(ref.current.offsetHeight);
        }
    }, [selected]);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            <div className='accordion-item'>
                <h3 className='text-3xl font-semibold py-4 flex flex-row justify-between cursor-pointer' onClick={ () => toggle(id) }>
                    <p className={ `transition duration-350 ${selected === id ? 'text-[#00df9a]' : ''}` }>{question}</p>
                    <div className='accordion-button flex items-center'>
                        <RiArrowDownSLine className={ `transition duration-350 ${selected === id ? '-rotate-180' : 'rotate-0'}` } />
                    </div>
                </h3>
                <div className={ `text-lg font-medium transition-all duration-500 mr-8 overflow-y-hidden ${selected === id ? 'ease-[cubic-bezier(0.42,0,0.58,1)]' : 'ease-[cubic-bezier(1, 0, 0.9, 0.05)]'}` } style={{ height: selected === id ? contentHeight : 0 }}>
                    <div ref={ref}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQAccordion