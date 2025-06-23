"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import ProjectTag from "@/components/projectTag";
import { React, useState } from "react";
import { projects } from "@/components/data";
import ScrollButton from "@/components/scrollButton";


const ProjectsPage = () => {

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <main className="min-h-screen w-full">
        <div className="h-full relative">
          <div className="w-screen h-screen flex flex-col items-center justify-center gap-12 text-6xl lg:text-8xl text-center">
            <span>My Projects</span>
            <div className="flex flex-col items-center justify-center text-2xl text-center">
              <span>Filter</span>
              <div className="flex flex-wrap lg:flex-row max-w-[500px] lg:max-w-[1000px] justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="JavaScript" isSelected={tag === "JavaScript"} />
                <ProjectTag onClick={handleTagChange} name="TypeScript" isSelected={tag === "TypeScript"} />
                <ProjectTag onClick={handleTagChange} name="Python" isSelected={tag === "Python"} />
                <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"} />
                <ProjectTag onClick={handleTagChange} name="Next.JS" isSelected={tag === "Next.JS"} />
                <ProjectTag onClick={handleTagChange} name="Node.JS" isSelected={tag === "Node.JS"} />
                <ProjectTag onClick={handleTagChange} name="PHP" isSelected={tag === "PHP"} />
                <ProjectTag onClick={handleTagChange} name="MySQL" isSelected={tag === "MySQL"} />
                <ProjectTag onClick={handleTagChange} name="Vite" isSelected={tag === "Vite"} />
                <ProjectTag onClick={handleTagChange} name="Flask" isSelected={tag === "Flask"} />
              </div>
              <hr className="border-t border-gray-300 w-full max-w-[500px] lg:max-w-[1000px] mx-auto h-[1px]" />
              <div className="flex flex-wrap lg:flex-row max-w-[500px] lg:max-w-[1000px] justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="Front-End" isSelected={tag === "Front-End"} />
                <ProjectTag onClick={handleTagChange} name="Back-End" isSelected={tag === "Back-End"} />
                <ProjectTag onClick={handleTagChange} name="Full-Stack" isSelected={tag === "Full-Stack"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full gap-4 items-center">
            <div className="flex-col">
              {filteredProjects.map((project) => (
                <div className="h-screen w-screen flex items-center justify-center bg-white" key={project.id}>
                  <div className="flex flex-col gap-8">
                    <hr className="border-t border-black w-full mx-auto h-[1px]" />
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{project.title}</h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[1500px] xl:h-[800px]">
                      <Image src={project.img} alt="" sizes="auto" fill className="rounded" />
                    </div>
                    <h4 className="font-bold w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[1500px] uppercase">{project.subtitle}</h4>
                    <div className="flex flex-col gap-2">
                      <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[1500px] uppercase italic">- {project.type}</p>
                      <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[1500px]">{project.desc}</p>
                    </div>
                    <div className="flex w-full justify-end">
                      <Link href={project.link} target={"_blank"} className="p-1 text-sm md:p-2 md:text-md lg:p-6 lg:text-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black m-4 transition duration-200">
                        View Website
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ScrollButton />
      </main>
    </>
  );
}

export default ProjectsPage;