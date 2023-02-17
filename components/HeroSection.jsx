import React, { useState } from "react";
import HeroImg from "../assets/cover_11zon.jpg";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center">
      <div class="w-[50%] p-10">
        <h1 className="text-xl font-bold">
          High-quality Project Based Education For Everyone.
        </h1>
        <p className="text-[19px] mt-5 poppins w-[90%]">
          At Remotely, our mission is to power pupil engagement and fulfillment
          via actual-global venture-primarily based studying. We provide
          instructors with the tools they need to put into effect superb PBL
          that builds destiny-ready talents.
        </p>
        <div className="mt-8">
        <Link href='/' className="bg-purple p-5 ">Join us now!</Link>
        </div>
      </div>
      <div className="w-[50%]">
        <Image src={HeroImg} alt="Hero Image" className="rounded-full object-cover w-[500px] h-[500px] m-auto mt-20"
         />
      </div>
    </div>
  );
}
