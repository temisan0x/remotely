import React, { useState } from "react";
import Courses from "../components/Courses";
import { dataList } from "../api/courseList";

export default function FeaturesBlock() {
  return (
    <section>
      <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-bold poppins">
          Explore Remotely
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10 mx-auto">
          {dataList.map((data) => {
            return (
              <Courses
                key={data.course}
                course={data.course}
                numberOfCourses={data.numberOfCourses}
                imageCourse={data.imageCourse}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
