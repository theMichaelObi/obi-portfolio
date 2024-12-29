"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {

    const pathName = usePathname();

    const pageRoutes = {
        "/": "Home",
        "/about": "About",
        "/projects": "Projects",
        "/contact": "Contact",
    }

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathName} className="w-screen h-screen">
                    <motion.div className="h-screen w-screen fixed bg-black z-40"
                        animate={{ height: "0vh" }}
                        exit={{ height: "150vh" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl md:text-8xl cursor-default z-50 w-fit h-fit"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {pageRoutes[pathName]}
                    </motion.div>
                    <motion.div className="h-screen w-screen fixed bg-black bottom-0 z-30"
                        initial={{ height: "150vh" }}
                        animate={{ height: "0vh", transition: { delay: 0.5 } }}
                    />
                    {children}
                </div>
            </AnimatePresence>
        </>
    );
};

export default TransitionProvider;