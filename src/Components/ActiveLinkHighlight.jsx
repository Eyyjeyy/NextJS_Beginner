'use client';

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

function ActiveLinkHighlight() {
    const pathname = usePathname();

    useEffect(() => {
        const links = document.querySelectorAll('a.base-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === pathname) {
                link.classList.add('text-[#00df9a]', 'font-bold', 'underline');
            } else {
                link.classList.remove('text-[#00df9a]', 'font-bold', 'underline');
            }
        })
    }, [pathname]);

    return (
        null
    )
}

export default ActiveLinkHighlight