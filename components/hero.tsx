"use client"

import Image from "next/image"
import Link from "next/link"
import { easeOut, easeInOut, motion } from "framer-motion"
import heroImg from "../public/heroImg.png"

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: easeInOut,
  },
}

function Hero() {
  return (
    <div className="container mx-auto grid min-h-[calc(100vh-80px)] items-center px-4 sm:px-6 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
      {/* Left Side - Text Content */}
      <motion.div
        className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight text-gray-900 text-balance"
          variants={fadeInUp}
        >
          From Milestones to Mastery – Your Verified Path Begins Here.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 text-pretty"
          variants={fadeInUp}
        >
          Parth empowers university students to track and verify their academic and extracurricular achievements,
          creating a comprehensive digital portfolio for internships, jobs, and accreditations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          variants={fadeInUp}
        >
          <Link
            href="#"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-transform transform hover:scale-105"
            aria-label="Create your digital portfolio with Parth"
          >
            Create Your Portfolio
          </Link>
          <Link
            href="#"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full bg-gray-200/60 text-gray-700 hover:bg-gray-300/60 transition-transform transform hover:scale-105"
            aria-label="Request a demo of Parth"
          >
            Request a Demo
          </Link>
        </motion.div>

        {/* User Avatars */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-2 sm:mt-4"
          variants={fadeInUp}
        >
          <div className="flex -space-x-2">
            <Image
              alt="Student 1"
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-gray-50"
              src="https://i.pravatar.cc/40?img=1"
              width={40}
              height={40}
            />
            <Image
              alt="Student 2"
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-gray-50"
              src="https://i.pravatar.cc/40?img=2"
              width={40}
              height={40}
            />
            <Image
              alt="Student 3"
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-gray-50"
              src="https://i.pravatar.cc/40?img=3"
              width={40}
              height={40}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            Trusted by students from 100+ universities.
          </p>
        </motion.div>
      </motion.div>

      {/* Right Side - Main Hero Image with Floating Cards */}
      <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-full hidden lg:block overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.div
            className="relative z-30 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            animate={floatingAnimation}
          >
            <Image
              src={heroImg}
              alt="Student and robot with educational elements"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-[15%] left-[8%] w-32 sm:w-40 lg:w-48 -rotate-12 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-lg z-10"
            variants={fadeInUp}
            animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          >
            <p className="font-semibold text-xs text-gray-800">Coursera Certificate</p>
            <p className="text-xs text-gray-500">Machine Learning</p>
            <div className="mt-1 sm:mt-2 h-1 w-full bg-gray-200 rounded-full">
              <div className="h-1 bg-[#f9a806] rounded-full" style={{ width: "100%" }}></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[20%] right-[12%] w-28 sm:w-36 lg:w-44 rotate-8 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-lg z-10"
            variants={fadeInUp}
            animate={{ y: [0, -12, 0], rotate: [8, 12, 8] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          >
            <p className="font-bold text-orange-600 text-xs sm:text-sm">Winner!</p>
            <p className="text-xs text-gray-500">InnovateX 2023</p>
            <p className="text-green-500 text-xs mt-1 font-semibold">✓ Verified</p>
          </motion.div>

          <motion.div
            className="absolute bottom-[40%] left-[12%] w-28 sm:w-32 lg:w-40 rotate-6 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-lg z-10"
            variants={fadeInUp}
            animate={{ y: [0, -8, 0], rotate: [6, 2, 6] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
          >
            <p className="font-semibold text-xs text-gray-800">CGPA: 3.8/4.0</p>
            <div className="w-full h-6 sm:h-8 mt-1">
              <svg height="100%" viewBox="0 0 100 30" width="100%">
                <path
                  d="M 0 25 C 20 5, 40 5, 60 15 S 80 25, 100 10"
                  fill="none"
                  stroke="#f9a806"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[15%] right-[8%] w-36 sm:w-44 lg:w-52 -rotate-6 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-lg z-10"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0], rotate: [-6, -2, -6] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.5, ease: "easeInOut" }}
          >
            <p className="font-semibold text-xs text-gray-800">New Internship!</p>
            <p className="text-xs text-gray-500">Software Engineer at TechCorp</p>
            <div className="flex items-center gap-1 sm:gap-2 mt-1">
              <div className="h-3 w-3 sm:h-4 sm:w-4 bg-blue-500 rounded-full"></div>
              <p className="text-xs font-semibold text-green-500">✓ Verified</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[50%] left-[15%] w-32 sm:w-36 lg:w-44 rotate-12 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-lg z-10"
            variants={fadeInUp}
            animate={{ y: [0, -10, 0], rotate: [12, 16, 12] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.8, ease: "easeInOut" }}
          >
            <p className="font-semibold text-xs text-gray-800">Club President</p>
            <p className="text-xs text-gray-500">AI & Robotics Club</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-xs font-semibold text-green-500">Active</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
