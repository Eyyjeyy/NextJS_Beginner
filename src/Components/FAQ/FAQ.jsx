import React from 'react'
import FAQList from '@/Components/FAQ/FAQList'

function FAQ() {
    const items = [
        {
            id: 1,
            question: 'What services do you offer?',
            answer: 'I offer to provide a secure full-stack or front-end only web application for either commercial or personal use. I do not provide paid/free hosting services but am willing to handle deployment.'
        },
        {
            id: 2,
            question: 'Cost of your Services?',
            answer: 'Pricing depends on the scope of the project. I provide flexible rates for both personal and commercial applications.'
        }
    ]

    return (
        <>
            <div className='text-black'>
                <h2 className='text-4xl font-semibold text-center text-[#00df9a]'>Frequently Asked Questions</h2>
                <hr className='my-4 w-[2px] h-[44px] mx-auto text-gray-300 bg-gray-300'></hr>
            </div>
            <div className='flex flex-col items-center text-black'>
                <div className='accordion max-w-[768px]'>
                    <FAQList items={items} />
                </div>
            </div>
        </>
    )
}

export default FAQ