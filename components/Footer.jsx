import React, { useState } from "react";
import FeaturedImg from "../assets/featured-remotely.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-500 container py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:flex-wrap md:justify-around md:-mx-4 py-6">
          <div class="md:w-1/3 md:px-4">
            <h4 class="text-lg font-semibold mb-4">Companies</h4>
            <h4 class="text-lg font-semibold mb-4">Collaborate with us</h4>
          </div>
          <div class="md:w-1/3 md:px-4">
            <h4 class="text-lg font-semibold mb-4">About Us</h4>
            <h4 class="text-lg font-semibold mb-4">Our Story</h4>
            <h4 class="text-lg font-semibold mb-4">Blog</h4>
          </div>
          <div class="md:w-1/3 md:px-4">
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <h4 class="text-lg font-semibold mb-4">Facebook</h4>
            <h4 class="text-lg font-semibold mb-4">Linkedin</h4>
            <h4 class="text-lg font-semibold mb-4">Twitter</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
