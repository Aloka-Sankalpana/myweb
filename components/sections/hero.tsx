"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center 
                 text-center pt-24 pb-24 
                 bg-gradient-to-br from-[#050A4D] via-[#210873] to-[#6C0391] 
                 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-4 space-y-6"
      >
      

        {/* Intro Text */}
        <motion.div variants={itemVariants}>
          <p className="text-[#B5A3FF] font-poppins font-semibold text-lg">Welcome to my portfolio</p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-poppins font-bold leading-tight text-white"
        >
          Hi, I'm <span className="text-[#FFD700]">Aloka Sankalpana</span>
        </motion.h1>

        {/* 🖋 Typing Animation */}
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              "Full-Stack Software Developer", 2000,
              "Mobile App Developer", 2000,
              "IoT Enthusiast", 2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-poppins font-semibold text-[#CFCFFF] mt-2"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          I’m a passionate software developer specialized in building high-quality web and mobile
          applications. Skilled in Java, Spring Boot, PHP, React, Next.js, Android, React Native, C++,
          and IoT — I love transforming ideas into efficient and scalable solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#FFD700] text-[#050A4D] font-poppins font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-poppins font-semibold rounded-lg hover:bg-[#FFD700]/10 transition-colors"
          >
            Get In Touch
          </a>
            <a
    href="https://drive.google.com/file/d/1S8F_4ueWlnn5B0XIlcQhJqogTE99xudk/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 bg-blue-600 text-white font-poppins font-semibold rounded-lg hover:bg-blue-700 transition-colors"
  >
    Download CV
  </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
