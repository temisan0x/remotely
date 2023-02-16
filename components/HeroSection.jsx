import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center">
    <Image 
      src="/hero-image.jpg" 
      alt="Hero Image" 
      className="h-screen w-full"
      />
    <div className="absolute z-10">
      <h1 className="text-4xl font-bold ">Welcome to My Website</h1>
      <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  );
}
