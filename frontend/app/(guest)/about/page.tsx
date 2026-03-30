"use client"

import Image from "next/image"
import {
  BriefcaseBusiness,
  LucideIcon,
  Building2,
  Circle,
  Code,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { JSX, useState } from "react"
import Container from "@/components/common/Container"
import { toast } from "sonner"
import { IconType } from "react-icons"
import Profile from "@/public/assets/profile.jpg"
import BgImage from "@/public/assets/background-image.png"

// Reusable List Section Component
type ListSectionProps<T> = {
  title: string
  items: T[]
  renderItem: (item: T, idx: number) => JSX.Element
}

function ListSection<T>({ title, items, renderItem }: ListSectionProps<T>) {
  return (
    <div>
      <h1 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h1>
      <ul className="flex flex-col gap-3">{items.map(renderItem)}</ul>
    </div>
  )
}

type SocialType = {
  name: string
  icon: IconType
  link?: string
}

type ContactType = {
  name: string
  icon: LucideIcon
  link?: string
}

export default function AboutPage() {
  const Socials: SocialType[] = [
    { name: "Github", icon: FaGithub, link: "https://github.com/romelBalungag" },
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/jersonjay.bonghanoy",
    },
  ]

  const Contacts: ContactType[] = [
    { name: "romelbalungag@gmail.com", icon: Mail },
    { name: "+63 991 533 7883", icon: Phone },
    { name: "Cebu, Philippines", icon: MapPin },
  ]

  const frontend = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Javascript",
    "HTML5",
    "CSS3",
    "ShadCN",
  ]

  return (
    <Container>
      {/* Header Section */}
      <div>
        <Image
          src={BgImage}
          alt="Background Image"
          className="h-40 w-full rounded-2xl object-cover sm:h-52 md:h-60"
        />
        <div className="-mt-16 ml-4 flex flex-col items-center gap-2 text-center sm:-mt-20 sm:ml-10 sm:flex-row sm:items-end sm:text-left">
          <div className="rounded-full border-4 border-red-700 p-0.5">
            <Image
              src={Profile}
              alt="Profile Picture"
              className="w-28 rounded-full sm:w-32 md:w-40"
            />
          </div>
          <div className="sm:mx-4 sm:mb-4">
            <h1 className="text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl dark:text-gray-300">
              Romel Balungag
            </h1>
            <p className="sm:text-md text-sm text-gray-600 italic dark:text-gray-400">
              Aspiring Web Developer
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-10 flex flex-col gap-6 lg:flex-row">
        {/* About & Achievements Section */}
        <div className="w-full rounded-md border border-transparent p-4 shadow-[0_0_1px_gray] sm:p-5">
          <div className="mb-5 flex items-center gap-1 dark:text-gray-300">
            <BriefcaseBusiness className="w-6 sm:w-8" />
            <h1 className="text-lg font-semibold sm:text-xl">About</h1>
          </div>

          <p className="text-justify text-sm sm:text-base dark:text-gray-300">
            Hi there, I’m
            <span className="mx-2 rounded-md border border-gray-200 p-1 text-xs dark:border-gray-600 dark:bg-[#333333] dark:text-gray-300">
              Romel Balungag
            </span>
            , an Information Technology student and aspiring developer focused
            on frontend development.
            <br />
            <br />
            I enjoy building clean and user-friendly interfaces using JavaScript
            and React, making sure every project is simple, responsive, and easy
            to use. I’ve worked on systems like item management and ordering
            interfaces, always aiming to improve the user experience.
            <br />
            <br />
            While frontend is my main focus right now, I’m also exploring
            backend development and other areas to grow as a full-stack
            developer. Outside of coding, I enjoy cycling, which helps me stay
            consistent and disciplined.
          </p>

          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-fit">
            {/* Socials */}
            <ListSection
              title="Socials"
              items={Socials}
              renderItem={({ icon: Icon, name, link }, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer items-center gap-2 text-sm hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  onClick={() =>
                    link && window.open(link, "_blank", "noopener,noreferrer")
                  }
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </li>
              )}
            />

            {/* Contacts */}
            <ListSection
              title="Contacts"
              items={Contacts}
              renderItem={({ icon: Icon, name }, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer items-center gap-2 text-sm hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </li>
              )}
            />
          </div>
        </div>
      </div>

      {/* Tech Stacks Section */}
      <div className="w-full rounded-md border border-transparent p-4 shadow-[0_0_1px_gray] sm:p-5">
        <div className="mb-5 flex flex-row items-center gap-2">
          <Code className="w-5" />
          <h1 className="text-lg font-semibold sm:text-[22px] dark:text-gray-200">
            Tech Stacks
          </h1>
        </div>

        {[{ title: "Frontend", data: frontend }].map((section, idx) => (
          <div key={idx} className="mb-4 flex flex-col gap-3">
            <h1 className="font-semibold text-gray-800 dark:text-gray-300">
              {section.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {section.data.map((tech, i) => (
                <p
                  key={i}
                  className="rounded-sm px-2 py-1 text-xs text-gray-800 shadow-[0_0_1px_gray] sm:text-[13px] dark:border-gray-600 dark:bg-[#333333] dark:text-gray-300"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
