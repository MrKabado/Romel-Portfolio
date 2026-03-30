"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const Pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const Resources = ["Github", "LinkedIn"];

  const ConnectContent = [
    { name: "Github", link: "https://github.com/MrKabado" },
    { name: "Facebook", link: "https://www.facebook.com/romel.balungag.9" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-34">
      <div className="py-8 sm:py-10 md:py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16 items-start mx-auto">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[16px] sm:text-[17px] md:text-[19px] text-gray-900 mb-1 sm:mb-2 dark:text-gray-300">
            Romel Balungag
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm dark:text-gray-400">
            Aspiring Web Developer
          </p>
          <p className="text-gray-700 text-xs sm:text-sm flex items-center gap-1 dark:text-gray-400">
            Cebu, Philippines <MapPin size={14} />
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-[16px] sm:text-[17px] md:text-[19px] text-gray-900 mb-1 sm:mb-2 dark:text-gray-300">
            Pages
          </h1>
          <ul className="flex flex-col gap-1">
            {Pages.map((page, i) => (
              <Link href={`/${page.href}`} key={i} className="hover:underline">
                <li className="text-gray-700 text-xs sm:text-sm dark:text-gray-400">
                  {page.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[16px] sm:text-[17px] md:text-[19px] text-gray-900 mb-1 sm:mb-2 dark:text-gray-300">
            Resources
          </h1>
          <ul className="flex flex-col gap-1">
            {Resources.map((resource, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-gray-700 dark:text-gray-400"
              >
                {resource}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-[16px] sm:text-[17px] md:text-[19px] text-gray-900 mb-1 sm:mb-2 dark:text-gray-300">
            Contacts
          </h1>
          <ul className="flex flex-col gap-1">
            {ConnectContent.map((connect, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-gray-700 cursor-pointer hover:underline dark:text-gray-400"
                onClick={() => window.open(connect.link, "_blank")}
              >
                {connect.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-6 sm:pb-8">
        <h1 className="text-center text-xs sm:text-sm md:text-[16px] text-gray-600 dark:text-gray-300">
          © 2026 Romel Balungag. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
