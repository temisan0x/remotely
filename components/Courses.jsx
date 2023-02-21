import React from "react";
import Image from "next/image";

export default function Courses({ course, numberOfCourses, imageCourse }) {
  return (
    <div className="border-[#ebe4e4] border flex drop-shadow-md rounded-md">
      <Image
        src={imageCourse.src}
        alt="course images"
        width={imageCourse.width}
        height={imageCourse.height}
      />
      <div className="p-6">
        <h1>{course}</h1>
        <p>{numberOfCourses}</p>
      </div>
    </div>
  );
}
