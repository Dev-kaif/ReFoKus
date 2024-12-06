import React from 'react'

function Marquee({imagesUrl}) {
  return (
    <div className='flex gap-20 w-full overflow-hidden py-10'>
      {imagesUrl.map((url,i)=><img className='w-[6vw] flex-shrink-0' key={i} src={url} alt="" />)}
      {imagesUrl.map((url,i)=><img className='w-[6vw] flex-shrink-0' key={i} src={url} alt="" />)}
    </div>
  )
}

export default Marquee