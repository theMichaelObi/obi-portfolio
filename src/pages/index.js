"use client";

import Link from "next/link";
import Layout from "@/components/layout";
import React from "react";


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Layout className="h-[calc(100vh-6rem)]">
          <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* IMAGE CONTAINER*/}
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
              {/* <Image src="" alt="" fill sizes="auto" className="object-contain" /> */}
            </div>
            {/* TEXT CONTAINER*/}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
              {/* TITLE */}
              <h1 className="text-4xl md:text-8xl font-bold w-full">Michael Obi</h1>
              {/* DESCRIPTION */}
              <p className="md:text-xl w-full">
                Software Developer from Austin, TX
              </p>
              {/* RESUME BUTTON */}
              <div className="flex w-full">
                <Link href="/MichaelObiResume.pdf" target={"_blank"} className="flex items-center bg-black text-white p-4 ring-1 uppercase ring-black hover:bg-white hover:text-black transition duration-200">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
