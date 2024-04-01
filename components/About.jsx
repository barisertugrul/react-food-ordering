import Image from "next/image"
import Title from "./ui/Title"

const About = () => {
  return (
    <div className='bg-secondary py-14'>
        <div className='container mx-auto flex items-center text-white gap-19 justify-center flex-wrap-reverse'>
            <div className="flex justify-center sm:w-1/2">
                <div className="relative sm:w-[445px] sm:h-[600px] w-[300px] h-[450px] flex justify-center">
                    <Image
                        src="/images/about-img.png"
                        alt=""
                        layout="fill"
                        className=""
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 100vw,
                        100vw"
                        priority
                    />
                </div>
            </div>
            <div className="sm:w-1/2 max-sm:flex flex-wrap max-sm:mb-10 max-sm:justify-center sm:pl-5">
                <Title className="text-[2.5rem] max-sm:text-center">We Are Feane</Title>
                <p className="my-5 max-sm:text-center">
                    {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All"}
                </p>
                <button className="btn-primary">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default About