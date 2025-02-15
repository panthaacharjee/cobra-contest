"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

/* ============ Components ============ */
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';

const page = () => {
    const router = useRouter()
    const [selected, setSelected] = useState(true)
    
    const handleSelect = (props)=>{
        if(props === "company"){
            setSelected(true)
        }else{
            setSelected(false)
        }
    }

    const handleCreate = ()=>{
        if(selected){
            router.push("/auth/register/company")
        }else{
            router.push("/auth/register/developer")
        }
    }

  return (
    <div className='flex flex-col lg:flex-row justify-between'>
        <div className="w-full lg:w-6/12">
            <div className="container flex justify-center items-center h-screen">
                <div className='w-8/12 mx-auto'>
                    <h4 className='text-4xl font-semibold'>How do you want to use HackerRank?</h4>
                    <p className='mt-5 text-md'>We’ll personalize your setup experience accordingly.</p>
                    <div className={`bg-[#f0f0f0] mt-20 py-8 px-8 rounded-lg cursor-pointer ${selected  && "border-[1px] border-black"}`} onClick={()=>handleSelect("company")}>
                        {/* <input type='radio'/> */}
                        <div className='flex items-center'>
                            <p className='text-2xl'><FaSearch/></p>
                            <div className='ml-5'>
                                <label className="text-lg font-bold">I'm here to hire tech talent</label>
                                <p>Evaluate tech skills at scale</p>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-[#f0f0f0] mt-10 py-8 px-8 rounded-lg cursor-pointer ${!selected  && "border-[1px] border-black"}`} onClick={()=>handleSelect("developer")}>
                        <div className='flex items-center'>
                            <p className='text-2xl'><IoIosArrowForward/></p>
                            <div className='ml-5'>
                                <label className="text-lg font-bold">I'm here to practice and prepare</label>
                                <p> Solve problems and learn new skills</p>
                            </div>
                        </div>
                    </div>
                    <button  onClick={handleCreate} className='py-2 px-5 bg-[#7c7c7c] text-white font-bold mt-10 rounded-lg'>Create Account</button>
                </div>
            </div>
        </div>
        <div className="hidden lg:block w-full lg:w-6/12 h-screen bg-black">
            
        </div>
    </div>
  )
}

export default page