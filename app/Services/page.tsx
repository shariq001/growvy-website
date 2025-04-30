'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className="flex flex-col justify-center items-center p-[100px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] bg-[#C9E9D2] rounded-b-[1000px] ">
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold">Services</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;At Growvy, we provide innovative, cost-effective solutions to help businesses and professionals thrive.&quot;</p>
        </motion.div>

        {/* Section 2 */}
        <div className="flex flex-wrap justify-center gap-[100px] items-center p-[100px]">

            {/* 1 */}
             <div className="flex flex-col justify-center items-center gap-[20px]">
                <div className="flex flex-col justify-end items-center gap-[15px] relative border-[3px] border-black rounded-[15px] p-[10px] h-[220px] w-[300px] pb-[20px] ">
                  <Image src="/services-1.png" alt="Hiring" width="150" height="300" className=" top-[-67px] absolute" />
                  <h3 className="text-[23px] font-bold">Hiring</h3>
                  <p className="leading-[20px] text-center text-[22px]">Access a vast talent pool to hire the right candidates quickly and affordably.</p>
                </div>

                <Link href="" className="bg-[#129b2e] w-[130px] text-center no-underline text-white text-[20px] font-semibold rounded-[50px]">Plans</Link>
             </div>

             {/* 2 */}
             <div className="flex flex-col justify-center items-center gap-[20px]">
              <div className="flex flex-col justify-end items-center gap-[15px] relative border-[3px] border-black rounded-[15px] p-[10px] h-[220px] w-[300px] pb-[20px] ">
                <Image src="/services-2.png" alt="Hiring" width="150" height={150} className=" top-[-67px] absolute" />
                <h3 className="text-[23px] font-bold">E-commerce</h3>
                <p className="leading-[20px] text-center text-[22px]">Drive expansion with targeted strategies and market-driven solutions.</p>
              </div>

              <Link href="" className="bg-[#129b2e]  w-[130px] text-center no-underline text-white text-[20px] font-semibold rounded-[50px]">Plans</Link>
           </div>

           {/* 3 */}
           <div className="flex flex-col justify-center items-center gap-[20px]">
            <div className="flex flex-col justify-end items-center gap-[15px] relative border-[3px] border-black rounded-[15px] p-[10px] h-[220px] w-[300px] pb-[20px] ">
              <Image src="/home-6-image.png" alt="Hiring" width="120" height={100} className=" top-[-67px] absolute" />
              <h3 className="text-[23px] font-bold">Business</h3>
              <p className="leading-[20px] text-center text-[22px]">Optimize and manage business resources with data-backed insights</p>
            </div>

            <Link href="" className="bg-[#129b2e] w-[130px] text-center no-underline text-white text-[20px] font-semibold rounded-[50px]">Plans</Link>
         </div>
        </div>

        {/* Section 3 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[10px]">
          <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold sm1:leading-[90%] text-center">Join over 10k Clients worldwide</h1>
          <Link href="" className='bg-[#129b2e] w-[180px] py-[8px] text-center text-white text-[20px] font-semibold rounded-[50px]'>Start Now</Link>
        </div>

        {/* Section 4 */}
        <div className="flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row">

            {/* left */}
             <div className="flex flex-col gap-[10px] lg2:w-[500px] leading-[55px] ">
              <h1 className="xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] font-bold">Problems in Hiring</h1>
              <p className="leading-[30px] xl:text-[22px] sm1:leading-[90%] md1:text-[18px] lg1:text-[20px]">Companies spend high <b>$$$</b> budgets
                on job portals like Indeed and
                LinkedIn, only to receive low-quality
                CVs and irrelevant applicants,
                making hiring slow and inefficient.</p>
             </div>

             <Image src="/services-3.png" alt="services-3" width="600" height={400}/>
        </div>

        {/* Section 5 */}
        <div className="flex md1:flex-row-reverse justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col-reverse sm1:gap-[30px]">

            {/* left */}
             <div className="flex flex-col gap-[10px] lg2:w-[500px] leading-[55px]">
              <h1 className="xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] font-bold">With Growvy Solution</h1>
              <p className="leading-[30px] xl:text-[22px] sm1:leading-[90%] md1:text-[18px] lg1:text-[20px]">With Growvy, businesses can access a
                database of active job seekers who
                have recently joined for job search.
                Use advanced filters to find the right
                candidates quickly and at a fraction of
                the cost—no wasted budget, just
                quality hires!</p>
                <a href="" className='bg-[#129b2e] w-[200px] text-center text-white text-[20px] font-semibold rounded-[50px]'>Start Now</a>
             </div>

             <Image src="/services-4.png" alt="services-3" width={550} height={500} />
        </div>

        {/* Section 6 */}
        <div className="flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row">

            {/* left */}
             <div className="flex flex-col gap-[10px] lg2:w-[500px] leading-[55px]">
              <h1 className="xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] font-bold">E-commerce Business</h1>
              <p className="leading-[30px] xl:text-[22px] sm1:leading-[90%] md1:text-[18px] lg1:text-[20px]">E-commerce businesses struggle
                with high marketing costs,
                inefficient operations, and slow
                growth, making it difficult to scale
                and maximize profits.</p>
             </div>

             <Image src="/services-5.png" alt="services-3" width="600" height={500} />
        </div>

        {/* Section 7 */}
        <div className="flex md1:flex-row-reverse justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px]">

            {/* left */}
             <div className="flex flex-col gap-[10px] lg2:w-[500px] leading-[55px]">
              <h1 className="xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] font-bold">With Growvy Solution</h1>
              <p className="leading-[30px] xl:text-[22px] sm1:leading-[90%] md1:text-[18px] lg1:text-[20px]">Growvy helps e-commerce
                businesses streamline operations,
                manage assets, and implement smart
                growth strategies to boost sales and
                efficiency—all at a low cost with
                proven results.</p>
                <Link href="" className='bg-[#129b2e] w-[200px] text-center text-white text-[20px] font-semibold rounded-[50px]'>Start Now</Link>
             </div>

             <Image src="/services-6.png" alt="services-3" width="550" height={500} />
        </div>

        {/* Section 8 */}
        <div className="flex md1:flex-row-reverse justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px]">

          <div className="flex flex-col gap-3">
            <Link href="" className="px-[25px] py-[12px] bg-green-600 rounded-full font-medium  text-white text-[20px] float-left w-[220px] text-center">Scedule Call Now</Link>

            <p className="xl:text-[28px] sm1:text-[18px] md2:text-[20px] sm1:leading-[90%] leading-[25px] xl:w-[450px] md1:w-[350px]">Join over 10k users worldwide. Start scheduling in less than 1 minutes.</p>
            
          </div>

          <Image src="/home-10-image.png" alt="Job Seeker" width={650} height={500} className='md1:w-[350px] md2:w-[400px] lg1:w-[450px] lg2:w-[550px]'/>
        </div>

    </div>
  )
}

export default Services