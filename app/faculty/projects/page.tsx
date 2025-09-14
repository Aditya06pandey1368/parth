"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ExternalLink, Github, Calendar, User, Star, Eye } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: string
  title: string
  description: string
  category: string
  author: string
  branch: string
  year: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  submissionDate: string
  views: number
  stars: number
  status: "pending" | "approved" | "featured"
  image?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Smart Campus Navigation System",
    description:
      "An AI-powered mobile app that helps students navigate the campus using AR technology and real-time location tracking.",
    category: "Mobile Development",
    author: "Rahul Sharma",
    branch: "Computer Science",
    year: "Final Year",
    technologies: ["React Native", "TensorFlow", "ARCore", "Firebase"],
    githubUrl: "https://github.com/rahul/campus-nav",
    liveUrl: "https://campus-nav.vercel.app",
    submissionDate: "2024-02-15",
    views: 245,
    stars: 18,
    status: "featured",
    image: "/mobile-app-campus-navigation.jpg",
  },
  {
    id: "2",
    title: "Automated Attendance System",
    description:
      "Face recognition-based attendance system that eliminates manual attendance marking and provides real-time analytics.",
    category: "Machine Learning",
    author: "Priya Patel",
    branch: "Information Technology",
    year: "Third Year",
    technologies: ["Python", "OpenCV", "Flask", "MySQL"],
    githubUrl: "https://github.com/priya/attendance-system",
    submissionDate: "2024-02-20",
    views: 189,
    stars: 12,
    status: "approved",
    image: "/face-recognition-attendance-system.jpg",
  },
  {
    id: "3",
    title: "E-Learning Platform",
    description:
      "Comprehensive online learning platform with video streaming, interactive quizzes, and progress tracking for students.",
    category: "Web Development",
    author: "Amit Kumar",
    branch: "Computer Science",
    year: "Final Year",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
    githubUrl: "https://github.com/amit/elearning",
    liveUrl: "https://elearning-platform.vercel.app",
    submissionDate: "2024-02-25",
    views: 156,
    stars: 9,
    status: "approved",
    image: "/online-learning-platform.png",
  },
  {
    id: "4",
    title: "IoT-Based Smart Library",
    description:
      "Internet of Things solution for library management with RFID book tracking and automated inventory management.",
    category: "IoT",
    author: "Sneha Reddy",
    branch: "Electronics",
    year: "Final Year",
    technologies: ["Arduino", "RFID", "Node.js", "React"],
    githubUrl: "https://github.com/sneha/smart-library",
    submissionDate: "2024-03-01",
    views: 134,
    stars: 7,
    status: "pending",
    image: "/smart-library-iot-system.jpg",
  },
  {
    id: "5",
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting system using blockchain technology to ensure election integrity and voter privacy.",
    category: "Blockchain",
    author: "Vikash Singh",
    branch: "Computer Science",
    year: "Final Year",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    githubUrl: "https://github.com/vikash/blockchain-voting",
    submissionDate: "2024-03-05",
    views: 98,
    stars: 5,
    status: "pending",
    image: "/blockchain-voting-system-interface.jpg",
  },
  {
    id: "6",
    title: "Mental Health Chatbot",
    description:
      "AI-powered chatbot providing mental health support and resources for students with natural language processing.",
    category: "AI/ML",
    author: "Ananya Gupta",
    branch: "Information Technology",
    year: "Third Year",
    technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
    githubUrl: "https://github.com/ananya/mental-health-bot",
    submissionDate: "2024-03-10",
    views: 87,
    stars: 4,
    status: "approved",
    image: "/mental-health-chatbot-interface.jpg",
  },
]

const categoryColors = {
  "Mobile Development": "bg-blue-100 text-blue-800",
  "Machine Learning": "bg-purple-100 text-purple-800",
  "Web Development": "bg-green-100 text-green-800",
  IoT: "bg-orange-100 text-orange-800",
  Blockchain: "bg-indigo-100 text-indigo-800",
  "AI/ML": "bg-pink-100 text-pink-800",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [projectList, setProjectList] = useState(projects)

  const filteredProjects = projectList.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleApprove = (projectId: string) => {
    setProjectList((prev) =>
      prev.map((project) => (project.id === projectId ? { ...project, status: "approved" as const } : project)),
    )
  }

  const handleReject = (projectId: string) => {
    setProjectList((prev) => prev.filter((project) => project.id !== projectId))
  }

  const handleFeature = (projectId: string) => {
    setProjectList((prev) =>
      prev.map((project) => (project.id === projectId ? { ...project, status: "featured" as const } : project)),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "featured":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Featured</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Pending</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        className="bg-white border-b border-gray-200 px-6 py-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Student Projects
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover innovative projects created by our talented students
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            className="flex flex-col lg:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search projects by title, author, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Categories</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Web Development">Web Development</option>
                <option value="IoT">IoT</option>
                <option value="Blockchain">Blockchain</option>
                <option value="AI/ML">AI/ML</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Status</option>
                <option value="featured">Featured</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-between items-center mb-6" variants={itemVariants}>
          <p className="text-sm text-gray-600">
            Showing {filteredProjects.length} of {projectList.length} projects
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" variants={containerVariants}>
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} whileHover="hover" custom={index}>
              <motion.div variants={cardHoverVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {getStatusBadge(project.status)}
                    </motion.div>
                  </div>

                  <CardHeader className="pb-3">
                    <motion.div
                      className="flex justify-between items-start mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                        {project.category}
                      </Badge>
                    </motion.div>
                    <motion.p
                      className="text-sm text-gray-600 line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Author Info */}
                    <motion.div
                      className="flex items-center gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <User className="h-4 w-4" />
                      <span className="px-2 py-1 border-2 border-yellow-400 rounded-md bg-yellow-50 text-gray-800 font-medium text-xs">
                        {project.author}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="px-2 py-1 border-2 border-yellow-400 rounded-md bg-yellow-50 text-gray-800 font-medium text-xs">
                        {project.branch}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="px-2 py-1 border-2 border-yellow-400 rounded-md bg-yellow-50 text-gray-800 font-medium text-xs">
                        {project.year}
                      </span>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      className="flex items-center gap-4 text-sm text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(project.submissionDate).toLocaleDateString()}</span>
                      </motion.div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      {/* Links */}
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.liveUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>

                      {/* Admin Actions */}
                      {project.status === "pending" && (
                        <div className="flex gap-2">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button
                              onClick={() => handleApprove(project.id)}
                              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                              size="sm"
                            >
                              Approve
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button
                              onClick={() => handleReject(project.id)}
                              variant="outline"
                              className="w-full border-red-300 text-red-600 hover:bg-red-50"
                              size="sm"
                            >
                              Reject
                            </Button>
                          </motion.div>
                        </div>
                      )}

                      {project.status === "approved" && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => handleFeature(project.id)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                            size="sm"
                          >
                            Feature Project
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-gray-400 mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 },
              }}
            >
              <Search className="h-12 w-12 mx-auto" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
