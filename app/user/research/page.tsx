"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

// --- ICONS for the theme toggle button ---
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
// --- END ICONS ---

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description:
      "A comprehensive task management application powered by artificial intelligence to optimize productivity and workflow automation.",
    status: "completed",
    thumbnail: "/modern-task-management-app-interface.jpg",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting platform built on blockchain technology ensuring immutable and verifiable election results.",
    status: "completed",
    thumbnail: "/blockchain-voting-interface-dashboard.jpg",
    category: "Blockchain",
  },
  {
    id: 3,
    title: "React Native Fitness App",
    description:
      "Cross-platform mobile fitness application with workout tracking, nutrition monitoring, and social features.",
    status: "completed",
    thumbnail: "/mobile-fitness-app-workout-interface.jpg",
    category: "Mobile Apps",
  },
  {
    id: 4,
    title: "Machine Learning Dashboard",
    description:
      "Interactive analytics dashboard for visualizing machine learning model performance and data insights.",
    status: "completed",
    thumbnail: "/machine-learning-analytics-dashboard.jpg",
    category: "Data Science",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI, payment integration, and inventory management system.",
    status: "completed",
    thumbnail: "/modern-ecommerce-shopping-interface.jpg",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Web3 DeFi Protocol",
    description:
      "Decentralized finance protocol enabling yield farming, liquidity provision, and automated market making.",
    status: "completed",
    thumbnail: "/defi-protocol-trading-interface.jpg",
    category: "Web3",
  },
]

const filterCategories = [
  "All",
  "AI/ML",
  "Full Stack",
  "Blockchain",
  "AI Agents",
  "Mobile Apps",
  "Data Science",
  "Web3",
]

const ChangingText = () => {
  const words = ["Our Clubs", "Your Community", "New Adventures", "Great Friends", "Amazing Experiences"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {words[currentIndex]}
    </motion.span>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [theme, setTheme] = useState("light")

  // Effect to handle theme initialization and updates
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-[#FFFBF4] dark:bg-gray-900 transition-colors duration-300">
      {/* --- THEME TOGGLE BUTTON --- */}
      
      {/* --- END THEME TOGGLE BUTTON --- */}

      <motion.section
        className="w-full py-20 px-6 bg-[#4A4A4A] dark:bg-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore <ChangingText /> Directory
          </motion.h1>
          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover, connect, and grow with the vibrant clubs at our university.
            <br />
            Your next adventure starts here.
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="flex items-center px-6 py-4 rounded-full bg-white dark:bg-gray-700"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                placeholder="Search clubs by keyword, topic, or author..."
                className="flex-1 bg-transparent outline-none text-base text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.nav
        className="w-full py-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto ">
          <motion.div
            className="flex items-center justify-center flex-wrap gap-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-80 ${
                  activeFilter === category
                    ? "bg-[#FFC107] text-[#242424]"
                    : "bg-[#F0F0F0] text-[#6B7280] dark:bg-gray-700 dark:text-gray-300"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      <motion.main
        className="w-full py-12 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="rounded-lg overflow-hidden border bg-[#FDFDFD] border-[#E0E0E0] dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-yellow-500/10 transition-shadow cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="p-5">
                    <motion.h2
                      className="text-xl font-bold mb-3 text-[#242424] dark:text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      className="text-sm mb-4 leading-relaxed text-[#6B7280] dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <div className="flex items-center justify-end">
                      <motion.button
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-[#FFC107] text-[#242424] hover:opacity-80"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        View
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">No projects found for "{activeFilter}"</p>
              <motion.button
                onClick={() => setActiveFilter("All")}
                className="px-6 py-2 rounded-lg text-sm font-medium bg-[#FFC107] text-[#242424]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.main>
    </div>
  )
}