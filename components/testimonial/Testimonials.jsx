import React from 'react'
import Title from '../ui/Title'
import TestimonialItem from './TestimonialItem'
import Slider from 'react-slick'
import {
  IoIosArrowBack,
  IoIosArrowForward
} from 'react-icons/io'

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows:true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  }

  function NextBtn({ onClick }) {
    return(
      <button className='bg-primary text-white flex items-center justify-center rounded-full sm:w-10 sm:h-10 w-8 h-8 absolute sm:-bottom-16 -bottom-12 left-1/2' onClick={onClick}>
        <IoIosArrowForward className='' />
      </button>
    )
  }

  function PrevBtn({ onClick }) {
    return(
      <button className='bg-primary text-white  flex items-center justify-center rounded-full sm:w-10 sm:h-10 w-8 h-8 absolute sm:-bottom-16 -bottom-12 right-1/2 mr-2' onClick={onClick}>
        <IoIosArrowBack className='' />
      </button>
    )
  }

  const testimonials = [
    {
      id: 1,
      name: "Moana Michell",
      job: "magna aliqua",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "/images/client1.jpg"
    },
    {
      id: 1,
      name: "Mike Hamell",
      job: "magna aliqua",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "/images/client2.jpg"
    },
    {
      id: 3,
      name: "Moana Michell",
      job: "magna aliqua",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "/images/client1.jpg"
    },
    {
      id: 4,
      name: "Mike Hamell",
      job: "magna aliqua",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "/images/client2.jpg"
    }
  ]

  return (
    <div className='container mx-auto mb-20 mt-12'>
      <Title className="text-[40px] text-center">What Says Our Customers</Title>
      
        <Slider className='mt-5' {...settings} >
        {testimonials.map((testimonial, index) => (
      <div key={index} >
        <TestimonialItem testimonial={testimonial} />
      </div>
    ))}
        </Slider>
        
    </div>
  )
}

export default Testimonials