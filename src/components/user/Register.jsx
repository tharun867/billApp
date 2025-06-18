import React from 'react'
import { CgNametag } from "react-icons/cg";


const Register = () => {
  return (
    <div className='bg-[#efef] size-full flex items-center justify-center'>
      <form className='w-1/2 bg-amber-200 h-1 flex items-center justify-center flex-col gap-4 px-[80px] py-40'>
        <div className='w-full flex justify-center items-center'>
         <h1>Registration form</h1>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='entername' className='w-full outline-none px-4 h-10' />
          <span>
            <CgNametag />
          </span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='enterusername'className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='enteremail' className='w-full outline-none px-4 h-10'/>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
          <input type="text" placeholder='enterpassword'className='w-full outline-none px-4 h-10' />
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" placeholder='enterRe_type password'className='w-full outline-none px-4 h-10' />

        </div>
        

      </form>
    </div>
  )
}

export default Register
