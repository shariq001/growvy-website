'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Jobs = () => {
  return (
    <div>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className="flex flex-col justify-center items-center p-[100px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] bg-[#C9E9D2] rounded-b-[1000px] ">
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold">Jobs</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Join our team and shape the future—explore exciting career opportunities today!&quot;</p>
        </motion.div>

        {/* Section 2 */}
        <div className="flex justify-center flex-wrap items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] gap-[20px]">
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Tech</h1>
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Management</h1>
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Human Resource</h1>
            
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Marketing Sales</h1>
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Accounts & Finance</h1>
            <h1 className="xl:text-[30px] sm1:text-[18px] sm2:text-[20px] md1:text-[22px] md2:text-[24px] lg1:text-[26px] lg2:text-[28px] font-bold w-[330px] text-center py-[10px] border-[3px] border-black rounded-[20px]">Customer Services</h1>
        </div>

        {/* Section 3 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[20px] " >
            <h1 className="lg2:w-[1000px] font-bold xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] leading-[55px] text-center">Join Growvy&apos;s 50M+ Job Seeker
            Community & Get Hired Faster!</h1>

            <p className="xl:text-[28px] sm1:text-[18px] md2:text-[20px] text-center lg2:w-[1000px] sm1:leading-[90%] leading-[28px]">“Build your profile, get noticed by top employers, and access exclusive job
            opportunities tailored to your skills. Your next career move starts here!”</p>

            <Link href="" className="px-[25px] py-[5px] bg-green-600 rounded-full font-medium   text-white text-[20px] float-left w-[170px] text-center">Sign In</Link>
        </div>

        {/* Section 4 */}
        <div className="flex justify-center items-center flex-col gap-[30px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px]">
                <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] lg2:text-[70px] font-bold">Top Jobs</h1>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Business Developer</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">finance Manager</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Human Resource Manager</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Software Engineer</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Web Developer</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Graphic Designer  Ui / Ux</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">SEO Expert</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Android Developer</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Floor Manager</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Sales Represen tative</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Data Entry Operator</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Delivery Man</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Urdu / English Call Center Agent</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Morning Shift Jobs for Females</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>

                <div className="flex justify-between items-center xl:px-[30px] sm1:px-[16px] sm2:px-[18px] md1:px-[20px] md2:px-[22px] lg1:px-[24px] lg2:px-[27px] py-[20px] border-[3px] border-black rounded-[30px] lg2:w-[1000px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px] md2:w-[840px] lg1:w-[924px]">
                    <h1 className="xl:text-[40px] sm1:text-[17px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[38px] font-bold">Accountant</h1>

                    <Link href="" className="px-[15px] py-[10px] bg-green-600 rounded-full font-semibold   text-white xl:text-[20px] sm1:text-[12px] sm2:text-[14px] md1:text-[16px] lg1:text-[18px]  float-left lg2:w-[170px] sm1:w-[110px] md1:w-[130px] lg1:w-[150px] text-center">Apply Now</Link>
                </div>


           </div>

        {/* Section 5 */}
        <div className="flex justify-center items-center">
            <Image src="/lines.png" alt="Lines" width={550} height={300}/>
        </div>

        {/* Section 6 */}
        <div className='flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row'>

      <div className='flex flex-col'>
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold xl:tracking-[-3px]">I&apos;m a Job Seeker!</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px] ">Looking for job according to my skills and requirements.</p>
        <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[140px] text-center'>Jobs</Link>
      </div>

      <Image src='/home-3-image.png' alt='Job Searcher' width={500} height={500}/>
    </div>
    </div>
  )
}

export default Jobs