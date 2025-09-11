'use client'; // Framer Motion components must be used in a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion } from 'framer-motion';

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ FIXED
    },
  },
};

function Hero() {
  return (
    <div className="container mx-auto grid min-h-[calc(100vh-80px)] items-center px-6 lg:grid-cols-2 gap-16 lg:gap-8">
      {/* Left Side - Text Content */}
      <motion.div
        className="flex flex-col gap-8 text-center lg:text-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-gray-900"
          variants={fadeInUp}
        >
          Unlock Your Potential. <br />
          Showcase Every Success. <br />
          Build Your Verified Future.
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
          variants={fadeInUp}
        >
          Parth empowers university students to track and verify academic and extracurricular achievements, creating a comprehensive digital portfolio for internships, jobs, and accreditations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          variants={fadeInUp}
        >
          <Link
            href="#"
            className="px-8 py-4 text-base font-bold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-transform transform hover:scale-105"
            aria-label="Create your digital portfolio with Parth"
          >
            Create Your Portfolio
          </Link>
          <Link
            href="#"
            className="px-8 py-4 text-base font-bold rounded-full bg-gray-200/60 text-gray-700 hover:bg-gray-300/60 transition-transform transform hover:scale-105"
            aria-label="Request a demo of Parth"
          >
            Request a Demo
          </Link>
        </motion.div>

        {/* User Avatars */}
        <motion.div
          className="flex items-center justify-center lg:justify-start gap-4 mt-4"
          variants={fadeInUp}
        >
          <div className="flex -space-x-2">
            <Image alt="Student 1" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://i.pravatar.cc/40?img=1" width={40} height={40} />
            <Image alt="Student 2" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://i.pravatar.cc/40?img=2" width={40} height={40} />
            <Image alt="Student 3" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://i.pravatar.cc/40?img=3" width={40} height={40} />
          </div>
          <p className="text-sm text-gray-500">Trusted by students from 100+ universities.</p>
        </motion.div>
      </motion.div>

      {/* Right Side - Floating Cards */}
      <div className="relative hidden lg:block h-full">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative w-full h-full">
          
          {/* Certificate Card */}
          <motion.div
            className="absolute top-[10%] left-[15%] w-60 -rotate-12 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <p className="font-semibold text-sm text-gray-800">Coursera Certificate</p>
            <p className="text-xs text-gray-500">Machine Learning Specialization</p>
            <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full">
              <div className="h-1.5 bg-[#f9a806] rounded-full" style={{ width: '100%' }}></div>
            </div>
          </motion.div>

          {/* Hackathon Card */}
          <motion.div
            className="absolute top-[25%] right-[5%] w-56 rotate-6 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <p className="font-bold text-yellow-500 text-lg">Hackathon Winner</p>
            <p className="text-xs text-gray-500">InnovateX 2023 - 1st Place</p>
            <p className="text-green-500 text-xs mt-2 font-semibold">Verified!</p>
          </motion.div>

          {/* CGPA Graph */}
          <motion.div
            className="absolute bottom-[30%] left-[5%] w-48 rotate-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <p className="font-semibold text-sm text-gray-800">CGPA: 3.8/4.0</p>
            <div className="w-full h-16 mt-2">
              <svg height="100%" viewBox="0 0 100 50" width="100%">
                <path d="M 0 40 C 20 10, 40 10, 60 30 S 80 45, 100 25" fill="none" stroke="#f9a806" strokeWidth="3"></path>
              </svg>
            </div>
          </motion.div>

          {/* Internship Card */}
          <motion.div
            className="absolute bottom-[15%] right-[20%] w-64 -rotate-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          >
            <p className="font-semibold text-sm text-gray-800">New Internship Verified!</p>
            <p className="text-xs text-gray-500">Software Engineer Intern at TechCorp</p>
            <Image alt="TechCorp Logo" className="h-6 w-6 mt-2 rounded-full" src="https://i.pravatar.cc/24?img=4" width={24} height={24} />
          </motion.div>

          {/* Club Activity */}
          <motion.div
            className="absolute top-[55%] left-[30%] w-52 rotate-8 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg"
            variants={fadeInUp}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <p className="font-semibold text-sm text-gray-800">Club Activity</p>
            <p className="text-xs text-gray-500">President, AI & Robotics Club</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
              <p className="text-xs font-semibold text-green-500">Active</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
