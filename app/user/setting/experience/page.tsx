"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Calendar, MapPin, User } from "lucide-react"
import Link from "next/link"

export default function ExperienceDetails() {
  const [showAddModal, setShowAddModal] = useState(false)

  const conferences = [
    {
      id: 1,
      title: "National Academic Conference on Engineering",
      role: "Attendee",
      organizer: "Regional Academic Society",
      date: "Mar 15, 2024",
      status: "Verified",
      location: "New Delhi",
    },
    {
      id: 2,
      title: "Advanced Materials Seminar",
      role: "Speaker",
      organizer: "Research Institute",
      date: "Nov 22, 2024",
      status: "Verified",
      location: "Mumbai",
    },
    {
      id: 3,
      title: "Future of Technology Summit",
      role: "Attendee",
      organizer: "Tech Innovation Group",
      date: "Dec 05, 2024 - Dec 07, 2024",
      status: "Pending Verification",
      location: "Bangalore",
    },
    {
      id: 4,
      title: "Global Health Symposium",
      role: "Presenter",
      organizer: "Global Health Organization",
      date: "Jan 17, 2025",
      status: "Verified",
      location: "Chennai",
    },
    {
      id: 5,
      title: "Environmental Sustainability Conference",
      role: "Attendee",
      organizer: "Environmental Action Network",
      date: "Feb 20, 2025",
      status: "Pending Verification",
      location: "Pune",
    },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-8">
          <Link href="user/setting/settings" className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span>Basic Details</span>
          </Link>
          <div className="flex items-center space-x-2 text-yellow-500">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="font-medium">Experience Details</span>
          </div>
          <Link href="/settings/personal" className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span>Personal Details</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Conferences & Seminars</h1>
        </div>
        <Button
          onClick={() => setShowAddModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Entry
        </Button>
      </div>

      {/* Conferences List */}
      <div className="space-y-4">
        {conferences.map((conference) => (
          <Card key={conference.id} className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{conference.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>You Role: {conference.role}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Organizer: {conference.organizer}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{conference.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{conference.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    variant={conference.status === "Verified" ? "default" : "secondary"}
                    className={
                      conference.status === "Verified"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {conference.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Link href="/settings">
          <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent">
            Previous
          </Button>
        </Link>
        <Link href="/settings/personal">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">Next: Personal Details</Button>
        </Link>
      </div>

      {/* Add Conference Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Add Conference/Seminar Entry</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title*</label>
                <input
                  type="text"
                  placeholder="e.g. International Conference on AI"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role/Type of Participation*
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option>Attendee</option>
                    <option>Speaker</option>
                    <option>Presenter</option>
                    <option>Organizer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organizing Body*</label>
                  <input
                    type="text"
                    placeholder="e.g. Global Tech Institute"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location*</label>
                <input
                  type="text"
                  placeholder="e.g. IIT Delhi City, Country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date*</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description/Key Takeaways</label>
                <textarea
                  rows={4}
                  placeholder="Share your key learnings, memorable sessions, or contributions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certificate of Participation/Attendance Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-400 mb-2">📄</div>
                  <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PNG, JPG, PDF (Max. 5MB)</p>
                  <div className="mt-3 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block">
                    📄 certificate_of_attendance.pdf
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Photo Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-400 mb-2">📷</div>
                  <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF (Max. 5MB)</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAddModal(false)}
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowAddModal(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
              >
                Save Entry
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
