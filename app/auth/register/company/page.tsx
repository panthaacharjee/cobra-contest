'use client'
import React,{useState, useMemo} from 'react'
import { useForm} from "react-hook-form"
// import countryList from 'react-select-country-list'



/* =============== Icons ============ */
import { FaCheck } from "react-icons/fa6";
// import CountrySelect from '@/components/CountrySelect';

const page = () => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    // const [value, setValue] = useState('')
    // const options = useMemo(() => countryList().getData(), [])
  
    // const changeHandler = value => {
    //   setValue(value)
    // }

          const onSubmit = (data:any) => {
            console.log(data)
          }
  return (
    <div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-screen">
           <div className="w-11/12 lg:w-5/12">
                <h4 className='text-6xl leading-tight'>See Cobra Contest in action</h4>
                <p className='mt-4 text-lg'>Attend a live, personalized demo with one of our product experts to learn how to engage, hire, and upskill the tech talent you need to innovate.We’ll cover how to:</p>
                <ul className='mt-5'>
                    <li className='flex items-center mt-4'>
                        <p className='mr-3 bg-[#000] rounded-xl text-md p-[2px] text-white'><FaCheck/></p>
                        <p className='text-md'><span className='font-medium text-lg'>Set up a skills strategy.</span> Take a deliberate, scientific approach to pursuing tech skills.</p>
                    </li>
                    <li className='flex items-center mt-4'>
                        <p className='mr-3 bg-[#000] rounded-xl text-md p-[2px] text-white'><FaCheck/></p>
                        <p className='text-md'><span className='font-medium text-lg'>‍Showcase your tech brand.</span> Host coding events and connect with developers.</p>
                    </li>
                    
                    <li className='flex items-center mt-4'>
                        <p className='mr-3 bg-[#000] rounded-xl text-md p-[2px] text-white'><FaCheck/></p>
                        <p className='text-md'><span className='font-medium text-lg'>‍Optimize your hiring process.</span> Validate the skills you need using tools developers love.</p>
                    </li>
                    <li className='flex items-center mt-4'>
                        <p className='mr-3 bg-[#000] rounded-xl text-md p-[2px] text-white'><FaCheck/></p>
                        <p className='text-md'><span className='font-medium text-lg'>‍Mobilize your internal talent.</span> Inventory internal capabilities and close technical skills gaps.</p>
                    </li>
                </ul>
           </div>
           <div className="w-11/12 lg:w-6/12">
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className="w-full lg:w-11/12 bg-[#000] p-5 rounded-xl">
                        <div className="mt-[-20px]">
                            <label>Work Email</label>
                            <input {...register("email", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your email"/>
                            <p className="text-red-300  h-10 text-xs">{errors.email?.message}</p>
                        </div>
                        <div className='flex items-center justify-between w-full '>
                            <div className="mt-[-20px] w-6/12">
                                <label>First Name</label>
                                <input {...register("fname", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your first name"/>
                                <p className="text-red-300  h-10 text-xs">{errors.fname?.message}</p>
                            </div>
                            <div className="mt-[-20px] w-6/12 ml-2">
                                <label>Last Name</label>
                                <input {...register("lname", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your last name"/>
                                <p className="text-red-300  h-10 text-xs">{errors.lname?.message}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full '>
                            <div className="mt-[-20px] w-6/12">
                                <label>Company Name</label>
                                <input {...register("cname", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your company name"/>
                                <p className="text-red-300  h-10 text-xs">{errors.cname?.message}</p>
                            </div>
                            <div className="mt-[-20px] w-6/12 ml-2">
                                <label>Job Title</label>
                                <input {...register("jobtitle", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your job title"/>
                                <p className="text-red-300  h-10 text-xs">{errors.jobtitle?.message}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full '>
                            <div className="mt-[-20px] w-6/12">
                                <label>Phone Number</label>
                                <input {...register("phone", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your company name"/>
                                <p className="text-red-300  h-10 text-xs">{errors.phone?.message}</p>
                            </div>
                            <div className="mt-[-20px] w-6/12 ml-2">
                                <label>Country</label>
                                <input {...register("country", {required:"This field is required"})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your job title"/>
                                {/* <CountrySelect value={value} options={options} changeHandler={changeHandler}/> */}
                                <p className="text-red-300  h-10 text-xs">{errors.country?.message}</p>
                            </div>
                        </div>
                        <div className="mt-[-20px]">
                            <label>Password</label>
                            <input {...register("password", {required:"This field is required", minLength:{
                                value:8,
                                message:"Minimum character 8 words"
                            }})} className="border-[1px] border-[#aaaaaa] px-4 py-[6.9px] rounded-md mt-1 w-full" type="text" placeholder="Enter your sequrity key"/>
                            <p className="text-red-300 h-10 text-xs">{errors.password?.message}</p>
                        </div>
                        <button className="px-8 md:px-10 py-2 md:py-3 bg-[#9b9b9b] rounded-sm text-white font-medium text-xs w-full mt-[-20px]">Register</button>
                    </div>
                </form>
           </div>
        </div>
    </div>
  )
}

export default page