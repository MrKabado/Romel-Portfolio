"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

type HeaderProps = {
  isVisited: string
  setIsVisited: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ isVisited, setIsVisited }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const pathname = usePathname() // Get current path

  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    // { name: "Blogs", link: "blog" },
    { name: "Contact", link: "contact" },
  ]

  // 🔥 Hide / Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white/70 px-6 py-3 shadow-md backdrop-blur-lg transition-transform duration-300 ease-in-out md:px-16 lg:px-34 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } dark:bg-black/90 dark:shadow-lg`}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            My Portfolio
          </h1>
          <h1 className="text-sm text-red-700 dark:text-red-400">
            Romel Balungag
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-4 md:flex">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  pathname === `/${item.link}` ||
                  (item.link === "" && pathname === "/")
                    ? "bg-red-700 text-white dark:bg-red-500 dark:text-white"
                    : "bg-transparent text-gray-600 dark:text-gray-300"
                } cursor-pointer rounded-sm px-3 py-1 text-center text-sm transition-all duration-200 hover:text-red-600 dark:hover:text-red-400`}
              >
                <Link href={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex gap-4 text-2xl md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md p-2 transition hover:bg-red-50 dark:hover:bg-red-950/30">
              <Menu size={20} className="text-gray-900 dark:text-white" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 border-0 bg-white/80 shadow-md backdrop-blur-lg dark:bg-black/90"
            >
              {navItems.map((item, i) => (
                <div key={i}>
                  <Link href={`/${item.link}`}>
                    <DropdownMenuItem className="cursor-pointer hover:text-red-600 dark:hover:text-red-400">
                      {item.name}
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setOpen(false)}
                className={`${
                  pathname === `/${item.link}` ||
                  (item.link === "" && pathname === "/")
                    ? "bg-red-600 text-white dark:bg-red-500"
                    : "bg-gray-100 text-gray-700 dark:bg-black dark:text-gray-300"
                } cursor-pointer rounded-sm px-4 py-2 text-center text-sm transition-all duration-200 hover:bg-red-100 dark:hover:bg-red-950/30`}
              >
                <Link href={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
