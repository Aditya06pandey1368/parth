"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, User, Download, Eye, CheckCircle, XCircle, Clock, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { easeInOut, easeOut, motion } from "framer-motion"

const researchPapers = [
  {
    id: "RP001",
    title: "Machine Learning Approaches for Predictive Analytics in Healthcare Systems",
    authors: ["Dr. Priya Sharma", "Rahul Kumar", "Anita Singh"],
    department: "Computer Science",
    category: "Machine Learning",
    status: "Published",
    journal: "IEEE Transactions on Biomedical Engineering",
    publishedDate: "2024-02-15",
    citations: 23,
    downloads: 156,
    rating: 4.8,
    abstract:
      "This paper presents novel machine learning approaches for predictive analytics in healthcare systems, focusing on early disease detection and treatment optimization.",
    keywords: ["Machine Learning", "Healthcare", "Predictive Analytics", "AI"],
    doi: "10.1109/TBME.2024.1234567",
  },
  {
    id: "RP002",
    title: "Sustainable Energy Management in Smart Cities Using IoT and Blockchain",
    authors: ["Prof. Michael Chen", "Sneha Patel", "Arjun Mehta"],
    department: "Electronics & Communication",
    category: "IoT & Blockchain",
    status: "Under Review",
    journal: "Nature Energy",
    submittedDate: "2024-01-20",
    citations: 0,
    downloads: 89,
    rating: 4.6,
    abstract:
      "An innovative approach to energy management in smart cities leveraging IoT sensors and blockchain technology for transparent and efficient energy distribution.",
    keywords: ["IoT", "Blockchain", "Smart Cities", "Energy Management"],
    doi: "Pending",
  },
  {
    id: "RP003",
    title: "Advanced Materials for Next-Generation Solar Cells: A Comprehensive Study",
    authors: ["Dr. Sarah Johnson", "Vikram Singh", "Meera Gupta"],
    department: "Materials Science",
    category: "Renewable Energy",
    status: "Published",
    journal: "Advanced Materials",
    publishedDate: "2024-01-10",
    citations: 45,
    downloads: 234,
    rating: 4.9,
    abstract:
      "This research explores advanced materials and their applications in developing high-efficiency solar cells for sustainable energy solutions.",
    keywords: ["Solar Cells", "Advanced Materials", "Renewable Energy", "Sustainability"],
    doi: "10.1002/adma.202401234",
  },
  {
    id: "RP004",
    title: "Quantum Computing Applications in Cryptography and Security",
    authors: ["Prof. David Wilson", "Ravi Kumar", "Pooja Sharma"],
    department: "Computer Science",
    category: "Quantum Computing",
    status: "Draft",
    journal: "TBD",
    submittedDate: null,
    citations: 0,
    downloads: 12,
    rating: 4.5,
    abstract:
      "Exploring the potential applications of quantum computing in modern cryptography and cybersecurity frameworks.",
    keywords: ["Quantum Computing", "Cryptography", "Security", "Algorithms"],
    doi: "TBD",
  },
  {
    id: "RP005",
    title: "Artificial Intelligence in Autonomous Vehicle Navigation Systems",
    authors: ["Dr. Amit Patel", "Kavya Reddy", "Suresh Kumar"],
    department: "Mechanical Engineering",
    category: "Artificial Intelligence",
    status: "Published",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    publishedDate: "2023-12-20",
    citations: 67,
    downloads: 298,
    rating: 4.7,
    abstract:
      "This paper presents AI-driven navigation systems for autonomous vehicles, focusing on real-time decision making and safety optimization.",
    keywords: ["AI", "Autonomous Vehicles", "Navigation", "Transportation"],
    doi: "10.1109/TITS.2023.9876543",
  },
  {
    id: "RP006",
    title: "Biomedical Signal Processing Using Deep Learning Techniques",
    authors: ["Dr. Neha Agarwal", "Rohit Sharma", "Priyanka Jain"],
    department: "Biomedical Engineering",
    category: "Deep Learning",
    status: "Under Review",
    journal: "Journal of Biomedical Signal Processing",
    submittedDate: "2024-02-01",
    citations: 8,
    downloads: 76,
    rating: 4.4,
    abstract:
      "Advanced deep learning techniques for processing and analyzing biomedical signals with applications in medical diagnosis.",
    keywords: ["Deep Learning", "Biomedical Signals", "Medical Diagnosis", "Signal Processing"],
    doi: "Pending",
  },
]

const categories = [
  "All Categories",
  "Machine Learning",
  "IoT & Blockchain",
  "Renewable Energy",
  "Quantum Computing",
  "Artificial Intelligence",
  "Deep Learning",
]
const statuses = ["All Status", "Published", "Under Review", "Draft"]
const departments = [
  "All Departments",
  "Computer Science",
  "Electronics & Communication",
  "Materials Science",
  "Mechanical Engineering",
  "Biomedical Engineering",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      ease: easeOut,
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
}

const statsCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease:easeOut,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
}

export default function ResearchPapersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")

  const filteredPapers = researchPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      paper.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Categories" || paper.category === selectedCategory
    const matchesStatus = selectedStatus === "All Status" || paper.status === selectedStatus
    const matchesDepartment = selectedDepartment === "All Departments" || paper.department === selectedDepartment

    return matchesSearch && matchesCategory && matchesStatus && matchesDepartment
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Published":
        return <CheckCircle className="h-4 w-4" />
      case "Under Review":
        return <Clock className="h-4 w-4" />
      case "Draft":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      className="p-4 lg:p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div>
          <motion.h1
            className="text-2xl lg:text-3xl font-bold text-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Research Papers
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover and manage academic research publications
          </motion.p>
        </div>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            {filteredPapers.length} Papers
          </Badge>
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { title: "Total Papers", value: researchPapers.length, icon: BookOpen, color: "text-yellow-600" },
          {
            title: "Published",
            value: researchPapers.filter((p) => p.status === "Published").length,
            icon: CheckCircle,
            color: "text-green-600",
          },
          {
            title: "Total Citations",
            value: researchPapers.reduce((sum, p) => sum + p.citations, 0),
            icon: Star,
            color: "text-blue-600",
          },
          {
            title: "Total Downloads",
            value: researchPapers.reduce((sum, p) => sum + p.downloads, 0),
            icon: Download,
            color: "text-purple-600",
          },
        ].map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <motion.div key={index} variants={statsCardVariants} whileHover="hover">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card>
          <CardContent className="p-4">
            <motion.div
              className="flex flex-col lg:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search papers, authors, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Papers Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPapers.map((paper, index) => (
          <motion.div key={paper.id} variants={itemVariants} whileHover="hover" custom={index}>
            <motion.div variants={cardHoverVariants}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <motion.div
                    className="flex items-start justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-1">
                      <motion.div
                        className="flex items-center gap-2 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Badge variant="outline" className="text-xs font-mono">
                          {paper.id}
                        </Badge>
                        <Badge className={getStatusColor(paper.status)}>
                          {getStatusIcon(paper.status)}
                          <span className="ml-1">{paper.status}</span>
                        </Badge>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <CardTitle className="text-lg leading-tight mb-2">{paper.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{paper.authors.join(", ")}</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.p
                    className="text-sm text-muted-foreground line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {paper.abstract}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {paper.keywords.map((keyword, keywordIndex) => (
                      <motion.div
                        key={keywordIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + keywordIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 gap-4 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div>
                      <p className="text-muted-foreground">Department</p>
                      <p className="font-medium">{paper.department}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Category</p>
                      <p className="font-medium">{paper.category}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Journal</p>
                      <p className="font-medium">{paper.journal}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        {paper.status === "Published" ? "Published" : "Submitted"}
                      </p>
                      <p className="font-medium">{paper.publishedDate || paper.submittedDate || "TBD"}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between pt-2 border-t"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Star className="h-4 w-4" />
                        <span>{paper.citations} citations</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Download className="h-4 w-4" />
                        <span>{paper.downloads} downloads</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <span>★ {paper.rating}</span>
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900" size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {filteredPapers.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-8 text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 },
                }}
              >
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">No research papers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters to find more papers.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  )
}
