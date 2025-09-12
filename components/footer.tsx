"use client";
import Link from "next/link";
import React from "react";
import { motion,easeOut } from "framer-motion";

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
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="h-8 w-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 
                    9.75 9.75 9.75 9.75-4.365 
                    9.75-9.75S17.385 2.25 12 
                    2.25zM12.75 6a.75.75 0 
                    00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 
                    0 000-1.5h-3.75V6z"
                  fillRule="evenodd"
                ></path>
                <path d="M16.5 12.013a4.491 4.491 0 
                    01-4.238 4.484.75.75 
                    0 00.976 1.458 6 6 0 
                    005.65-5.942.75.75 
                    0 00-1.49-.114l-.001-.001-.002-.005a4.5 
                    4.5 0 01-1.238 2.231A4.491 
                    4.491 0 0116.5 12.013z"></path>
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Achievo
              </h2>
            </Link>
            <p className="mt-4 text-sm">
              Verified portfolios for the future of work.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp}>
            <h3 className="text-gray-900 dark:text-white font-semibold tracking-wider uppercase">
              Product
            </h3>
            <div className="mt-4 space-y-3">
              <Link
                href="/features"
                className="block hover:text-yellow-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/students"
                className="block hover:text-yellow-500 transition-colors"
              >
                For Students
              </Link>
              <Link
                href="/universities"
                className="block hover:text-yellow-500 transition-colors"
              >
                For Universities
              </Link>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h3 className="text-gray-900 dark:text-white font-semibold tracking-wider uppercase">
              Company
            </h3>
            <div className="mt-4 space-y-3">
              <Link
                href="/about"
                className="block hover:text-yellow-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="block hover:text-yellow-500 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/press"
                className="block hover:text-yellow-500 transition-colors"
              >
                Press
              </Link>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp}>
            <h3 className="text-gray-900 dark:text-white font-semibold tracking-wider uppercase">
              Resources
            </h3>
            <div className="mt-4 space-y-3">
              <Link
                href="/blog"
                className="block hover:text-yellow-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/help"
                className="block hover:text-yellow-500 transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/contact"
                className="block hover:text-yellow-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p>© 2024 Achievo. All rights reserved.</p>
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
