"use client";

import Layout from "@/components/layout";
import React from "react";
import { experiences } from "@/components/data";

const AboutPage = () => {
  return (
    <>
      <main className="min-h-screen w-full">
        <div className="h-full w-full flex flex-col">
          {/* TEXT CONTAINER*/}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
            { /* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              { /* BIOGRAPHY TITLE */}
              <h1 className="font-bold text-2xl">ABOUT ME</h1>
              { /* BIOGRAPHY DESCRIPTION */}
              <p className="text-md lg:text-lg">
                Hello, my name is Michael Obi and I am a Software Developer from Austin, Texas. I
                graduated from the University of Texas at San Antonio with a Bachelors Degree
                in Computer Science. My current focus is to create digital solutions to complex
                problems. I look forward to expanding my knowledge and understanding of the tech industry.
              </p>
            </div>
            { /* SKILLS */}
            <div className="flex flex-col gap-12 justify-center">
              { /* SKILL TITLE */}
              <h1 className="font-bold text-2xl">SKILLS</h1>
              { /* SKILL LIST */}
              <div className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">HTML</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">CSS</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">React.js</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">Redux</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">jQuery</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">SASS</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">C</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">PHP</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">C#</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">MySQL</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">Python</div>
                <div className="rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              </div>
            </div>
            { /* EXPERIENCE */}
            <div className="flex flex-col gap-12 justify-center pb-72 lg:pb-48">
              { /* EXPERIENCE TITLE */}
              <h1 className="font-bold text-2xl">EXPERIENCE</h1>
              { /* EXPERIENCE LIST */}
              <div className="">
                {experiences.map((experience, index) => (
                  <div key={index} className="mb-8 flex flex-wrap lg:justify-between">
                    { /* EXPERIENCE LIST ITEM */}
                    <div className="w-full max-w-xl lg:w-3/4">
                      { /* JOB TITLE & COMPANY */}
                      <h6 className="mb-2 font-semibold">
                        {experience.title} - {experience.company}
                      </h6>
                      { /* JOB DESCRIPTION */}
                      <p className="mb-4 text-xs md:text-sm italic">{experience.description}</p>
                    </div>
                    <div className="w-full lg:w-1/4">
                      { /* JOB DATE */}
                      <p className="mb-2 text-sm text-gray-500 font-semibold">{experience.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage;