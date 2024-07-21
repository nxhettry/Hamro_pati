import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Bignews = () => {
  return (
    <div className='border border-slate-300 rounded-md flex flex-col gap-12 w-full justify-center items-center p-6'>
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h1 className='font-semibold text-3xl'>Heading of the news</h1>
            <h3 className='font-medium text-xl'>-Author</h3>
        </div>
        <Image src="/logo.jpg" height={400} width={400} className='h-full w-full' />
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil accusamus soluta.</p>
            <Link href="/">Read More</Link>
        </div>
    </div>
  )
}

export default Bignews