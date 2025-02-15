import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';

import { FaBars } from "react-icons/fa6";
// import { CiBarcode } from "react-icons/ci";

// import Logo from "@/images/logo.svg"

const LargeNavbar = ({handleModal}) => {
     
  return (
    <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-0 z-50">
            <div className='w-full lg:w-8/12 flex items-center'>
                <div className=' lg:w-3/12'>
                    <p className='font-medium text-lg md:text-xl cursor-pointer'>Cobra Contest</p>
                </div>
                <div className='hidden lg:block w-10/12'>
                    <div className='flex items-center'>
                        <div className='mr-8 cursor-pointer'>
                            <div className="dropdown dropdown-hover">
                                    <div tabIndex={1} className="m-1 text-sm">
                                        Products
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content w-[650px] bg-base-100 px-6 py-6 shadow-md">
                                        <div className='flex justify-between'>
                                            <div className='w-6/12'>
                                                <label className='text-[#b4b4b4] font-bold'>Products</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Screen</h4>
                                                    <p className='text-sm'>Save time and accelate your hiring</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Interview</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Engage</h4>
                                                    <p className='text-sm'>Promote your varsity contest</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Skill Up</h4>
                                                    <p className='text-sm'>Mobilize your tech tallent</p>
                                                </div>
                                            </div>
                                            <div className='w-6/12'>
                                                <label className='text-[#b4b4b4] font-bold'>Features</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Real World Question</h4>
                                                    <p className='text-sm'>Conduct a contest with real world question</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Interview</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                        </div>
                        <div className='mr-8 cursor-pointer'>
                            <div className="dropdown dropdown-hover">
                                    <div tabIndex={1} className="m-1 text-sm">
                                        Solutions
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content w-[650px] bg-base-100 px-6 py-6 shadow-md">
                                        <div className='flex justify-between'>
                                            <div className='w-6/12 mr-5'>
                                                <label className='text-[#b4b4b4] font-bold'>What We Do</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>Set Up Your Skill Strategy</h4>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>Showcase Your Tech Brand</h4>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>Optimize Your Hiring Process</h4>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>Mobilize Your Tech Talent</h4>
                                                </div>
                                            </div>
                                            <div className='w-6/12'>
                                                <label className='text-[#b4b4b4] font-bold'>Use Cases</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>Remote Hiring</h4>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold text-sm'>University Hiring</h4>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </ul>
                            </div>
                        </div>
                        <div className='mr-8 cursor-pointer'>
                            <div className="dropdown dropdown-hover">
                                    <div tabIndex={1} className="m-1 text-sm">
                                        Resources
                                    </div>
                                    <ul tabIndex={1} className="dropdown-content w-[650px] bg-base-100 px-6 py-6 shadow-md">
                                        <div className='flex justify-between'>
                                            <div className='w-6/12'>
                                                <label className='text-[#b4b4b4] font-bold'>Learn</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Blog</h4>
                                                    <p className='text-sm'>Save time and accelate your hiring</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Roles Directory</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Resource Library</h4>
                                                    <p className='text-sm'>Promote your varsity contest</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Customer Stroies</h4>
                                                    <p className='text-sm'>Mobilize your tech tallent</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Developer Skill Report</h4>
                                                    <p className='text-sm'>Mobilize your tech tallent</p>
                                                </div>
                                                
                                            </div>
                                            <div className='w-6/12'>
                                                <label className='text-[#b4b4b4] font-bold'>Product Help</label>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Responsible AI</h4>
                                                    <p className='text-sm'>Conduct a contest with real world question</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>What's New</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Partners</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                <div className='mt-3 p-2 rounded-md hover:bg-slate-100'>
                                                    <h4 className='font-bold'>Support</h4>
                                                    <p className='text-sm'>Conduct steller technical interviews</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </ul>
                            </div>
                        </div>
                        <div className='mr-8 text-sm' >
                            <Link href="/programmer/profile">
                                Pricing
                            </Link>
                        </div>
                        <div className='mr-8 text-sm'>
                            <Link href="/programmer/profile">
                            For Developers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-4/12 flex items-center justify-end'>
                <div className='hidden lg:block'>
                    <Link href="/auth/login" className='text-sm font-medium px-5 py-2 mr-2 hover:bg-slate-50 rounded-md'>Log in</Link>
                    <Link href="/auth/register" className='text-sm font-medium bg-slate-100 px-5 py-2 mr-2 rounded-md border-[1px] border-[#d3d3d3]'>Request Demo</Link>
                    <Link href="/auth/register" className='text-sm font-medium bg-black text-white rounded-md px-5 py-2 '>Sign up</Link>
                </div>
                <div className='block lg:hidden'>
                    <button className="btn" onClick={handleModal}><FaBars/></button>
                </div>
            </div>
        </div>
  )
}

export default LargeNavbar