"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Mail,
  Calendar,
  Trophy,
  UserPlus,
  Search,
  Eye,
  Trash2,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Clock,
  Building2,
} from "lucide-react"
import { motion } from "framer-motion"

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

export default function Dashboard() {
  return (
    <motion.div
      className="p-4 lg:p-6 space-y-4 lg:space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        variants={itemVariants}
      >
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">Dashboard</h1>
        </div>
        <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
          <AvatarImage src="/professional-woman-profile.jpg" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6" variants={containerVariants}>
        {[
          { title: "Total Events", value: "24", change: "+12% from last month", icon: TrendingUp },
          { title: "Faculty", value: "156", change: "+3 new this month", icon: Users },
          { title: "Active Clubs", value: "12", change: "All active", icon: Trophy },
          { title: "Research Papers", value: "89", change: "+7 this month", icon: BookOpen },
        ].map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                      <p className="text-xs text-green-600">{stat.change}</p>
                    </div>
                    <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      {React.createElement(stat.icon, { className: "h-6 w-6 text-yellow-600" })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        {/* Main Profile Section */}
        <div className="xl:col-span-2 space-y-4 lg:space-y-6">
          {/* User Profile Card */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card>
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                    <Avatar className="h-24 w-24 lg:h-32 lg:w-32 mx-auto sm:mx-0">
                      <AvatarImage src="/professional-woman-profile.jpg" />
                      <AvatarFallback>MM</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-3 lg:space-y-4 text-center sm:text-left">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Madan Mohan</h2>
                        <p className="text-base lg:text-lg text-muted-foreground">HEAD OF DEPARTMENT</p>
                        <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                        <p className="text-sm text-muted-foreground font-medium">INDIAN INSTITUTE OF ENGINEERING</p>
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="break-all">madanmohan@gmail.com</span>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center justify-center sm:justify-start gap-3">
                        <Button variant="outline" size="sm" className="p-2 bg-transparent">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="p-2 bg-transparent">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </Button>
                        <Button variant="outline" size="sm" className="p-2 bg-transparent">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    Recent Approved Events
                  </CardTitle>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Input placeholder="Search events..." className="w-full sm:w-48 h-9" />
                    <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div className="space-y-3" variants={containerVariants}>
                    {[
                      {
                        id: "EVT001",
                        name: "Annual Tech Symposium",
                        date: "15 Mar 2024",
                        time: "09:00 AM",
                        status: "Approved",
                        organizer: "CS Department",
                        attendees: 250,
                        venue: "Main Auditorium",
                      },
                      {
                        id: "EVT002",
                        name: "Cultural Fest 2024",
                        date: "22 Mar 2024",
                        time: "10:00 AM",
                        status: "Approved",
                        organizer: "Student Council",
                        attendees: 500,
                        venue: "Campus Ground",
                      },
                      {
                        id: "EVT003",
                        name: "Industry Connect Workshop",
                        date: "28 Mar 2024",
                        time: "02:00 PM",
                        status: "Approved",
                        organizer: "Training & Placement",
                        attendees: 150,
                        venue: "Conference Hall",
                      },
                      {
                        id: "EVT004",
                        name: "Research Paper Presentation",
                        date: "05 Apr 2024",
                        time: "11:00 AM",
                        status: "Approved",
                        organizer: "Research Committee",
                        attendees: 100,
                        venue: "Seminar Hall",
                      },
                    ].map((event, index) => (
                      <motion.div
                        key={event.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        className="p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <Badge variant="outline" className="w-fit text-xs font-mono border-yellow-400">
                                {event.id}
                              </Badge>
                              <h4 className="font-semibold text-gray-900">{event.name}</h4>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1 px-2 py-1 border border-yellow-400 rounded">
                                <Calendar className="h-3 w-3" />
                                {event.date}
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 border border-yellow-400 rounded">
                                <Clock className="h-3 w-3" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {event.attendees} attendees
                              </div>
                              <div className="flex items-center gap-1">
                                <Building2 className="h-3 w-3" />
                                {event.venue}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">Organized by:</span>
                              <span className="text-sm font-medium">{event.organizer}</span>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border border-yellow-400">
                                {event.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="bg-transparent hover:bg-yellow-50">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-transparent hover:bg-red-50 text-red-600 border-red-200"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Active Clubs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
                    {[
                      { name: "Coding Club", members: 45, advisor: "Dr. Smith", status: "Active" },
                      { name: "Robotics Society", members: 32, advisor: "Prof. Johnson", status: "Active" },
                      { name: "Literary Club", members: 28, advisor: "Dr. Brown", status: "Active" },
                      { name: "Photography Club", members: 22, advisor: "Ms. Davis", status: "Active" },
                      { name: "Music Society", members: 35, advisor: "Mr. Wilson", status: "Active" },
                      { name: "Drama Club", members: 18, advisor: "Dr. Taylor", status: "Active" },
                    ].map((club, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{club.name}</h4>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border border-yellow-400">
                            {club.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Members: {club.members}</p>
                        <p className="text-sm text-muted-foreground">Advisor: {club.advisor}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Recently Added Faculty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div className="space-y-4" variants={containerVariants}>
                    {[
                      {
                        name: "Dr. Sarah Johnson",
                        department: "Computer Science",
                        position: "Assistant Professor",
                        joinDate: "15 Feb 2024",
                        email: "sarah.johnson@institute.edu",
                      },
                      {
                        name: "Prof. Michael Chen",
                        department: "Electronics",
                        position: "Associate Professor",
                        joinDate: "10 Feb 2024",
                        email: "michael.chen@institute.edu",
                      },
                      {
                        name: "Dr. Priya Sharma",
                        department: "Mathematics",
                        position: "Assistant Professor",
                        joinDate: "05 Feb 2024",
                        email: "priya.sharma@institute.edu",
                      },
                      {
                        name: "Prof. David Wilson",
                        department: "Physics",
                        position: "Professor",
                        joinDate: "01 Feb 2024",
                        email: "david.wilson@institute.edu",
                      },
                    ].map((faculty, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 border rounded-lg"
                      >
                        <Avatar className="h-12 w-12 mx-auto sm:mx-0">
                          <AvatarImage src={`/professional-professor.png`} />
                          <AvatarFallback>
                            {faculty.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="font-medium">{faculty.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {faculty.position} - {faculty.department}
                          </p>
                          <p className="text-xs text-muted-foreground">Joined: {faculty.joinDate}</p>
                        </div>
                        <div className="text-center sm:text-right">
                          <p className="text-sm text-muted-foreground break-all">{faculty.email}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Sidebar - Position of Responsibilities */}
        <div className="space-y-4 lg:space-y-6">
          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Position of <span className="text-primary">Responsibilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      position: "Cognizant, Mumbai",
                      duration: "Sep 2016 - July 2020",
                      icon: "🏢",
                    },
                    {
                      position: "Sugee Pvt limited, Mumbai",
                      duration: "Sep 2020 - July 2023",
                      icon: "🏢",
                    },
                    {
                      position: "Cinestar, Mumbai",
                      duration: "Sep 2023",
                      icon: "🏢",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{item.position}</p>
                        <p className="text-xs text-muted-foreground">{item.duration}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Publications", value: "23" },
                    { label: "Citations", value: "156" },
                    { label: "H-Index", value: "12" },
                    { label: "Projects", value: "8" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
