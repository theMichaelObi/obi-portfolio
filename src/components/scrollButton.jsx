import React, { useEffect, useState } from "react"
import Image from "next/image";

const ScrollButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    return (
        <>
            {
                isVisible && (
                    <Image src="/images/projects/upArrow.png" alt="" onClick={() => scrollUp()} width={40} height={40} className="fixed xl:bottom-[120px] xl:right-[100px] cursor-pointer" />
                )
            }
        </>
    )
}

export default ScrollButton