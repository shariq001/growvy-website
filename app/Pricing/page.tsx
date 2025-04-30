'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Prices = () => {
  return (
    <div>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className="flex flex-col justify-center items-center p-[100px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] bg-[#C9E9D2] rounded-b-[1000px] ">
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold">Pricing</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Discover flexible pricing plans tailored to your needs—start growing with us today!&quot;</p>
        </motion.div>

        {/* Section 2 */}
        <div className="flex justify-center items-center flex-col sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:gap-[15px]">
            <Image src="/pricing-1.png" alt="Recruitment" width="200" height={150} />
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px]  sm1:leading-[90%] font-semibold text-center">Recruitment Solution</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!&quot;</p>

            <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[140px] text-center'>Jobs</Link>
        </div>

        {/* Section 3 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] flex justify-center  items-center gap-[50px] flex-wrap">

            {/* 1 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Basic CV Service</h1>
                  <p className="leading-[20px] text-[18px]">Companies HR who are looking for
                    a candidate pool to shortlist them
                    with possible filters can access our
                    database to reduce their
                    headache to post jobs on different
                    job portals.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 30$ (9797 PKR) Discount
                            20$ (5600 PKR) Monthly</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can access the database with monthly 200 Searches</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 2 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Lead Generating</h1>
                  <p className="leading-[20px] text-[18px]">Companies will directly get
                    qualifying responses in their chat
                    to schedule interviews at their own
                    place and our service charges will
                    apply on the candidate&apos;s approch.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 50$ (6998 PKR)
                            (50$ will apply per 20 Candidates)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can create a job
                            post on Growvy</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Guide our Team to shortlist
                            best candidates</li>
                            <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 3 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900 ">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px] ">
                  <h1 className="text-[26px] font-semibold">Recruitment Service</h1>
                  <p className="leading-[20px] text-[18px]">Our recruitment specialist will
                    connect with companies HR Team
                    and plan a complete hiring
                    strategy to make their hire quick
                    and fast.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 40% of first Salary (For
                            Experienced)</li>
                            <li className="leading-[18px]">(Can avail this package after
                                one subscription)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="mleading-[18px]">Client can create a job post.</li>
                        <li className="leading-[18px]">Filters Like Skills, Cities, Exp etc</li>
                        <li className="leading-[18px]">Minor screening interview</li>
                        <li className="leading-[18px]">Whatsapp group with Team</li>
                        <li className="leading-[18px]">Complete A-Z hiring solution</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>
        </div>

        {/* Section 4 */}
        <div className="flex justify-center items-center flex-col sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:gap-[15px]">
            <Image src="/services-2.png" alt="Recruitment" width="200" height={150} />
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px]  sm1:leading-[90%] font-semibold text-center">E-commerce Solution</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!&quot;</p>

            <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[140px] text-center'>Jobs</Link>
        </div>

        {/* Section 5 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] flex justify-center items-center gap-[50px] flex-wrap">

            {/* 1 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Basic CV Service</h1>
                  <p className="leading-[20px] text-[18px]">Companies HR who are looking for
                    a candidate pool to shortlist them
                    with possible filters can access our
                    database to reduce their
                    headache to post jobs on different
                    job portals.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 30$ (9797 PKR) Discount
                            20$ (5600 PKR) Monthly</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can access the database with monthly 200 Searches</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 2 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Lead Generating</h1>
                  <p className="leading-[20px] text-[18px]">Companies will directly get
                    qualifying responses in their chat
                    to schedule interviews at their own
                    place and our service charges will
                    apply on the candidate&apos;s approch.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 50$ (6998 PKR)
                            (50$ will apply per 20 Candidates)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can create a job
                            post on Growvy</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Guide our Team to shortlist
                            best candidates</li>
                            <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 3 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900 ">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px] ">
                  <h1 className="text-[26px] font-semibold">Recruitment Service</h1>
                  <p className="leading-[20px] text-[18px]">Our recruitment specialist will
                    connect with companies HR Team
                    and plan a complete hiring
                    strategy to make their hire quick
                    and fast.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 40% of first Salary (For
                            Experienced)</li>
                            <li className="leading-[18px]">(Can avail this package after
                                one subscription)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Client can create a job post.</li>
                        <li className="leading-[18px]">Filters Like Skills, Cities, Exp etc</li>
                        <li className="leading-[18px]">Minor screening interview</li>
                        <li className="leading-[18px]">Whatsapp group with Team</li>
                        <li className="leading-[18px]">Complete A-Z hiring solution</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>
        </div>

        {/* Section 6 */}
        <div className="flex justify-center items-center flex-col sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:gap-[15px]">
            <Image src="/home-6-image.png" alt="Recruitment" width="200" height={150} />
            <h1 className="xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px]  sm1:leading-[90%] font-semibold text-center">Business Solution</h1>
            <p className="lg1:text-[20px] md1:text-[18px] xl:w-[800px] text-center leading-[90%]">&quot;Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!&quot;</p>

            <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[140px] text-center'>Jobs</Link>
        </div>

        {/* Section 7 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] flex justify-center items-center gap-[50px] flex-wrap">

            {/* 1 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Basic CV Service</h1>
                  <p className="leading-[20px] text-[18px]">Companies HR who are looking for
                    a candidate pool to shortlist them
                    with possible filters can access our
                    database to reduce their
                    headache to post jobs on different
                    job portals.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 30$ (9797 PKR) Discount
                            20$ (5600 PKR) Monthly</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can access the database with monthly 200 Searches</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 2 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px]">
                  <h1 className="text-[26px] font-semibold">Lead Generating</h1>
                  <p className="leading-[20px] text-[18px]">Companies will directly get
                    qualifying responses in their chat
                    to schedule interviews at their own
                    place and our service charges will
                    apply on the candidate&apos;s approch.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 50$ (6998 PKR)
                            (50$ will apply per 20 Candidates)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Companies Can create a job
                            post on Growvy</li>
                        <li className="leading-[18px]">Manage Filters Like Skills, Cities,
                            Experience etc</li>
                        <li className="leading-[18px]">Guide our Team to shortlist
                            best candidates</li>
                            <li className="leading-[18px]">Live chat experts help</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>

            {/* 3 */}
            <div className="p-[6px] rounded-[10px] bg-gradient-to-tl from-yellow-300 via-green-600 to-green-900 ">
                <div className="bg-white rounded-[10px] p-[15px] sm2:w-[380px] ">
                  <h1 className="text-[26px] font-semibold">Recruitment Service</h1>
                  <p className="leading-[20px] text-[18px]">Our recruitment specialist will
                    connect with companies HR Team
                    and plan a complete hiring
                    strategy to make their hire quick
                    and fast.</p>
                    <h4 className="font-bold text-[18px]">Service Cost:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Price 40% of first Salary (For
                            Experienced)</li>
                            <li className="leading-[18px]">(Can avail this package after
                                one subscription)</li>
                    </ul>
                    <h4 className="font-bold text-[18px]">Benefits:</h4>
                    <ul className="pl-[20px] ml-[10px] list-disc">
                        <li className="leading-[18px]">Client can create a job post.</li>
                        <li className="leading-[18px]">Filters Like Skills, Cities, Exp etc</li>
                        <li className="leading-[18px]">Minor screening interview</li>
                        <li className="leading-[18px]">Whatsapp group with Team</li>
                        <li className="leading-[18px]">Complete A-Z hiring solution</li>
                    </ul>
                    
                    <button className="bg-[#129b2e] text-white font-semibold rounded-full  px-[20px] py-[10px] mt-[10px] xl:ml-[90px]"><Link href="" className="">Starting Today</Link></button>
                </div>
            </div>
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

export default Prices