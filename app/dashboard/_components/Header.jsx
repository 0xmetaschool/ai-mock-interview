// Setting up the header of application
"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            {/* Logo on the left */}
            <span className='text-2xl font-bold'>MockInterviewerGPT</span>

            {/* Right-aligned header Menu items */}
            <ul className='flex gap-6 ml-auto'>
                <Link href={"/dashboard"}>
                    <li className={`hover:text-black hover:font-bold transition-all
                    cursor-pointer
                    ${path == '/dashboard' && 'text-black font-bold'}
                    `}
                    >Dashboard</li>
                </Link>
                <Link href={"/dashboard/upgrade"}>
                    <li className={`hover:text-black hover:font-bold transition-all
                    cursor-pointer
                    ${path == '/dashboard/upgrade' && 'text-black font-bold'}
                    `}>Upgrade</li>
                </Link>
            </ul>

            {/* Wrapping UserButton in a div to apply margin */}
            <div className="ml-6">
                <UserButton />
            </div>
        </div>
    );
}

export default Header;
