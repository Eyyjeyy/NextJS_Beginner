'use client';

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

function ActiveLinkHighlight() {
    const pathname = usePathname();
    console.log(pathname)

    useEffect(() => {
        console.log('Active Link Re-Render')
        const links = document.querySelectorAll('a.base-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            const linkChildDiv = link.querySelector('.relative')
            const activeHighlightLink = linkChildDiv.querySelector('div')
            if (href === pathname) {
                activeHighlightLink.classList.toggle('hidden')
                activeHighlightLink.classList.toggle('block')
                link.classList.add('text-[#00df9a]', 'font-bold');
            } else {
                if (activeHighlightLink.classList.contains('block')) {
                    activeHighlightLink.classList.toggle('hidden')
                    activeHighlightLink.classList.toggle('block')
                }
                link.classList.remove('text-[#00df9a]', 'font-bold');
            }
        })
    }, [pathname]);

    return (
        null
    )
}

export default ActiveLinkHighlight