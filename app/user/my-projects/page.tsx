"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2, Plus, Search, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const certificates = [
  {
    id: 1,
    title: "Certificate Of Full Stack",
    issuer: "Tech Academy",
    date: "2024-01-15",
    status: "verified",
    image: "https://marketplace.canva.com/EAFlVDzb7sA/3/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-Qn4Rei141MM.jpg",
  },
  {
    id: 2,
    title: "Certificate of Data Science",
    issuer: "Data Institute",
    date: "2024-02-20",
    status: "verified",
    image: "https://marketplace.canva.com/EAFlVDzb7sA/3/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-Qn4Rei141MM.jpg",
  },
  {
    id: 3,
    title: "Certificate Of Machine Learning",
    issuer: "AI Academy",
    date: "2024-03-10",
    status: "pending",
    image: "https://marketplace.canva.com/EAFlVDzb7sA/3/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-Qn4Rei141MM.jpg",
  },
  {
    id: 4,
    title: "Certificate of UX Design",
    issuer: "Design School",
    date: "2024-04-05",
    status: "verified",
    image: "https://marketplace.canva.com/EAFlVDzb7sA/3/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-Qn4Rei141MM.jpg",
  },
]

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an e-commerce platform with modern UI/UX",
    status: "completed",
    image: "https://as1.ftcdn.net/jpg/01/02/26/88/1000_F_102268826_JMpHgmEJq9RjRpVibF1QngDuXrwOPeXY.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile application for task management",
    status: "in-progress",
    image: "https://as1.ftcdn.net/jpg/01/02/26/88/1000_F_102268826_JMpHgmEJq9RjRpVibF1QngDuXrwOPeXY.jpg",
  },
  {
    id: 3,
    title: "Data Analysis Project",
    description: "Statistical analysis of customer behavior patterns",
    status: "completed",
    image: "https://as1.ftcdn.net/jpg/01/02/26/88/1000_F_102268826_JMpHgmEJq9RjRpVibF1QngDuXrwOPeXY.jpg",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Setup",
    description: "AWS cloud infrastructure for scalable web applications",
    status: "completed",
    image: "https://as1.ftcdn.net/jpg/01/02/26/88/1000_F_102268826_JMpHgmEJq9RjRpVibF1QngDuXrwOPeXY.jpg",
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

export default function CommunityService() {
  const [searchTerm, setSearchTerm] = useState("")
  

  // Effect to handle theme initialization and updates
 


  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <motion.div
      className="bg-background text-foreground p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
      >
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground">Manage your academic achievements and project portfolio</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/user/certificate/upload">
            <Button className="gap-2 bg-yellow-400 hover:bg-yellow-500 text-black">
              <Plus className="h-4 w-4" />
              Add Certificate
            </Button>
          </Link>
          
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </motion.div>

      

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-bold mb-3">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-3 overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <h3 className="font-medium text-sm mb-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge
                       className={cn(
                        "border-transparent",
                        project.status === "completed" && "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
                        project.status === "in-progress" && "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
                      )}
                    >
                      {project.status}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:bg-destructive hover:text-destructive-foreground">
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