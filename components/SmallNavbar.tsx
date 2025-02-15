import React from 'react'
import { CiBarcode } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";


const SmallNavbar = () => {
  return (
    <div  className="container mx-auto flex items-center justify-between py-4">
       <div>
            <p className='text-xl'>Code Contest</p>
        </div>
        <div>
            <p className='text-3xl'><FaBars/></p>
        </div>
    </div>
  )
}

export default SmallNavbar