"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

type Props = {
  limit: boolean
  isHome: boolean
}

export default function ProjectHolder({ limit, isHome }: Props) {
  const [searchProject, setSearchProject] = useState("")
  const projects = [
    {
      title: "Fast Kaon",
      description:
        "A simple restaurant menu website built using HTML and CSS. It features a clean and responsive design that allows users to easily browse food items and view menu details in a fast and user-friendly interface.",
      link: "/",
      image: "/assets/default-image.png",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchProject.toLowerCase()) ||
      project.description.toLowerCase().includes(searchProject.toLowerCase())

    return matchesSearch
  })

  let loading = "Oops, loading please wait a moment..."

  return (
    <div className="mt-10">
      {isHome && (
        <div className="mt-16 mb-10 md:mt-32 lg:mt-40">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-gray-800">Recent Project</h3>
            <h1 className="flex items-center gap-2 text-center text-2xl leading-tight font-bold sm:text-3xl md:text-4xl dark:text-gray-100">
              Check out my recent work
            </h1>

            <p className="max-w-xl text-center text-sm text-gray-700 sm:text-base dark:text-gray-300">
              I’ve worked on diverse web projects, combining creativity and
              functionality. Take a look at some of my standout work.
            </p>
          </div>
        </div>
      )}

      {projects.length == 0 ? (
        <div className="mt-10 text-center">
          <h1 className="text-base text-gray-400 italic md:text-lg">
            {loading}
          </h1>
        </div>
      ) : (
        <>
          <h1
            className={`mt-10 text-base font-medium md:text-lg dark:text-gray-100 ${
              limit ? "hidden" : "block"
            }`}
          >
            All Projects
          </h1>

          {!limit && (
            <div className="my-4 w-full">
              <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full rounded-md border border-gray-400 bg-gray-50 py-2 pr-4 pl-10 transition-all duration-200 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-gray-800 focus:outline-none dark:border-gray-600 dark:bg-[#333333]"
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="mt-8 mb-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {(!limit ? filteredProjects : filteredProjects.slice(0, 3)).map(
              (project, i) => (
                <div key={i} className="flex h-full">
                  <ProjectCard
                    ImageSrc={project.image}
                    ImageAlt={`${project.title} cover image`}
                    ProjectTitle={project.title}
                    ProjectDescription={project.description}
                    ProjectLink={project.link}
                  />
                </div>
              )
            )}
          </div>

          <div>
            <p className={`font-medium ${!limit ? "hidden" : "block"}`}>Explore more</p>
            <Link
              href={"/projects"}
              className={`flex items-center justify-center gap-1 md:justify-start ${
                !limit ? "hidden" : "flex"
              }`}
            >
              <h1 className="md:text-md text-left text-sm dark:text-gray-200 border bg-black 
              text-white px-3 py-2 rounded-md hover:bg-[#222222]">
                See all projects
              </h1>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
