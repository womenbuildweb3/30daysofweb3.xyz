import Navbar from "../components/Navbar";
import { Popover, Transition } from '@headlessui/react'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import styles from "../styles/Home.module.css";
import { SparklesIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("firstName", firstName);
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);
  },[firstName, email, subject, message])

  function handleCheckout(e){
    e.preventDefault();
    console.log("this function is being called")
  } 

  const handleSubmit = async(e) => {
    console.log("first line in handlesubmit")
    e.preventDefault();
    const body = {firstName, email, subject, message}
    console.log("this is the body Im sending in", body);
    try {
      console.log("inside the try");
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    });
    console.log("what is response", response);
    if (response.status !== 200){
      console.log("something went wrong");
      //set an error banner here
    } else {
      resetForm();
      console.log("form submitted successfully !!!")
      //set a success banner here
    }
    //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);

    }
  }

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setSubject("");
    setMessage("");
}
    return (
      <div className="">
          <Navbar />
        
        <main className="overflow-hidden bg-black">
          {/* Header */}
          <div className="bg-warm-gray-50">
            <div className="py-12 bg-black">
              <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Get in touch
                </h1>
                <p className=" mt-6 text-xl text-white max-w-3xl">
                  Please reach out to me with any questions, comments, or opportunities here. In 2022 I am especially interested in the following:
                  </p>
                  {/* <p className="dark:text-gray-200 mt-6 text-xl text-warm-gray-500 max-w-3xl"> 
                  In 2022 I am especially interested in the following:
                  </p> */}
                 <ul className="text-gray-200 mt-6 text-xl max-w-3xl">
                     <div className="flex flex-row"> 
                     <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
                     <li className="pl-2"> Speaking at conferences </li>
                     </div>
                     <div className="flex flex-row"> 
                     <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
                     <li className="pl-2">Contributing to educational projects</li> 
                     </div>
                     <div className="flex flex-row"> 
                     <SparklesIcon className="h-5 w-5 text-indigo-400 mt-1"></SparklesIcon>
                     <li className="pl-2">Collaborating to create content </li>
                     </div>
                 </ul>
                  
                
              </div>
            </div>
          </div>
  
          {/* Contact section */}
          <section className="relative bg-black" aria-labelledby="contact-heading">
            <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
            {/* Decorative dot pattern */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <svg
                className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-black border-2 border-gray-400 shadow-xl">
                <h2 id="contact-heading" className="sr-only">
                  Contact us
                </h2>
  
                <div className=" grid grid-cols-1 lg:grid-cols-3">
                  {/* Contact information */}
                  <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500  via-purple-500 to-pink-500 sm:px-10 xl:p-12">
                    {/* Decorative angle backgrounds */}
                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={343}
                        height={388}
                        viewBox="0 0 343 388"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                          fill="url(#linear1)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear1"
                            x1="254.553"
                            y1="107.554"
                            x2="961.66"
                            y2="814.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={359}
                        height={339}
                        viewBox="0 0 359 339"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                          fill="url(#linear2)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear2"
                            x1="192.553"
                            y1="28.553"
                            x2="899.66"
                            y2="735.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full"
                        width={160}
                        height={678}
                        viewBox="0 0 160 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                          fill="url(#linear3)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear3"
                            x1="192.553"
                            y1="325.553"
                            x2="899.66"
                            y2="1032.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white pb-2">I will do my best to get back to you within a reasonable time. Meanwhile, connect with me on the interwebs:</h3>
                    <div className="flex flex-row space-x-4">
                    <div>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                url="https://twitter.com/camiinthisthang"
                bgColor="#7f7f7f"
                fgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </div>
            <div>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                url="https://www.tiktok.com/@camiinthisthang?"
                bgColor="#7f7f7f"
                fgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </div>
            <div>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                url="https://www.youtube.com/channel/UCyEnr-lcCUavJzh0uodvG3w"
                bgColor="#7f7f7f"
                fgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </div>
                    </div>
                  </div>
  
                  {/* Contact form */}
                  <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 ">
                    <h3 className="text-lg font-medium text-gray-400">Send me a message</h3>
                    <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-400">
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            onChange={(e) => setFirstName(e.target.value)} 
                            value={firstName}
                            className="bg-zinc-500 py-3 px-4 block w-full shadow-sm text-gray-400-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            className="py-3 px-4 block w-full shadow-sm text-gray-400-900 focus:ring-indigo-400 border-indigo-400 border-warm-gray-300 rounded-md bg-zinc-500"
                          />
                        </div>
                      </div>
                      {/* <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="py-3 px-4 block w-full shadow-sm text-gray-400-900 focus:ring-indigo-400 border-indigo-400 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div> */}
                      <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
                          Subject
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            onChange={(e) => setSubject(e.target.value)} value={subject}
                            className="bg-zinc-500 py-3 px-4 block w-full shadow-sm text-gray-400 focus:ring-indigo-400 border-indigo-400 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                            Message
                          </label>
                          <span id="message-max" className="text-sm text-warm-gray-500">
                            Max. 500 characters
                          </span>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            onChange={(e) => setMessage(e.target.value)} 
                            value={message}
                            className="bg-zinc-500 py-3 px-4 block w-full shadow-sm text-gray-400 focus:ring-indigo-400 border-indigo-400 border border-warm-gray-300 rounded-md"
                            aria-describedby="message-max"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          // onClick={() => handleCheckout}
                          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:w-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
          </section>
        </main>
      </div>
    )
  }