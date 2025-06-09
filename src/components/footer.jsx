"use client";

import { motion } from "framer-motion";
import { EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from "./icons";
import Layout from "./layout";
import React from "react";


const Footer = () => {
    return (
        <footer className="h-24 w-full flex-col bg-white mt-4">
            <hr className="border-t border-black w-full max-w-[2170px] mx-auto h-[1px]" />
            <Layout className="h-full">
                <div className="h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-md">
                    {/* LOCATION */}
                    <span className="hidden lg:block md:text-sm uppercase">Austin, Texas</span>
                    {/* COPYRIGHT */}
                    <span className="text-xs text-gray-500 uppercase">&copy; {new Date().getFullYear()} Michael Obi</span>
                    {/* SOCIAL LINKS */}
                    <div className="flex gap-6 lg:gap-8">
                        {/* LINKEDIN */}
                        <motion.a href="http://www.linkedin.com/in/michael-u-obi" target={"_blank"} className="w-5 h-5 lg:w-6 lg:h-6" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                            <LinkedinIcon />
                        </motion.a>
                        {/* GITHUB */}
                        <motion.a href="https://github.com/theMichaelObi" target={"_blank"} className="w-5 h-5 lg:w-6 lg:h-6" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                            <GithubIcon />
                        </motion.a>
                        {/* EMAIL */}
                        <motion.a href="mailto:michael.u.obi1@gmail.com" className="w-5 h-5 lg:w-6 lg:h-6" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                            <EmailIcon />
                        </motion.a>
                    </div>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;