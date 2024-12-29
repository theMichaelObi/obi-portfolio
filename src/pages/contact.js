"use client";

import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import React from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = "Let's Connect";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY })
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <main className="min-h-screen w-full">
        <Layout className="h-[calc(100vh-6rem)]">
          <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* TEXT CONTAINER */}
            <div className="h-full lg:w-1/2 flex items-center justify-center text-4xl lg:text-6xl">
              <div>
                {text.split("").map((letter, index) => (
                  <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>{letter}</motion.span>
                ))}
              </div>
            </div>
            {/* FORM CONTAINER */}
            <form onSubmit={sendEmail} ref={form} className="h-full lg:w-1/2 text-md lg:text-xl flex flex-col gap-6 justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
              {/* NAME */}
              <span>Name</span>
              <input type="text" required minLength={3} maxLength={100} className="w-full sm:w-auto bg-transparent border-b-2 border-b-black outline-none" name="user_name" />
              {/* EMAIL */}
              <span>Email Address</span>
              <input type="email" required minLength={5} maxLength={150} className="w-full sm:w-auto bg-transparent border-b-2 border-b-black outline-none" name="user_email" />
              {/* MESSAGE */}
              <textarea rows={6} required minLength={10} maxLength={500} placeholder="Enter Message" className="w-full sm:w-auto bg-gray-50 border-b-2 border-b-black outline-none resize-y" name="user_message" />
              <button className="bg-black text-white p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg w-fit ring-1 ring-black hover:bg-white hover:text-black transition duration-200">SEND</button>
              {success && <span className="text-green-600 font-semibold">Your message has been sent. Thank you!</span>}
              {error && <span className="text-red-600 font-semibold">Something went wrong! Please try again.</span>}
            </form>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default ContactPage;