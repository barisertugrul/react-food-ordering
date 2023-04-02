import Image from "next/legacy/image"
import Title from "./ui/Title"

const About = () => {
  return (
    <div className='bg-secondary py-14'>
        <div className='container mx-auto flex items-center text-white gap-20 justify-center max-sm:flex-wrap-reverse'>
            <div className="w-screen sm:w-1/2">
                <div className="relative w-full h-screen w-max-[445px] h-max-[600px] flex justify-center">
                    <Image src="/images/about-img.png" alt="" layout="fill" className=""/>
                </div>
            </div>
            <div className="sm:w-1/2 max-sm:grid max-sm:justify-center">
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