import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='xl:px-[100px] py-[20px] flex justify-center items-center sm1:px-0' >
        <nav className='border-[2px] border-black xl:px-[100px] py-[15px] rounded-[20px] font-semibold flex justify-center items-center gap-[30px] sm1:px-[10px] sm1:py-[8px] sm1:gap-[10px] sm1:text-[11px] sm2:py-[9px] sm2:text-[15px] md1:text-[16px] md1:py-[10px] md1:gap-[15px] md1:px-[20px] md2:gap-[20px] md2:py-[13px] md2:px-[40px] lg1:px-[70px] lg1:gap-[25px] lg1:py-[15px] lg2:text-[18px] '>
            <Link href='/' className='hover:underline'>Home</Link>
            <Link href='/Jobs' className='hover:underline'>Jobs</Link>
            <Link href='/Success' className='hover:underline'>Success</Link>
            <Link href='/Services' className='hover:underline'>Services</Link>
            <Link href='/Pricing' className='hover:underline'>Pricing</Link>
        </nav>
    </div>
  )
}

export default Header