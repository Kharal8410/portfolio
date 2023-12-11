import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import SlideUp from "@/components/SlideUp";

const Contact = () => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="my-12 p-4 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl mb-6 bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="w-full md:w-1/3 md:mr-8 shadow-lg p-6 rounded-lg">
            <h1 className="text-center text-2xl font-bold mb-6">
              Get in touch
            </h1>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 bg-teal-500 p-6 rounded-lg shadow-lg mt-8 md:mt-0 dark:text-stone-300  dark:shadow-stone-500">
            <div className="flex items-center mb-4 hover:-translate-y-1 transition-transform cursor-pointer">
              <IoLocation size={30} className="mr-4" />
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 font-bold text-lg text-stone-900 dark:text-white"
                >
                  Address
                </label>
                <p className="text-sm">Gaindakot-2, Nawalpur, Nepal</p>
              </div>
            </div>
            <div className="flex items-center mb-4 hover:-translate-y-1 transition-transform cursor-pointer">
              <MdPhoneInTalk size={30} className="mr-4" />
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-bold text-lg text-stone-900 dark:text-white"
                >
                  Phone
                </label>
                <p className="text-sm">+9779861029527</p>
              </div>
            </div>
            <div className="flex items-center mb-4 hover:-translate-y-1 transition-transform cursor-pointer">
              <SiMinutemailer size={30} className="mr-4" />
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-bold text-lg text-stone-900 dark:text-white"
                >
                  Email
                </label>
                <p className="text-sm">kharalmukunda12109@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4 hover:-translate-y-1 transition-transform cursor-pointer">
              <LiaLinkedin size={30} className="mr-4" />
              <div>
                <label
                  htmlFor="linkedin"
                  className="block mb-2 font-bold text-lg text-stone-900 dark:text-white"
                >
                  LinkedIn
                </label>
                <p className="text-sm">Mukunda Kharal</p>
              </div>
            </div>

            <div className="flex items-center hover:-translate-y-1 transition-transform cursor-pointer">
              <FaGithub size={30} className="mr-4" />
              <div>
                <label
                  htmlFor="github"
                  className="block mb-2 font-bold text-lg text-stone-900 dark:text-white"
                >
                  Github
                </label>
                <p className="text-sm">Kharal8410</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default Contact;
