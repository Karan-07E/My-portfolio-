"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props{
    src: string;
    width: number;
    height: number;
    index: number;
}
const SkillDataProvider = ( {src, width, height, index}: Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const Imagevariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationdelay = 0.3;
  return (
    <motion.div
    ref ={ref}
    initial = "hidden"
    variants={Imagevariants}
    animate = {inView ? "visible" : "hidden"}
    custom = {index}
    transition={{delay : index * animationdelay}}
    >
        <Image 
         src={src}
         width = {width}
         height = {height}
         alt = "skill image"
        />

    </motion.div>
  )
}

export default SkillDataProvider