"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const upcomingEvents = [
  {
    id: 1,
    title: "Certificate of Full Stack Web Development",
    description: "Complete web development bootcamp covering frontend and backend technologies",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Tech Lab A",
    attendees: 45,
    status: "upcoming",
    image: "/formal-certificate.png",
  },
  {
    id: 2,
    title: "Certificate of Data Science",
    description: "Comprehensive data science workshop with hands-on projects",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Computer Lab B",
    attendees: 38,
    status: "upcoming",
    image: "/data-science-certificate.png",
  },
  {
    id: 3,
    title: "Certificate of Machine Learning",
    description: "Advanced machine learning concepts and practical applications",
    date: "2024-02-25",
    time: "11:00 AM",
    location: "AI Research Center",
    attendees: 52,
    status: "upcoming",
    image: "/machine-learning-certificate.jpg",
  },
  {
    id: 4,
    title: "Certificate of UI Design",
    description: "User interface design principles and modern design tools",
    date: "2024-03-01",
    time: "3:00 PM",
    location: "Design Studio",
    attendees: 29,
    status: "upcoming",
    image: "/ui-design-certificate.jpg",
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Certificate of Full Stack Web Development",
    description: "Complete web development bootcamp covering frontend and backend technologies",
    date: "2024-01-15",
    time: "10:00 AM",
    location: "Tech Lab A",
    attendees: 48,
    status: "completed",
    image: "/web-development-certificate.jpg",
  },
  {
    id: 6,
    title: "Certificate of Data Science",
    description: "Comprehensive data science workshop with hands-on projects",
    date: "2024-01-10",
    time: "2:00 PM",
    location: "Computer Lab B",
    attendees: 41,
    status: "completed",
    image: "/data-science-workshop.jpg",
  },
  {
    id: 7,
    title: "Certificate of Machine Learning",
    description: "Advanced machine learning concepts and practical applications",
    date: "2024-01-05",
    time: "11:00 AM",
    location: "AI Research Center",
    attendees: 55,
    status: "completed",
    image: "/machine-learning-workshop.jpg",
  },
  {
    id: 8,
    title: "Certificate of UI Design",
    description: "User interface design principles and modern design tools",
    date: "2023-12-20",
    time: "3:00 PM",
    location: "Design Studio",
    attendees: 33,
    status: "completed",
    image: "/ui-design-workshop.png",
  },
]

export default function ClubEventsPage() {
  const params = useParams()
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  })

  const isAdmin = true

  const handleAddEvent = () => {
    console.log("Adding new event:", newEvent)
    setIsAddEventOpen(false)
    setNewEvent({ title: "", description: "", date: "", time: "", location: "" })
  }

  const EventCard = ({ event }: { event: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{event.attendees} attendees</span>
              </div>
            </div>

            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">View Details</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <motion.div
      className="min-h-screen p-6 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-3xl font-bold">Club Events</h1>
          <p className="text-muted-foreground">Stay updated with all club activities and events</p>
        </div>
        {isAdmin && (
          <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="Enter event title"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Enter event description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="Enter event location"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setIsAddEventOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black" onClick={handleAddEvent}>
                    Add Event
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </motion.div>

      {/* Past Events */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Past Events</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
