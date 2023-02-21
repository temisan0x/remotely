import React, { useState } from "react";
import FeaturedImg from "../assets/featured-remotely.jpg";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesBlock() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold ">What is Remotely</h1>
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center">
          <div class="md:w-[50%] md:px-10">
            <p className="text-[19px] mt-5 poppins w-[80%]">
                Remotely isn't like the conventional establishments. We're a school for people seeking to benefit technical capabilities and kickstart a new career. Remotely takes a non-conventional approach to studying via coaching guides directly linked with the selected tune.
            </p>
            <div className="my-10">
              <Link
                href="/"
                className="bg-grey p-4 px-12 hover:bg-purple poppins font-bold"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:w-[50%] relative">
            <div className="w-[80px] h-[80px] absolute bg-[#F9AF33] opacity-30 rectangle"></div>
            <Image
              src={FeaturedImg}
              alt="Hero Image"
              className="mx-auto object-cover w-full h-[300px] py-10"
            />
              <div className="w-[80px] h-[80px] absolute bg-[#442AF9] opacity-30 rectangleTwo"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

