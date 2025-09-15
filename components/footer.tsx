"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import logo from "../public/logo.png"
import { motion, easeOut } from "framer-motion";
import { Button } from "./ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeOut },
  },
};

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        {/* Top Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="flex items-center gap-2 group">
              {/* On mobile only image */}
              <div className="relative">
                <Image alt="Logo" src={logo} width={60} height={60} />
                <div className="absolute inset-0 bg-[#f9a806] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
              </div>
              {/* Hide name on mobile */}
              <h2 className="hidden lg:block text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-[#f9a806]">
                Parth
              </h2>
            </Link>

            <p className="mt-4 text-sm">
              Verified portfolios for the future of work.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp}>
            <div className="mt-4 space-y-3">
              <Link
                href="/features"
                className="block hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="block hover:text-yellow-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/students"
                className="block hover:text-yellow-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/universities"
                className="block hover:text-yellow-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="mt-4 space-y-3">
              <Link
                href="/login"
                className="block hover:text-yellow-500 transition-colors"
              >
                Student Login
              </Link>
              <Link
                href="/login"
                className="block hover:text-yellow-500 transition-colors"
              >
                Faculty Login
              </Link>
              <Link
                href="/login"
                className="block hover:text-yellow-500 transition-colors"
              >
                Institue Admin Login
              </Link>

            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            
            <div className="mt-4 space-y-3">
              <p className="text-gray-700 dark:text-gray-300">College can register here</p>
              <Link href={"institute-signup"}>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Register
                </Button>
              </Link>
              
              <p className="mt-5 text-gray-700 dark:text-gray-300">NAAC & NIRF can view college details here</p>
              <Button className="w-full bg-gray-500 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-white">
                Get College Details
              </Button>
             
            </div>
          </motion.div>


          {/* Resources */}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p>© 2025 Parth. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
