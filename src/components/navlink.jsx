"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navlink = ({menuLink, className=""}) => {
    const pathName = usePathname();
    //console.log(pathName);

    return (
        <Link className={`${className} p-1 relative group`} href={menuLink.url}>
            {menuLink.title}

            <span className={`h-[2px] inline-block bg-black absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-250
            ${pathName === menuLink.url ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    );
};

export default Navlink;