import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white  rounded-full h-12 w-12  flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
        <div>
            <p className='text-xl text-shadow-2xs text-white mb-14 leading-normal '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor obcaecati provident consectetur corrupti odit.</p>
        <div className='flex justify-between'>
            <button style ={{backgroundColor:props.color}} className=' text-white font-medium px-7 py-3 rounded-full text-lg ' >{props.tag}</button> 
            <button className=' text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
        </div>
        </div>
    </div>
  )
}

export default RightCardContent
