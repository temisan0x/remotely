import React, { useState } from "react";
import ContactImg from "../assets/contactimg.jpg";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div class="md:w-[50%] mb-10">
            <h1 className="md:text-4xl text-2xl poppins text-[#3E3C3B] font-bold">
              Contact Us
            </h1>
            <p className="text-[19px] mt-5 poppins w-[90%]">
              Whether you&apos;re looking for supplementary materials or a modern
              approach to project-based learning, Remotely is here to assist.
              Tap underneath learn more.
            </p>
            <div className="my-10">
              <Link
                href="/"
                className="bg-[#35314F] text-white md:text-3xl p-4 px-8 poppins font-bold rounded-md"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:w-[50%] relative">
            <Image
              src={ContactImg}
              alt="contact Image"
              className="mx-auto object-cover w-full h-[400px] bg-blend-saturation"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
