'use client'; 

import { motion } from 'framer-motion';

import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className="flex flex-col justify-center items-center p-[100px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] bg-[#C9E9D2] rounded-b-[1000px] ">
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold">Success</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Discover inspiring Success Stories—see how our solutions empower businesses to thrive!&quot;</p>
        </motion.div>

        {/* Section 2 */}
        <div className="flex justify-center items-center flex-col  sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:gap-[30px]">
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold sm1:leading-[90%] text-center">Join over 10k Clients worldwide</h1>
            <Link href="" className='bg-[#129b2e] w-[180px] py-[8px] text-center text-white text-[20px] font-semibold rounded-[50px]'>Start Now</Link>

            <div className="flex justify-between items-center py-[30px] px-[30px] sm1:flex-col sm1:gap-[30px] lg1:flex-row">
                <Image src="/echonet.png" alt="Echonet" width="280" height={150} />
                <Image src="/easypaisa.png" alt="Easypaisa" width="280" height={150} />
                <Image src="/twitter.png" alt="Twitter" width="280" height={150} />
                <Image src="/motive.png" alt="Motive" className="rounded-full" width="280" height={150} />
            </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-[20px] justify-center items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] ">
            
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold leading-[90%] text-center"><Image src="/success-1.png" alt="Birds" width="250" height={100} /> Join Growvy’s 50M+ Job Seeker
              Community & Get Hired Faster!</h1>
  
            <p className='xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[20px]  text-center'>“Build your profile, get noticed by top employers, and access exclusive job
                opportunities tailored to your skills. Your next career move starts here!”</p>
  
            <Link href="" className='bg-[#129b2e] w-[180px] py-[8px] text-center text-white text-[20px] font-semibold rounded-[50px]'>Start Now</Link>
        </div>

        {/* Section 4 */}
        <div className="flex justify-center xl:gap-[100px] items-center px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] lg1:flex-row">

                {/* 1 */}
                <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                    <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-[10px] justify-end items-center xl:w-[500px] xl:h-[170px] relative">


                        <FontAwesomeIcon icon={faCircleUser} className='absolute xl:left-[-50px] xl:top-[-40px] xl:size-[100px] sm1:size-[50px] sm1:top-[-20px] sm1:left-[-25px]' />

                        <p className='xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] leading-[90%] text-center'>Excellent Experience with growvy.</p>

                        <div className="flex justify-start items-center gap-[5px]">
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                        </div>
                    
                    </div>
              </div>

              {/* 2 */}
                <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                    <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-[10px] justify-end items-center xl:w-[500px] xl:h-[170px] relative">


                        <FontAwesomeIcon icon={faCircleUser} className='absolute xl:left-[-50px] xl:top-[-40px] xl:size-[100px] sm1:size-[50px] sm1:top-[-20px] sm1:left-[-25px]' />

                        <p className='xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] leading-[90%] text-center'>Excellent Experience with growvy.</p>

                        <div className="flex justify-start items-center gap-[5px]">
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                            <FontAwesomeIcon icon={faStar} className='size-[30px] text-[#ffd43b]' />
                        </div>
                    
                    </div>
                </div>
        </div>

        {/* Section 5 */}
        <div className="flex justify-center items-center">
            <Image src="/dots.png" alt="dots" width={300} height={150} />
        </div>

        {/* Section 6 */}
        <div className="flex justify-center items-center">
            <Image src="/lines.png" alt="Lines" width={550} height={300}/>
        </div>

    </div>
  )
}

export default Success