import React, { useState } from "react";
import HeroImg from "../assets/cover_11zon.jpg";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div class="md:w-[50%] mb-10">
            <h1 className="text-3xl font-bold">
              High-quality Project Based Education For Everyone.
            </h1>
            <p className="md:text-[19px] mt-5 md:w-[90%]">
              At Remotely, our mission is to power pupil engagement and
              fulfillment via actual-global venture-primarily based studying. We
              provide instructors with the tools they need to put into effect
              superb PBL that builds destiny-ready talents.
            </p>
            <div className="my-10">
              <Link
                href="/"
                className="bg-grey p-4 px-12 font-bold"
              >
                Join us now!
              </Link>
            </div>
          </div>
          <div className="md:w-[50%] relative">
            <div className="w-[100px] h-[100px] absolute bg-[#F9AF33] opacity-30 rounded-full eclipes md:block hidden"></div>
            <Image
              src={HeroImg}
              alt="Hero Image"
              className="mx-auto md:rounded-full object-cover md:w-[400px] md:h-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

