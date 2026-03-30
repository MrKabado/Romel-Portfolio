"use client"
import { Mail, Phone, MessageSquare, Clock } from "lucide-react"
import { FaGithub, FaFacebook } from "react-icons/fa"
import { useState } from "react"
import { toast } from "sonner"
import Container from "@/components/common/Container"
import { IconType } from "react-icons"
import { ButtonSubmit } from "@/components/common/Button"

export default function ContactPage() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const ContactInfo = [
    {
      heading: "Email",
      subheading: "romelbalungag@gmail.com",
      description: "I usually email you back within an hour.",
      headingIcon: Mail,
      descriptionIcon: MessageSquare,
    },
    {
      heading: "Phone",
      subheading: "+63 912 3456 789",
      description: "I'm available weekdays from 10AM to 5PM",
      headingIcon: Phone,
      descriptionIcon: Clock,
    },
  ]

  const SocialMedia: { icon: IconType; link: string }[] = [
    { icon: FaGithub, link: "https://github.com/romelBalungag" },
    { icon: FaFacebook, link: "https://www.facebook.com/romel.balungag.9" },
  ]

  const HandleSubmit = async (e: any) => {
    e.preventDefault()
    setSubmitted(true)

    toast.success(`Thank you for messaging ${fname}!`)
    setSubmitted(false)
  }

  return (
    <Container>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[30px] font-bold dark:text-gray-200">
          Let's get in touch!
        </h1>
        <p className="text-center text-[17px] text-gray-600 dark:text-gray-400">
          You can reach me at the following
        </p>
      </div>

      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex w-full flex-col gap-4">
          {ContactInfo.map(
            (
              {
                headingIcon: Icon,
                descriptionIcon: Icon2,
                heading,
                description,
                subheading,
              },
              i
            ) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-lg bg-[#222223] p-6"
              >
                <h3 className="flex items-center gap-3 text-lg font-medium text-gray-200">
                  <Icon className="inline-block h-9 w-9 rounded-md bg-[#343434] p-2" />
                  {heading}
                </h3>

                <p className="text-[16px] text-gray-300">{subheading}</p>

                <p className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon2 className="inline-block w-4" />
                  {description}
                </p>
              </div>
            )
          )}

          <div className="flex flex-col gap-3 rounded-lg bg-[#222223] p-6">
            <h1 className="flex items-center gap-3 text-lg font-medium text-gray-200">
              <MessageSquare className="inline-block h-9 w-9 rounded-md bg-[#343434] p-2" />
              Connect with me
            </h1>

            <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SocialMedia.map(({ icon: Icon, link }, i) => (
                <div
                  key={i}
                  className="group flex cursor-pointer items-center justify-center rounded-lg border border-gray-600 bg-transparent py-4 transition-all duration-100 hover:bg-[#333333]"
                  onClick={() => window.open(link)}
                >
                  <Icon className="h-7 w-7 rounded-md p-1 text-gray-300 opacity-90 transition-all duration-200 group-hover:bg-[#464646]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between rounded-lg p-6 shadow-[0_0_3px_0_rgba(0,0,0,0.2)]">
          <div className="mb-4 flex flex-col justify-end gap-1">
            <h1 className="text-lg font-semibold dark:text-gray-200">
              Let's get in touch
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Whether you’re looking to collaborate or just want to chat, I’d
              love to hear from you. Let’s connect and share ideas.
            </p>
          </div>

          <form onSubmit={HandleSubmit} className="flex flex-col gap-4">
            <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
              <div className="flex w-full flex-col gap-1">
                <label
                  htmlFor="fname"
                  className="text-sm font-medium text-gray-800 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="rounded-md p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] dark:border dark:border-gray-500"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="flex w-full flex-col gap-1">
                <label
                  htmlFor="lname"
                  className="text-sm font-medium text-gray-800 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="rounded-md p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] dark:border dark:border-gray-500"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="rounded-md p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] dark:border dark:border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="message"
                className="flex items-end gap-2 text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                How can I help you?{" "}
                <span className="inline-block text-xs text-gray-400">
                  Max 500 characters
                </span>
              </label>
              <textarea
                cols={30}
                rows={3}
                name="message"
                id="message"
                className="rounded-md p-2 shadow-[0_0_2px_rgba(0,0,0,0.3)] dark:border dark:border-gray-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <ButtonSubmit
              props={{
                submitted: submitted,
                buttonType: "submit",
                className:
                  "w-full border py-2 rounded-md bg-[#222222] hover:bg-[#333333] cursor-pointer transition duration-100 ease-in-out text-gray-200 font-medium dark:bg-[#333333] dark:border-2 dark:border-[#FF9000] dark:text-[#FF9000] dark:hover:bg-[#444444]",
                btnOnClick: HandleSubmit,
                btnText: "Submit",
                btnLoadingText: "Submitting",
              }}
            />
          </form>
        </div>
      </div>
    </Container>
  )
}
