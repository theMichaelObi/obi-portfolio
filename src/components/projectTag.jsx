"use client";

import React from "react"
import { motion } from "framer-motion"

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyle = isSelected ? "bg-black text-white" : "hover:bg-gray-100 transition-colors duration-200"
  return (
    <motion.button className={`${buttonStyle} px-3 py-1 text-sm rounded-full border-2 border-black cursor-pointer lg:px-4 lg:py-2 lg:text-xl`} whileTap={{ scale: 0.95 }} onClick={() => onClick(name)}>
      {name}
    </motion.button>
  )
}

export default ProjectTag