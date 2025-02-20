"use client"
import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form"
import Link from 'next/link';


/* ============ Images ============ */
import devLogin from "@/images/dev-log.gif"
import hi from "@/images/hi.svg"

/* ============= Icons ============ */
import { FcGoogle } from "react-icons/fc";


const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
      }
  return (
    <div className='flex flex-col md:flex-row justify-between'>
        <div className="w-full lg:w-7/12 h-screen relative">
            <Image src={devLogin} alt="Dev Login" className='h-full w-full'/>
            <div className='absolute top-0 w-full h-screen bg-[#525252] backdrop-filter bg-opacity-15 backdrop-blur-lg'></div>
            <div className='absolute top-0 w-full'>
                <div className='flex items-center justify-center h-screen'>
                    <div className='text-white'>
                        <Image src={hi} alt='hi' className='w-20 h-20'/>
                        <div className='mt-40'>
                            <h4 className='text-md lg:text-lg font-semibold'>EBOOK</h4>
                            <h4 className='text-xl lg:text-4xl font-bold'>How to Build a Tech Talent Brand: <br/> The Definitive Guide</h4>
                            <p className="mt-5">Hiring tech talent? To recruit the best, you’ll need to have a world-class employer brand.</p>
                            <p className='text-[#94e6be] text-sm font-semibold'>Know more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-5/12 flex items-center lg:h-screen px-12 py-14'>
            <div className="contianer mx-auto w-full">
                <h4 className='text-2xl font-bold'>Login to</h4>
                <h4 className='text-2xl font-bold'>HackerRank for Work</h4>
                <p className='mt-4 text-sm'>It's nice to see you again. Hiring tech talent?</p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className="w-full lg:w-11/12">
                        <div className="">
                            <input {...register("email", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your work email"/>
                            <p className="text-red-300  h-10 text-xs">{errors.email?.message}</p>
                        </div>
                        <div className="mt-[-20px]">
                            <input {...register("password", {required:"This field is required", minLength:{
                                value:8,
                                message:"Minimum character 8 words"
                            }})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="password" placeholder="Enter your sequrity key"/>
                            <p className="text-red-300 h-10 text-xs">{errors.password?.message}</p>
                        </div>
                        <button className="px-8 md:px-10 py-2 md:py-3 bg-[#9b9b9b] rounded-sm text-white font-medium text-xs w-full mt-[-20px]">Login</button>
                    </div>
                </form>
                <div className='flex justify-between items-center mt-3 w-full lg:w-11/12'>
                    <div className='flex items-center'>
                        <input type="checkbox" className="checkbox checkbox-xs" />
                        <p className='ml-2 text-sm'>Remember me</p>
                    </div>
                    <Link className='text-sm' href="">Forgot password?</Link>
                </div>
                <div className="divider w-full md:w-11/12">OR</div>
                <div className='w-full lg:w-11/12 mt-8'>
                    <div className='w-full'>
                        <button className='border rounded-md border-[#000] w-full py-2 flex justify-center items-center'><p className='text-2xl mr-2'><FcGoogle/></p><p>Continue with google</p></button>
                    </div>
                    <div className='text-center mt-12'>
                        <Link href="/auth/register/company">Don't have an account?
                        Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page