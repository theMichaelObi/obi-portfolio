"use client";

import React from "react"
import { motion } from "framer-motion"

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyle = isSelected ? "bg-black text-white" : "hover:bg-gray-100"
  return (
    <motion.button className={`${buttonStyle} px-3 py-1 text-sm rounded-full border-2 border-black cursor-pointer lg:px-4 lg:py-2 lg:text-xl`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={() => onClick(name)}>
      {name}
    </motion.button>
  )
}

export default ProjectTag