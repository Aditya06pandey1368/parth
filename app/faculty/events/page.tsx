"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react"
import { motion } from "framer-motion"

interface Event {
  id: string
  title: string
  category: string
  date: string
  time: string
  location: string
  attendees: number
  status: "pending" | "approved" | "rejected"
  description?: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Annual Tech Symposium",
    category: "Academic",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Main Auditorium",
    attendees: 250,
    status: "pending",
    description: "A comprehensive technology symposium featuring industry leaders",
  },
  {
    id: "2",
    title: "Photography Workshop",
    category: "Creative",
    date: "2024-03-20",
    time: "02:00 PM",
    location: "Art Building",
    attendees: 45,
    status: "pending",
    description: "Learn advanced photography techniques from professional photographers",
  },
  {
    id: "3",
    title: "Robotics Competition",
    category: "Technical",
    date: "2024-03-25",
    time: "10:00 AM",
    location: "Engineering Lab",
    attendees: 80,
    status: "pending",
    description: "Inter-college robotics competition with exciting challenges",
  },
  {
    id: "4",
    title: "Cultural Festival",
    category: "Cultural",
    date: "2024-03-30",
    time: "06:00 PM",
    location: "Campus Grounds",
    attendees: 500,
    status: "approved",
    description: "Annual cultural celebration with performances and exhibitions",
  },
  {
    id: "5",
    title: "Science Fair",
    category: "Academic",
    date: "2024-04-05",
    time: "11:00 AM",
    location: "Science Building",
    attendees: 150,
    status: "approved",
    description: "Student science projects and research presentations",
  },
  {
    id: "6",
    title: "Startup Pitch Competition",
    category: "Business",
    date: "2024-04-10",
    time: "03:00 PM",
    location: "Business Center",
    attendees: 120,
    status: "rejected",
    description: "Students present their startup ideas to industry experts",
  },
]

const categoryColors = {
  Academic: "bg-blue-100 text-blue-800",
  Creative: "bg-purple-100 text-purple-800",
  Technical: "bg-green-100 text-green-800",
  Cultural: "bg-pink-100 text-pink-800",
  Business: "bg-orange-100 text-orange-800",
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [eventList, setEventList] = useState(events)

  const filteredEvents = eventList.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || event.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleApprove = (eventId: string) => {
    setEventList((prev) =>
      prev.map((event) => (event.id === eventId ? { ...event, status: "approved" as const } : event)),
    )
  }

  const handleReject = (eventId: string) => {
    setEventList((prev) =>
      prev.map((event) => (event.id === eventId ? { ...event, status: "rejected" as const } : event)),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
      default:
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Event Management
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Review and manage campus events and activities
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search events by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Events Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-between items-center mb-6" variants={itemVariants}>
          <p className="text-sm text-gray-600">
            Showing {filteredEvents.length} of {eventList.length} events
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {filteredEvents.map((event, index) => (
            <motion.div key={event.id} variants={itemVariants} whileHover="hover" custom={index}>
              <motion.div variants={cardHoverVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">{event.title}</CardTitle>
                      <Badge className={categoryColors[event.category as keyof typeof categoryColors]}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">{getStatusBadge(event.status)}</div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-gray-600">
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </motion.div>
                    </div>

                    {event.description && <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>}

                    {/* Action Buttons */}
                    {event.status === "pending" && (
                      <motion.div
                        className="flex gap-2 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            onClick={() => handleApprove(event.id)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                          >
                            Approve
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            onClick={() => handleReject(event.id)}
                            variant="outline"
                            className="w-full border-red-300 text-red-600 hover:bg-red-50"
                          >
                            Reject
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}

                    {event.status === "approved" && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() => handleReject(event.id)}
                          variant="outline"
                          className="w-full border-red-300 text-red-600 hover:bg-red-50"
                        >
                          Revoke Approval
                        </Button>
                      </motion.div>
                    )}

                    {event.status === "rejected" && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() => handleApprove(event.id)}
                          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                        >
                          Reconsider
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {filteredEvents.length === 0 && (
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
              <Calendar className="h-12 w-12 mx-auto" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
