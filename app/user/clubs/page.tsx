"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, Calendar, Star, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const clubs = [
  {
    id: 1,
    name: "Debate Society",
    category: "Academic",
    description: "Enhance your public speaking and critical thinking skills through structured debates",
    members: 120,
    established: 2015,
    rating: 4.8,
    image: "https://miro.medium.com/1*Y0NjhuKAG_v8BniUqfcS6Q.jpeg",
    color: "bg-blue-500",
    tags: ["Public Speaking", "Critical Thinking", "Competition"],
  },
  {
    id: 2,
    name: "Photography Club",
    category: "Creative",
    description: "Capture moments and express creativity through the lens of photography",
    members: 85,
    established: 2018,
    rating: 4.6,
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/12/10195608/Blog-Banner-Fun-events-for-college-fest-1024x576.jpg",
    color: "bg-purple-500",
    tags: ["Photography", "Art", "Creative"],
  },
  {
    id: 3,
    name: "Robotics Team",
    category: "Technical",
    description: "Build, program, and compete with cutting-edge robotics technology",
    members: 65,
    established: 2017,
    rating: 4.9,
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/12/10195608/Blog-Banner-Fun-events-for-college-fest-1024x576.jpg",
    color: "bg-green-500",
    tags: ["Engineering", "Programming", "Innovation"],
  },
  {
    id: 4,
    name: "Environmental Action",
    category: "Social",
    description: "Work together to create a sustainable future for our campus and community",
    members: 95,
    established: 2016,
    rating: 4.7,
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/12/10195608/Blog-Banner-Fun-events-for-college-fest-1024x576.jpg",
    color: "bg-emerald-500",
    tags: ["Sustainability", "Community", "Environment"],
  },
  {
    id: 5,
    name: "Drama Society",
    category: "Creative",
    description: "Express yourself through theatrical performances and dramatic arts",
    members: 75,
    established: 2014,
    rating: 4.5,
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/12/10195608/Blog-Banner-Fun-events-for-college-fest-1024x576.jpg",
    color: "bg-red-500",
    tags: ["Theater", "Performance", "Arts"],
  },
  {
    id: 6,
    name: "Coding Club",
    category: "Technical",
    description: "Learn programming languages and participate in coding competitions",
    members: 150,
    established: 2013,
    rating: 4.8,
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2023/12/10195608/Blog-Banner-Fun-events-for-college-fest-1024x576.jpg",
    color: "bg-indigo-500",
    tags: ["Programming", "Competition", "Technology"],
  },
]

export default function ClubsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const categories = ["all", "Academic", "Creative", "Technical", "Social"]

  const filteredClubs = clubs
    .filter((club) => {
      const matchesSearch =
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || club.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.established - a.established
        case "members":
          return b.members - a.members
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover  bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/club-hero-bg.jpg')`,
        }}
      >
        <motion.div
          className="text-center text-white space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Explore Our Clubs Directory</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            Discover, connect, and grow with the vibrant clubs at our university. Your next adventure starts here.
          </p>
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search clubs by keyword, topic, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/90 backdrop-blur-sm border-white/20"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6 space-y-6">
        {/* Filters */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="members">Most Members</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {filteredClubs.length} of {clubs.length} clubs
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club, idx) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={club.image || "/placeholder.svg"}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${club.color} rounded-lg flex items-center justify-center`}
                  >
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white/90">
                    {club.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{club.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{club.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {club.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-white border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center py-2 border-t border-gray-100">
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>{club.members}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Members</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
                          <Calendar className="h-4 w-4 text-green-500" />
                          <span>{club.established}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Est.</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{club.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Link href={`/clubs/${club.id}/events`} className="flex-1">
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" size="sm">
                          Join Club
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 bg-transparent border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 bg-transparent border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      
      </div>
    </div>
  )
}
