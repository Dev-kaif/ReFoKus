import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl  mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[12rem] font-semibold leading-none tracking-tight'>refoKus.</h1>
            </div>
            <div className='basis-1/2 flex justify-between gap-10 text-base font-medium'>
                <div className='flex gap-10'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500'>Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map((item,i)=><h3 className='text-zinc-500 mb-2' key={i}>{item}</h3>)}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500'>Sitemaps</h4>
                        {["Home","Work","Careers","Contacts"].map((item,i)=><h3 className='mb-2' key={i}>{item}</h3>)}
                    </div>
                </div>
                <div className=' flex flex-col justify-end items-end text-end gap-5 '>
                    <h3>Refokus is pioneering digital agency driven by design and empowered by technology</h3>
                    <img className='w-28' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer