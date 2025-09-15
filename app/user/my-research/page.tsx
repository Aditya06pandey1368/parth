"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2, Plus, Search, Award, ChevronDown, Calendar, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

const researchPapers = [
  {
    id: 1,
    title: "Machine Learning Applications in Healthcare",
    description:
      "Exploring the use of ML algorithms for early disease detection and personalized treatment recommendations in clinical settings.",
    authors: ["Dr. Smith", "Dr. Johnson"],
    faculty: "Computer Science & Engineering",
    journal: "Journal of Medical AI",
    date: "2024-01-15",
    status: "published",
    citations: 45,
    image: "/research-paper-medical-ai.jpg",
  },
  {
    id: 2,
    title: "Quantum Computing and Cryptography",
    description:
      "Investigating quantum-resistant cryptographic protocols and their implementation in modern security systems.",
    authors: ["Prof. Wilson", "Dr. Brown"],
    faculty: "Mathematics & Computer Science",
    journal: "Quantum Research Quarterly",
    date: "2024-02-20",
    status: "under-review",
    citations: 12,
    image: "/quantum-computing-research.png",
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions",
    description:
      "Novel approaches to renewable energy storage and distribution using advanced materials and smart grid technologies.",
    authors: ["Dr. Green", "Prof. Solar"],
    faculty: "Environmental Engineering",
    journal: "Environmental Science Today",
    date: "2024-03-10",
    status: "published",
    citations: 78,
    image: "/sustainable-energy-research.png",
  },
  {
    id: 4,
    title: "Neural Networks in Natural Language Processing",
    description:
      "Advanced transformer architectures for multilingual text understanding and generation with improved efficiency.",
    authors: ["Dr. Language", "Prof. Neural"],
    faculty: "Artificial Intelligence",
    journal: "AI Communications",
    date: "2024-04-05",
    status: "draft",
    citations: 0,
    image: "/neural-networks-nlp-research.jpg",
  },
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { stiffness: 60 } },
}

export default function ResearchPapers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const filteredAndSortedPapers = researchPapers
    .filter(
      (paper) =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortBy === "citations") {
        return b.citations - a.citations
      }
      return 0
    })

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20 text-foreground p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
      >
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-yellow-200 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text [&:not(:hover)]:text-transparent hover:text-yellow-800 dark:hover:text-yellow-200">
            My Research Papers
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Manage your research publications and academic contributions with our modern platform
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Link href="/user/research-paper/upload" className="w-full sm:w-auto">
            <Button className="gap-2 bg-yellow-700 hover:bg-yellow-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-6 py-2.5">
              <Plus className="h-4 w-4" />
              Add Research Paper
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-yellow-100/80 to-amber-100/80 dark:from-yellow-900/30 dark:to-amber-900/30 backdrop-blur-sm border border-yellow-200/50 dark:border-yellow-700/50 rounded-2xl p-4 sm:p-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-3 rounded-full shadow-md">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 text-lg sm:text-xl">Earn Points!</h3>
            <p className="text-sm sm:text-base text-yellow-700 dark:text-yellow-300 mt-1">
              Get <span className="font-bold bg-yellow-200  px-2 py-1 rounded-md">5 points</span> for
              each new research paper you add to your portfolio.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-600" />
          <Input
            placeholder="Search papers, faculty, authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400/20 bg-white/80 backdrop-blur-sm"
          />
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-md px-4 py-2 pr-10 text-sm focus:border-yellow-400 focus:ring-yellow-400/20 focus:outline-none"
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
            <option value="citations">Most Citations</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-600 pointer-events-none" />
        </div>
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-800 dark:text-yellow-200">Research Papers</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredAndSortedPapers.map((paper) => (
            <motion.div key={paper.id} variants={itemVariants}>
              <Card className="group hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-yellow-200/50 hover:border-yellow-400/50 hover:-translate-y-1 h-full">
                <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl mb-4 overflow-hidden shadow-inner">
                    <motion.img
                      src={paper.image || "/placeholder.svg"}
                      alt={paper.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="font-semibold text-sm sm:text-base line-clamp-2 text-gray-800 dark:text-gray-200">
                      {paper.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-3">{paper.description}</p>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-yellow-600" />
                        <span className="font-medium text-yellow-700 dark:text-yellow-400">Faculty:</span>
                        <span className="line-clamp-1">{paper.faculty}</span>
                      </div>

                      <p>
                        <span className="font-medium text-yellow-700 dark:text-yellow-400">Authors:</span>{" "}
                        {paper.authors.join(", ")}
                      </p>

                      <p>
                        <span className="font-medium text-yellow-700 dark:text-yellow-400">Journal:</span>{" "}
                        {paper.journal}
                      </p>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-yellow-600" />
                        <span className="font-medium text-yellow-700 dark:text-yellow-400">Date:</span>
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </div>

                      <p>
                        <span className="font-medium text-yellow-700 dark:text-yellow-400">Citations:</span>{" "}
                        {paper.citations}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-yellow-100 dark:border-yellow-800/30">
                    <Badge
                      className={cn(
                        "border-transparent text-xs font-medium px-3 py-1",
                        paper.status === "published" &&
                          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                        paper.status === "under-review" &&
                          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
                        paper.status === "draft" && "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
                      )}
                    >
                      {paper.status.replace("-", " ")}
                    </Badge>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-700"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
