import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({text}) {
  return (
    <div className='w-32 px-3 py-2 gap-1 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{text}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button