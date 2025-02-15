import React from 'react'

/* ============ Components ============ */
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <Navbar/>
        <section className="w-full py-36">
            <div className="container mx-auto h-full flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-6/12 flex justify-center items-center h-full">
                    <div className='w-10/12 md:w-8/12 lg:w-7/12 text-center bg-red-500 text-white px-4 py-8 rounded-lg shadow-md'>
                        <p>Bussiness</p>
                        <h4 className='text-3xl font-light'>For Companies</h4>
                        <p className='text-md font-light mt-5'>We are the market–leading technical interview platform to identify and hire developers with the right skills.</p>
                        <Link href="/auth/login/company" className='bg-[#f5f5f5] text-black px-5 py-2 mt-5 block w-fit mx-auto rounded-lg'>Login</Link>
                        <div className='mt-5'>
                            <Link href="/auth/register/company" className='mb-1 block'>Don't have an account?</Link>
                            <Link href="">Contact sales or Get free trial</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 flex justify-center items-center h-full">
                    <div className='w-10/12 md:w-8/12 mt-8 lg:mt-0 lg:w-7/12 text-center bg-[#f5f5f5] px-4 py-8 rounded-lg shadow-md
                    '>
                        <h4 className='text-3xl font-light'>For Developers</h4>
                        <p className='text-md font-light mt-5'>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p>
                        <Link href="/auth/login/developer" className='bg-red-500 text-white px-5 py-2 mt-5 block w-fit mx-auto rounded-lg'>Login</Link>
                        <div className='mt-5'>
                            <Link href="/auth/register/developer" className='mb-1 block'>Don't have an account?</Link>
                            <Link href="">Sign up.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default page