"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    category: "Academic",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80",
    description:
      "Join us for the Annual Tech Symposium featuring keynote speakers, panel discussions, and exhibitions on cutting-edge technologies.",
    organizer: "Tech Club",
    location: "Main Auditorium",
    status: "Upcoming",
    date: "03/15/2024",
    time: "09:00 AM",
    featured: true,
  },
  {
    id: 2,
    title: "Photography Workshop",
    category: "Creative",
    categoryColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "A hands-on photography workshop designed for beginners and enthusiasts to explore techniques, lighting, and composition.",
    organizer: "Art Society",
    location: "Art Building",
    status: "Open",
    date: "03/20/2024",
    time: "02:00 PM",
    featured: false,
  },
  {
    id: 3,
    title: "Robotics Competition",
    category: "Technical",
    categoryColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
    image:
      "https://images.unsplash.com/photo-1581090465469-7cbe2d7d2aeb?auto=format&fit=crop&w=800&q=80",
    description:
      "An exciting robotics competition where student teams design and showcase their innovative robots in various challenges.",
    organizer: "Engineering Dept.",
    location: "Lab Block C",
    status: "Upcoming",
    date: "03/25/2024",
    time: "10:00 AM",
    featured: true,
  },
]

export default function EventsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Upcoming Events</h1>
      <p className="text-muted-foreground">
        Stay updated with campus activities and events
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-900 border border-border"
          >
            {/* Image */}
            <div className="relative w-full h-44">
              <Image
                src={event.image}
                alt={event.title}
                fill
                unoptimized
                className="object-cover"
              />
              {event.featured && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-md font-medium">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <CardContent className="p-4 space-y-4">
              {/* Title + Category */}
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-lg text-foreground">
                  {event.title}
                </h2>
                <Badge className={`${event.categoryColor}`}>
                  {event.category}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {event.description}
              </p>

              {/* Organizer / Location / Status */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 text-sm rounded-md">
                  {event.organizer}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 text-sm rounded-md">
                  {event.location}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 text-sm rounded-md">
                  {event.status}
                </span>
              </div>

              {/* Date / Time */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md flex items-center gap-1 text-gray-800 dark:text-gray-200">
                  <Calendar className="h-4 w-4 text-yellow-600" /> {event.date}
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md flex items-center gap-1 text-gray-800 dark:text-gray-200">
                  <Clock className="h-4 w-4 text-yellow-600" /> {event.time}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-3">
                <Button
                  variant="outline"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:text-black mt-2"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
