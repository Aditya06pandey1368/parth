"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PersonalDetails() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-8">
          <Link href="/settings" className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span>Basic Details</span>
          </Link>
          <Link href="/settings/experience" className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span>Experience Details</span>
          </Link>
          <div className="flex items-center space-x-2 text-yellow-500">
            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="font-medium">Personal Details</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Personal Details</h1>
        <p className="text-gray-600 mt-1">Update your personal preferences and additional information</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  type="tel"
                  placeholder="Emergency contact number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                rows={3}
                placeholder="Enter your full address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio/About Me</label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself, your interests, and goals..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Interests & Hobbies</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Reading",
                  "Sports",
                  "Music",
                  "Photography",
                  "Coding",
                  "Travel",
                  "Art",
                  "Gaming",
                  "Cooking",
                  "Dancing",
                  "Writing",
                  "Volunteering",
                ].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Link href="/settings/experience">
          <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent">
            Previous
          </Button>
        </Link>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">Save Changes</Button>
      </div>
    </div>
  )
}
