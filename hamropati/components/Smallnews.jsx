import React from 'react'
import Image from 'next/image'

const Smallnews = () => {
  return (
    <div className="flex flex-col justify-center gap-4 py-3 w-[33%] h-[24rem]">
        <Image src="/logo.jpg" height={400} width={400} className='h-[70%] w-full' />
        <h2 className='text-2xl font-semibold'>Heading of the news</h2>
        <p className='text-md font-light'>Author</p>
    </div>
  )
}

export default Smallnews