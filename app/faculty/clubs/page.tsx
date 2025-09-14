"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Users, Calendar, Star, Camera, Cpu, Leaf, MessageCircle, Check, X } from "lucide-react"
import { easeInOut, easeOut, motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
}

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
}

export default function ClubsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const clubs = [
    {
      id: 1,
      name: "Photography Club",
      description: "Capture moments and express creativity through the lens of photography",
      category: "Creative",
      categoryColor: "bg-purple-100 text-purple-800",
      icon: Camera,
      iconBg: "bg-purple-500",
      tags: ["Photography", "Art", "Creative"],
      members: 85,
      founded: 2018,
      rating: 4.6,
      image: "/photography-club-students-with-cameras.jpg",
    },
    {
      id: 2,
      name: "Robotics Team",
      description: "Build, program, and compete with cutting-edge robotics technology",
      category: "Technical",
      categoryColor: "bg-green-100 text-green-800",
      icon: Cpu,
      iconBg: "bg-green-500",
      tags: ["Engineering", "Programming", "Innovation"],
      members: 65,
      founded: 2017,
      rating: 4.9,
      image: "/robotics-team-building-robots.jpg",
    },
    {
      id: 3,
      name: "Environmental Action",
      description: "Work together to create a sustainable future for our campus and community",
      category: "Social",
      categoryColor: "bg-green-100 text-green-800",
      icon: Leaf,
      iconBg: "bg-green-500",
      tags: ["Sustainability", "Community", "Environment"],
      members: 95,
      founded: 2016,
      rating: 4.7,
      image: "/environmental-club-students-planting-trees.jpg",
    },
    {
      id: 4,
      name: "Debate Society",
      description: "Sharpen your argumentative skills and engage in intellectual discourse",
      category: "Academic",
      categoryColor: "bg-blue-100 text-blue-800",
      icon: Users,
      iconBg: "bg-blue-500",
      tags: ["Debate", "Public Speaking", "Critical Thinking"],
      members: 42,
      founded: 2019,
      rating: 4.5,
      image: "/debate-society-students-in-discussion.jpg",
    },
    {
      id: 5,
      name: "Music Ensemble",
      description: "Create beautiful harmonies and perform for the university community",
      category: "Creative",
      categoryColor: "bg-purple-100 text-purple-800",
      icon: Users,
      iconBg: "bg-purple-500",
      tags: ["Music", "Performance", "Collaboration"],
      members: 38,
      founded: 2015,
      rating: 4.8,
      image: "/music-ensemble-students-with-instruments.jpg",
    },
    {
      id: 6,
      name: "Entrepreneurship Club",
      description: "Foster innovation and business acumen among aspiring entrepreneurs",
      category: "Business",
      categoryColor: "bg-yellow-100 text-yellow-800",
      icon: Users,
      iconBg: "bg-yellow-500",
      tags: ["Business", "Innovation", "Networking"],
      members: 73,
      founded: 2020,
      rating: 4.4,
      image: "/entrepreneurship-club-business-meeting.jpg",
    },
  ]

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === "all" || club.category.toLowerCase() === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        className="bg-gray-700 text-white py-20 px-4"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore Our Clubs Directory
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover, connect, and grow with the vibrant clubs at our university.
            <br />
            Your next adventure starts here.
          </motion.p>

          <motion.div
            className="relative max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search clubs by keyword, topic, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 bg-white text-gray-900 border-0 rounded-xl text-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48 border-2 border-gray-200 focus:border-yellow-400">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 border-2 border-yellow-400 bg-yellow-50">
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="members">Most Members</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-gray-600 font-medium">
            Showing {filteredClubs.length} of {clubs.length} clubs
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {filteredClubs.map((club, index) => {
            const IconComponent = club.icon
            return (
              <motion.div key={club.id} variants={itemVariants} whileHover="hover" custom={index}>
                <motion.div variants={cardHoverVariants}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                    <div className="relative">
                      <motion.img
                        src={club.image || "/placeholder.svg?height=200&width=400"}
                        alt={club.name}
                        className="w-full h-52 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <Badge className={`${club.categoryColor} font-medium px-3 py-1`}>{club.category}</Badge>
                      </motion.div>
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ rotate: 360 }}
                      >
                        <div className={`${club.iconBg} p-3 rounded-xl shadow-lg`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    <CardHeader className="pb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">{club.name}</CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed">
                          {club.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {club.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 + tagIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-yellow-700 border-yellow-300 hover:bg-yellow-50 text-xs px-2 py-1"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        className="grid grid-cols-3 gap-4 mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                          <div className="flex items-center gap-1 text-blue-600 mb-1">
                            <Users className="h-4 w-4" />
                          </div>
                          <span className="text-lg font-bold text-gray-900">{club.members}</span>
                          <span className="text-xs text-gray-500">Members</span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                          <div className="flex items-center gap-1 text-green-600 mb-1">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <span className="text-lg font-bold text-gray-900">{club.founded}</span>
                          <span className="text-xs text-gray-500">Est.</span>
                        </motion.div>
                        <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                          <div className="flex items-center gap-1 text-yellow-600 mb-1">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="text-lg font-bold text-gray-900">{club.rating}</span>
                          <span className="text-xs text-gray-500">Rating</span>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2.5">
                            <Check className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            variant="outline"
                            className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 font-semibold py-2.5 bg-transparent"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-gray-300 hover:bg-gray-50 bg-transparent"
                          >
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {filteredClubs.length === 0 && (
          <motion.div
            className="text-center py-16"
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
              <Users className="h-16 w-16 mx-auto" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No clubs found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more clubs that match your interests.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
