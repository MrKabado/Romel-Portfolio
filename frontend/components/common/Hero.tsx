"use client"

import { FaFacebook, FaGithub } from "react-icons/fa"
import type { IconType } from "react-icons"
import { Phone, Folder } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Profile from "../../public/assets/profile.jpg"

export default function Hero() {
  const icons: { icon: IconType; link: string }[] = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/romel.balungag.9",
    },
    {
      icon: FaGithub,
      link: "https://github.com/romelBalungag",
    },
  ]

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
      {/* LEFT SIDE */}
      <div className="flex w-full flex-col gap-5 text-center md:w-1/2 md:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-red-600 md:text-lg">
            Message
          </h1>

          <h1 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
            Hi, I am Romel
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base dark:text-gray-300">
            Aspiring web developer passionate about building modern, responsive
            websites that are functional, user-friendly, and visually engaging.
            Focused on learning new web technologies and creating practical
            solutions that solve real-world problems.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#222222] px-4 py-2 text-white transition hover:bg-[#333333] sm:w-auto"
          >
            <Folder size={20} />
            View Outputs
          </Link>

          <Link
            href="/projects"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 transition hover:border-red-600 hover:text-red-600 sm:w-auto dark:border-gray-600 dark:text-gray-200 dark:hover:border-red-400 dark:hover:text-red-400"
          >
            <Phone size={20} />
            Contact Me
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-2 flex justify-center gap-4 md:justify-start">
          {icons.map(({ icon: Icon, link }) => (
            <Link key={link} href={link} target="_blank">
              <Icon
                size={40}
                className="cursor-pointer text-gray-800 transition-all duration-300 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex w-full justify-center md:w-1/2">
        <Image
          src={Profile}
          alt="Profile"
          className="w-2/3 max-w-sm rounded-xl border border-gray-200 object-cover sm:w-1/2 md:w-full md:max-w-md lg:max-w-lg dark:border-gray-700"
          priority
        />
      </div>
    </div>
  )
}
