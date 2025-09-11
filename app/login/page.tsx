"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // 1. Import motion

const LoginPage: React.FC = () => {
  const [accountType, setAccountType] = useState<"student" | "faculty">(
    "student"
  );

  // 2. Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1, // Animate children one by one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120 },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* 3. Use motion.div and apply variants */}
      <motion.div
        className="w-full max-w-md p-8 space-y-6 bg-amber-50 border border-gray-200 rounded-2xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-3xl font-bold mb-2 ">
            <span className="text-black">
                Welcome to{" "}
            </span>
           
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full">
              Parth
            </span>
          </h1>
          <p className="text-gray-500">
            Your journey to career success starts here
          </p>
        </motion.div>

        {/* Top Sign In Button - removed for better flow, see below */}

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </motion.div>

        {/* Password */}
        <motion.div variants={itemVariants}>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </motion.div>

        {/* Account Type */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-500 font-medium mb-2">Account Type</p>
          <div className="flex bg-yellow-500 rounded-2xl overflow-hidden">
            <motion.button
              onClick={() => setAccountType("student")}
              className={`flex-1 py-2 font-semibold transition ${
                accountType === "student"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-yellow-700"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Student
            </motion.button>
            <motion.button
              onClick={() => setAccountType("faculty")}
              className={`flex-1 py-2 font-semibold transition ${
                accountType === "faculty"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-yellow-700"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Faculty
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Sign In */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-2xl hover:bg-yellow-600 transition"
        >
          Sign In
        </motion.button>

        {/* Terms */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 text-sm"
        >
          By signing in, you agree to our{" "}
          <a href="#" className="text-yellow-600 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-yellow-600 font-medium">
            Privacy Policy
          </a>
          .
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;