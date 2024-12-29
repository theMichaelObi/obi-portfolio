
import Link from "next/link";
import { React, useState } from "react";
import Navlink from "./navlink";
import { AnimatePresence, motion } from "framer-motion";

const menuLinks = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(123,123,123)"
        }
    };

    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(123,123,123)"
        }
    };

    const menuVariants = {
        initial: {
            y: "-100vh",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            y: "-100vh",
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <div className="h-24 sticky top-0 left-0 z-10 bg-white">
            <div className="h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-md">
                {/* LOGO */}
                <div className="lg:flex xl:w-1/2">
                    <Link href="/" className="text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center">
                        <span className="text-white">Obi</span>
                    </Link>
                </div>
                {/* LINKS */}
                <div className="hidden lg:flex gap-10 w-1/2 justify-center uppercase">
                    {menuLinks.map(menuLink => (
                        <Navlink menuLink={menuLink} key={menuLink.title} />
                    ))}
                </div>
                {/* RESPONSIVE MENU*/}
                <div className="lg:hidden">
                    {/* MENU BUTTON */}
                    <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                        <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded-sm origin-left"></motion.div>
                        <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded-sm"></motion.div>
                        <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded-sm origin-left"></motion.div>
                    </button>
                    {/* MENU LIST */}
                    <AnimatePresence>
                    {open && (
                        <motion.div variants={menuVariants} initial="initial" animate="animate" exit="exit" className="fixed top-0 left-0 w-full h-full origin-top bg-menugray text-linkgray flex flex-col items-center justify-center gap-28 text-4xl z-40">
                            {menuLinks.map(menuLink => (
                                <motion.div className="uppercase hover:text-white transition duration-250" key={menuLink.title}>
                                    <Link href={menuLink.url}>{menuLink.title}</Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Navbar;