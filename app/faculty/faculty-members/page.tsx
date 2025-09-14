"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Eye, Trash2, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    position: "Professor",
    qualification: "Ph.D. in Computer Science",
    experience: "15 years",
    specialization: "Machine Learning, AI",
    status: "Active",
    avatar: "/professional-woman-professor.png",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 234-5678",
    department: "Engineering",
    position: "Associate Professor",
    qualification: "Ph.D. in Mechanical Engineering",
    experience: "12 years",
    specialization: "Robotics, Automation",
    status: "Active",
    avatar: "/professional-professor.png",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@university.edu",
    phone: "+1 (555) 345-6789",
    department: "Mathematics",
    position: "Assistant Professor",
    qualification: "Ph.D. in Applied Mathematics",
    experience: "8 years",
    specialization: "Statistics, Data Analysis",
    status: "Active",
    avatar: "/professional-woman-mathematician.jpg",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    email: "james.wilson@university.edu",
    phone: "+1 (555) 456-7890",
    department: "Physics",
    position: "Professor",
    qualification: "Ph.D. in Theoretical Physics",
    experience: "20 years",
    specialization: "Quantum Mechanics, Particle Physics",
    status: "On Leave",
    avatar: "/professional-man-physicist.jpg",
  },
]

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
    scale: 1.03,
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

export default function Faculty() {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Faculty Members
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Manage and view all faculty members
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button>Add New Faculty</Button>
        </motion.div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <motion.div whileHover="hover" variants={cardHoverVariants}>
          <Card>
            <CardContent className="pt-6">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search faculty members..." className="pl-10" />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline">Filter</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline">Export</Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Faculty Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {facultyMembers.map((faculty, index) => (
          <motion.div key={faculty.id} variants={itemVariants} whileHover="hover" custom={index}>
            <motion.div variants={cardHoverVariants}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <motion.div
                    className="flex items-start justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={faculty.avatar || "/placeholder.svg"} alt={faculty.name} />
                          <AvatarFallback>
                            {faculty.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg">{faculty.name}</CardTitle>
                        <CardDescription>{faculty.position}</CardDescription>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant={faculty.status === "Active" ? "default" : "secondary"}>{faculty.status}</Badge>
                    </motion.div>
                  </motion.div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <motion.div
                    className="space-y-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{faculty.email}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{faculty.phone}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{faculty.department}</span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="pt-2 border-t"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <p className="text-sm text-muted-foreground mb-1">Qualification</p>
                    <p className="text-sm font-medium">{faculty.qualification}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                    <p className="text-sm font-medium">{faculty.specialization}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <p className="text-sm text-muted-foreground mb-1">Experience</p>
                    <p className="text-sm font-medium">{faculty.experience}</p>
                  </motion.div>

                  <motion.div
                    className="flex gap-2 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full gap-2 bg-transparent">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground">Showing 4 of 89 faculty members</p>
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
