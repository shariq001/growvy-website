import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='flex justify-between xl:gap-[150px] xl:px-[100px] py-[50px] sm1:px-[15px] sm1:flex-col sm1:items-start sm1:gap-[30px] sm2:items-center sm2:px-[20px] md1:flex-row md1:px-[25px] md2:px-[30px] lg1:px-[40px] lg1:gap-[80px] lg2:px-[70px]'>
        
        {/* 1 */}
        <div className='flex flex-col gap-[5px] sm1:gap-[10px] lg2:gap-[15px] sm2:w-[350px]'>
            <h1 className='xl:text-[75px] font-bold sm1:text-[45px] lg2:text-[60px]'>Growvy</h1>
            <p className='xl:w-[450px] xl:text-[28px] sm1:text-[18px] sm1:leading-[20px] leading-[28px] lg2:text-[22px]'>Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!</p>

            <div className='flex justify-start items-center gap-[10px]'>
                <Link href='https://www.facebook.com' target='_blank' className='p-[12px] bg-blue-500 text-white rounded-full'><FontAwesomeIcon icon={faFacebookF} className='size-[22px]'/></Link>

                <Link href='https://www.instagram.com' target='_blank' className='p-[12px] bg-red-600 text-white rounded-full'><FontAwesomeIcon icon={faInstagram} className='size-[22px]'/></Link>

                <Link href='https://www.linkedin.com' target='_blank' className='p-[12px] bg-blue-800 text-white rounded-full'><FontAwesomeIcon icon={faLinkedinIn} className='size-[22px]'/></Link>
            </div>
        </div>

        {/* 2 */}
        <div className='flex flex-col xl:w-[450px] gap-1.5 sm2:w-[350px]'>

            <ul className='xl:text-[22px] sm1:text-[18px] lg2:text-[20px] font-semibold pl-[10px] list-disc'>
                <li>
                    <Link href='/Services' className='hover:underline'>About Us</Link>
                </li>
                <li>
                    <Link href='/Services' className='hover:underline'>Services</Link>
                </li>
                <li>
                    <Link href='/Pricing' className='hover:underline'>Plans & Pricing</Link>
                </li>
                <li>
                    <Link href='/Pricing' className='hover:underline'>Business Solutions</Link>
                </li>
                <li>
                    <Link href='/Success' className='hover:underline'>Success Stories</Link>
                </li>
                <li>
                    <Link href='/Jobs' className='hover:underline'>Jobs</Link>
                </li>
            </ul>

            <div className='flex justify-start items-center gap-[2px]'>
                <FontAwesomeIcon icon={faStar} className='text-[#198b1f] size-[30px] animate-pulse' />
                <FontAwesomeIcon icon={faStar} className='text-[#198b1f] size-[30px] animate-pulse' />
                <FontAwesomeIcon icon={faStar} className='text-[#198b1f] size-[30px] animate-pulse' />
                <FontAwesomeIcon icon={faStar} className='text-[#198b1f] size-[30px] animate-pulse' />
                <FontAwesomeIcon icon={faStar} className='text-[#198b1f] size-[30px] animate-pulse' />
            </div>
        </div>

        <Image src='/footer-arrow.png' alt='Arrow' width={500} height={300}/>
    </div>
  )
}

export default Footer