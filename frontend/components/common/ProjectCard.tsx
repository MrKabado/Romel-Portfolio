"use client"

import Image, { StaticImageData } from "next/image"
import { Globe } from "lucide-react"

type Props = {
  ImageSrc: string | StaticImageData
  ImageAlt: string
  ProjectTitle: string
  ProjectDescription: string
  ProjectLink: string
}

export default function ProjectCard({
  ImageSrc,
  ImageAlt,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
}: Props) {
  return (
    <div className="flex h-full flex-col rounded-md border border-transparent p-4 shadow-[0_0_4px_rgba(0,0,0,0.25)] transition-shadow duration-200 hover:border-red-500/30 hover:shadow-[0_0_10px_rgba(220,38,38,0.25)] dark:bg-[#1A1A1A] dark:shadow-[0_0_6px_rgba(255,255,255,0.08)]">
      <Image
        src={ImageSrc}
        alt={ImageAlt || "Image Title"}
        className="mb-2 h-40 w-full rounded-md object-cover"
        width={400}
        height={400}
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
            {ProjectTitle}
          </h1>

          <p className="text-justify text-[13px] leading-4 text-gray-600 dark:text-gray-300">
            {ProjectDescription}
          </p>
        </div>

        <button
          className="mt-4 flex w-fit cursor-pointer items-center gap-1 rounded-md bg-red-700 px-2 text-[11px] font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
          onClick={() => window.open(ProjectLink, "_blank")}
        >
          <Globe className="w-3" />
          Web Link
        </button>
      </div>
    </div>
  )
}
