import Title from '../../components/ui/Title'
import Image from 'next/image'
import React from 'react'

const Index
 = () => {
  return (
    <div className='flex items-center  md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap'>
        <div className='relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto'>
            <Image
                src="/images/f1.png" alt=''
                layout="fill"
                objectFit="contain"
                sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 80vw,
                80vw"
            />
        </div>
        <div className='md:flex-1 md:pr-24 pl-10 pr-10 md:text-start text-center'>
            <Title className="text-6xl" >Delicious Pizza</Title>
            <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>$20</span>
            <p className='text-sm my-4'>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className='mt-5 md:justify-start justify-center'>
                <h4 className='text-xl font-bold'> Chose the size</h4>
                <div className='flex items-center gap-x-20 md:justify-start justify-center'>
                    <div className='relative w-8 h-8 cursor-pointer'>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                    </div>
                    <div className='relative w-12 h-12 cursor-pointer'>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                    </div>
                    <div className='relative w-16 h-16 cursor-pointer'>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 md:justify-start justify-center'>
                <h4 className='text-xl font-bold'> Chose additional ingredients</h4>
                <div className='flex gap-x-4 mt-4 md:justify-start justify-center'>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary cursor-pointer' />
                        <span className='text-sm font-semibold'>Ketchup</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary cursor-pointer' />
                        <span className='text-sm font-semibold'>Mayonnaise</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary cursor-pointer' />
                        <span className='text-sm font-semibold'>Hot Sauce</span>
                    </label>
                </div>
            </div>
            <button className='btn-primary mt-5'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Index
