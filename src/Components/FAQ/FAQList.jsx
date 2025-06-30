'use client'

import React, { useState } from 'react'
import FAQAccordion from '@/Components/FAQ/FAQAccordion'

function FAQList({ items }) {
    const [selected, setSelected] = useState(1)

    return (
        <>
            {items.map((item) => (
                <FAQAccordion key={item.id} id={item.id} question={item.question} selected={selected} setSelected={setSelected}>
                    {item.answer}
                </FAQAccordion>
            ))}
        </>
    )
}

export default FAQList