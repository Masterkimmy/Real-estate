import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center py-[30px]'>
      <div className='w-[80%]'>
        <Image className='w-[90vw]' src="/Frame52.png" alt="public" width={500} height={300}/>
      </div>
      <div>
        <div className='flex flex-col md:flex-row items-center md:gap-[45vw] gap-[20px] py-[40px]'>
          <div className='flex flex-col items-center'>
            <h1 className='md:text-3xl text-5xl font-bold'>For You</h1>
            <p className='md:text-[10px]'>showing 1,450 result</p>
          </div>
          <div className='flex flex-col md:flex-row gap-[15px]'>
            <button className='flex md:w-[8vw] w-[60vw] md:text-[12px] py-[7px] border-2 rounded-full items-center justify-around md:px-[5px] text-sm'>Pricing</button>
            <button className='md:w-[8vw] w-[60vw] text-[12px] py-[7px] border-2 rounded-full items-center justify-around px-[5px] text-sm'>Most Resent</button>
            <button className='flex md:w-[8vw] w-[60vw] text-[12px] py-[2px] border-2 rounded-full items-center justify-around'>
              <div>
                <Image src="/Group 2.png"  alt="public" width={30} height={30} />
              </div>
              <div>
                <Image src="/check-list.png" alt="public" width={30} height={30} />
              </div>
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero
