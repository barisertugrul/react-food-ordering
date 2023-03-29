import Image from "next/image";
import React from "react";
import Title from "./Title";

const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
        <div className="absolute top-0 left-0 w-full h-full z-30">
            <div className="relative h-full w-full">
                <Image
                    src="/images/hero-bg.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
        <div className="relative z-30 text-white top-36 flex flex-col items-start gap-y-10">
            <Title className="text-[3.5rem]">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-96 w-full">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
            </p>
            <button className="btn-primary">Order Now!</button>
        </div>
    </div>
  );
};

export default Carousel;
