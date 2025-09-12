"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Main Auditorium",
    attendees: 250,
    category: "Academic",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Photography Workshop",
    date: "2024-03-20",
    time: "02:00 PM",
    location: "Art Building",
    attendees: 45,
    category: "Creative",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Robotics Competition",
    date: "2024-03-25",
    time: "10:00 AM",
    location: "Engineering Lab",
    attendees: 80,
    category: "Technical",
    status: "upcoming",
  },
]

export default function EventsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <p className="text-muted-foreground">Stay updated with campus activities and events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">{event.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {event.attendees} attendees
                </div>
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Register</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
