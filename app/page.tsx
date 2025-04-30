import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      
      {/* Section 1 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center sm1:flex-col sm1:gap-[30px] md1:flex-row'>

        {/* left */}
        <div className='flex flex-col relative w-full'>

          <h1 className='xl:text-[80px] sm1:text-[40px] sm2:text-[45px] md1:text-[50px] md2:text-[55px] lg1:text-[60px] font-bold leading-[90%]'>Maximize <br /> business efficiency</h1>

          <div className='border-green-700 xl:w-[340px] xl:h-[90px]  border-double border-[10px] rounded-full rotate-[175deg] absolute xl:top-[80px] sm1:w-[200px] sm1:h-[50px] sm1:top-[33px] sm2:top-[38px] md1:top-[42px] md1:w-[220px] md2:w-[250px] md2:top-[48px] lg1:w-[270px] lg1:top-[55px]'></div>

          <div className='xl:mt-[40px] xl:w-[300px] text-center text-green-700 font-medium leading-[30px]'>

            <p className='xl:text-[28px] sm1:text-[18px] md1:text-[20px] md2:text-[22px] sm1:ml-[80px] sm1:text-left sm2:mt-[10px] xl:ml-[150px] xl:mb-[10px]'>with</p>
            <h1 className='xl:text-[80px] sm1:text-[40px] md1:text-[45px] md2:text-[55px] lg1:text-[60px] sm2:text-[45px] font-bold sm1:text-left sm1:ml-[30px] '>Growvy</h1>
            <p className='xl:text-[25px] sm1:text-[18px] md2:text-[20px]  leading-[25px] font-medium text-left mt-[30px] text-black sm2:w-[400px] md1:w-[350px]'>Scale your company with tailored strategies, market insights, and expert consulting</p>

            <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white xl:text-[20px] float-left'>Start Today</Link>
          </div>
        </div>

        <Image src='/growvy-arrow.png' alt='Growvy Arrow' width={550} height={400} className='lg2:w-[700px] xl:w-[800px] md1:w-[550px]'/>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col justify-center items-center gap-[10px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] ">

      <div className="flex justify-between items-center xl:w-[900px] sm1:w-[288px] sm2:w-[485px] md1:w-[718px]">
        <p></p>
        <div className="xl:w-[250px] sm1:w-[100px] h-[15px] rounded-full bg-green-600"></div>
      </div>

      <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] lg2:text-[22.5px] sm1:leading-[20px] lg2:w-[900px] text-center leading-[30px] ">“Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly. Whether you&apos;re seeking top talent, asset solutions, or business expansion, Growvy is your trusted partner in success.”</p>
    </div>

    {/* Section 3 */}
    <div className='flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row'>

      <div className='flex flex-col'>
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold xl:tracking-[-3px]">I&apos;m a Job Seeker!</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px] ">Looking for job according to my skills and requirements.</p>
        <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[140px] text-center'>Jobs</Link>
      </div>

      <Image src='/home-3-image.png' alt='Job Searcher' width={500} height={500}/>
    </div>

    {/* Section 4 */}
    <div className='flex md1:flex-row-reverse justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px]'>

      <div className='flex flex-col'>
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold xl:tracking-[-3px]">I&apos;m an Employeer!</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px]">Looking for talented candidates for my company.</p>
        <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[170px] text-center'>Post a Job</Link>
      </div>

      <Image src='/home-4-image.png' alt='Job Searcher' width={500} height={500}/>
    </div>

    {/* Section 5 */}
    <div className='flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row'>

      <div className='flex flex-col gap-3'>
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold xl:tracking-[-3px] xl:leading-[70px] sm1:leading-[90%]">I&apos;m an E-commerce Store!</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px]">Looking for potential sales data for sales campaign.</p>
        <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[170px] text-center'>Sales Data</Link>
      </div>

      <Image src='/home-5-image.png' alt='Job Searcher' width={500} height={500}/>
    </div>

    {/* Section 6 */}
    <div className='flex md1:flex-row-reverse justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px]'>

      <div className='flex flex-col'>
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold xl:tracking-[-3px]">I&apos;m Business!</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px]">Looking for CRM or Data resources to boost my business.</p>
        <Link href='' className='px-[25px] py-[10px] bg-green-600 rounded-full font-semibold  mt-[10px] text-white text-[20px] float-left w-[200px] text-center'>Business Plans</Link>
      </div>

      <Image src='/home-6-image.png' alt='Job Searcher' width={450} height={500}/>
    </div>

    {/* Section 7 */}
    <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[20px] " >
        <h1 className="lg2:w-[1000px] font-bold xl:text-[65px] sm1:text-[25px] sm2:text-[30px] md1:text-[35px] md2:text-[40px] sm1:leading-[95%] leading-[55px] text-center">Join Growvy&apos;s 50M+ Job Seeker
          Community & Get Hired Faster!</h1>

        <p className="xl:text-[28px] sm1:text-[18px] md2:text-[20px] text-center lg2:w-[1000px] sm1:leading-[90%] leading-[28px]">“Build your profile, get noticed by top employers, and access exclusive job
          opportunities tailored to your skills. Your next career move starts here!”</p>

          <Link href="" className="px-[25px] py-[5px] bg-green-600 rounded-full font-medium   text-white text-[20px] float-left w-[170px] text-center">Sign In</Link>
     </div>

     {/* Section 8 */}
     <div className="flex justify-center items-center">
      <Image src="/lines.png" alt="Lines" width={550} height={300}/>
     </div>

     {/* Section 9 */}
     <div className='flex justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] sm1:flex-col sm1:gap-[30px] md1:flex-row'>

     <div className="flex flex-col gap-[10px]">
        <h1 className="xl:text-[80px] sm1:text-[30px] sm2:text-[35px] md1:text-[40px] md2:text-[45px] lg1:text-[50px] font-bold tracking-[-3px] sm1:tracking-[-1px] leading-[70px] md2:leading-[90%]">E-commerce Owner?</h1>
        <p className="xl:text-[25px] sm1:text-[18px] md2:text-[20px] leading-[25px] xl:w-[450px] md1:w-[350px]">Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!</p>
        <Link href="" className="px-[25px] py-[12px] bg-green-600 rounded-full font-medium  mt-[10px] text-white text-[20px] float-left w-[170px] text-center">Sales Data</Link>
      </div>

      <Image src='/home-9-image.png' alt='E-commerce Owner' width={450} height={350} />
     </div>

     {/* Section 10 */}
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

export default Home