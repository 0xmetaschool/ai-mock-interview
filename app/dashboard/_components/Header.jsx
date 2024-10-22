"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/meta.png'} width={160} height={23} alt='logo' />
        <ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-black hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-black font-bold'}
            `}
            >Dashboard</li>
            </Link>
            
            
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-black hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-black font-bold'}
            `}>Upgrade</li>
            </Link>
            
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header