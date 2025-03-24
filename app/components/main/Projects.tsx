"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from bg-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
             src = "/lms.png"
             title="Library Management System Using C++"
             description="A simple C++ project which uses advanced concepts of C++ for creating an LMS"
            />
            <ProjectCard
             src = "/leetcode.png"
             title="Competitive Programming"
             description="Competitive programming is my Hobby, where I enjoy solving algorithmic problems and improving my coding skills."
            />
            <ProjectCard
             src = "/SpaceWebsite.png"
             title="Animated Website using React and Next.js"
             description="Using React and modern Next.js tools to create Animations and Understanding motion elements"
            />
            <ProjectCard
             src = "/rps.png"
             title="A Simple Rock-Paper-Scissor Game"
             description="A simple game using some Data Structures"
            />
        </div>
    </div>
  )
}

export default Projects