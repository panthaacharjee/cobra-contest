'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'


import LargeNavbar from './LargeNavbar';

// declare global {
//     interface Window {
//       my_modal_1: HTMLFormElement;
//     }
//   }

const Navbar = () => {
    const router = useRouter()
    const myElement = document.getElementById('my_modal_1') as HTMLDialogElement;
    const myRef = useRef(null);
    const handleModal=()=>{
        myElement.showModal()
    }
  
  return (
    <div ref={myRef}>
        <div className='w-full backdrop-filter bg-opacity-30 backdrop-blur-lg fixed bg-slate-100 z-50 '>
            {/* {isLargeScreen ? <LargeNavbar/> : <SmallNavbar/>} */}
            <LargeNavbar handleModal={handleModal}/>
        </div>
        
        <dialog id='my_modal_1' className='modal'>
            <div className='block lg:hidden fixed bg-white border border-[#d4d4d4] rounded-md h-96 pb-5 overflow-y-auto w-[80%] md:w-[60%] z-40 top-0 right-4 mt-20'>
                <div tabIndex={0} className="collapse collapse-arrow ">
                    <div className="collapse-title text-md font-medium">Products</div>
                    <div className="collapse-content ml-3">
                        <div>
                            <p className='font-medium'>Screen</p>
                            <p className='text-sm'>Save time and accelate your hiring</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Interview</p>
                            <p className='text-sm'>Conduct steller technical interviews</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Engage</p>
                            <p className='text-sm'>Promote your varsity contest</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Skill Up</p>
                            <p className='text-sm'>Mobilize your tech tallent</p>
                        </div>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow mt-[-20px]">
                    <div className="collapse-title text-md font-medium">Solutions</div>
                    <div className="collapse-content ml-3">
                        <h4 className='text-lg mb-4 text-[#c2c2c2]'>What We Do</h4>
                        <div>
                            <p className='font-medium text-md'>Set Up Your Skill Strategy</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium text-md'>Showcase Your Tech Brand</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium text-md'>Optimize Your Hiring Process</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium text-md'>Mobilize Your Tech Talent</p>
                        </div>
                        
                        <h4 className='text-lg my-4 text-[#c2c2c2]'>Use Cases</h4>
                        <div>
                            <p className='font-medium text-md'>Remote Hiring</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium text-md'>University Hiring</p>
                        </div>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow mt-[-20px]">
                    <div className="collapse-title text-md font-medium">Resource</div>
                    <div className="collapse-content ml-3">
                        <div>
                            <p className='font-medium'>Blog</p>
                            <p className='text-sm'>Save time and accelate your hiring</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Roles Directory</p>
                            <p className='text-sm'>Conduct steller technical interviews</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Resource Library</p>
                            <p className='text-sm'>Promote your varsity contest</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Customer Stroies</p>
                            <p className='text-sm'>Mobilize your tech tallent</p>
                        </div>
                        <div className='mt-3'>
                            <p className='font-medium'>Developer Skill Report</p>
                            <p className='text-sm'>Mobilize your tech tallent</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 mt-[-5px]'>
                    <p className='text-md font-medium'>Pricing</p>
                </div>
                <div className='px-4 mt-4'>
                    <p className='text-md font-medium'>For Developers</p>
                </div>
                <div className='flex flex-col justify-between mt-5 px-4'>
                    <button onClick={()=>router.push("/auth/login")}>Log in</button>
                    <button onClick={()=>router.push("/auth/register/company")} className='border border-black py-2 mt-3 rounded-lg'>Request demo</button>
                    <button onClick={()=>router.push("/auth/register")} className='border border-black bg-black text-white py-2 mt-3 rounded-lg'>Sign up</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
  )
}

export default Navbar