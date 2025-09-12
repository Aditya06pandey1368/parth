"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accountType, setAccountType] = useState("Student")

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to{" "}
          <span className="inline-block px-3 py-1 bg-yellow-100 border-2 border-yellow-600 rounded-lg text-yellow-700 dark:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-200">
            Parth
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Your journey to career success starts here
        </p>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-gray-700 dark:text-gray-300 font-medium text-lg">
          Email
        </label>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-gray-700 dark:text-gray-300 font-medium text-lg">
          Password
        </label>
        <Input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg"
        />
      </div>

      {/* Account Type */}
      <div className="space-y-3">
        <label className="text-gray-700 dark:text-gray-300 font-medium text-lg">
          Account Type
        </label>
        <div className="bg-yellow-600 dark:bg-yellow-700 rounded-full p-1 flex">
          <button
            onClick={() => setAccountType("Student")}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-colors ${
              accountType === "Student"
                ? "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-100"
                : "bg-yellow-600 dark:bg-yellow-700 text-white"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setAccountType("Faculty")}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-colors ${
              accountType === "Faculty"
                ? "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-100"
                : "bg-yellow-600 dark:bg-yellow-700 text-white"
            }`}
          >
            Faculty
          </button>
        </div>
      </div>

      {/* Button */}
      <Button className="w-full h-12 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full dark:bg-yellow-700 dark:hover:bg-yellow-800">
        Sign In
      </Button>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        By signing in, you agree to our{" "}
        <span className="text-gray-700 dark:text-gray-200">Terms of Service</span> and{" "}
        <span className="text-yellow-600 dark:text-yellow-400 font-medium">Privacy Policy</span>.
      </div>
    </div>
  )
}
