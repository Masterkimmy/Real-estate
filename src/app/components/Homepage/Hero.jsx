import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center'>
      <div className='w-[80%]'>
        <Image className='w-[90vw]' src="/Frame52.png" alt="public" width={500} height={300}/>
      </div>
      <div>
        <div className='flex items-center gap-[45vw] py-[40px]'>
          <div>
            <h1 className='text-3xl font-bold'>For You</h1>
            <p className='text-[10px]'>showing 1,450 result</p>
          </div>
          <div className='flex gap-[15px]'>
            <button className='flex w-[8vw] text-[12px] py-[7px] border-2 rounded-full items-center justify-around px-[5px] text-sm'>Pricing</button>
            <button className='flex w-[8vw] text-[12px] py-[7px] border-2 rounded-full items-center justify-around px-[5px] text-sm'>Most Resent</button>
            <button className='flex w-[8vw] text-[12px] py-[2px] border-2 rounded-full items-center justify-around'>
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
