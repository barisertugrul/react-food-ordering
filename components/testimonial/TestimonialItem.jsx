import Image from 'next/image'
import React from 'react'

const TestimonialItem = ({testimonial}) => {
  return (
    <div className='mx-4'>
        <div className='p-6 bg-secondary text-white rounded-[5px]'>
        <p>{testimonial.message}</p>
            <div className='flex flex-col mt-4'>
                <span className='text-lg font-semibold'>{testimonial.name}</span>
                <span className='text-[15px]'>{testimonial.job}</span>
            </div>
        </div>
        <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 flex justify-center before:content-[''] before:absolute before:top-0 before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5" >
            <Image
                alt=''
                src={testimonial.image}
                layout="fill"
                objectFit="contain"
                className='rounded-full'
            />
        </div>
    </div>
  )
}

export default TestimonialItem