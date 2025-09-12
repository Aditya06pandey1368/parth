"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

const branches = [
  "Computer Science",
  "Information Technology",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
]

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"]

export default function TimetablePage() {
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Class Timetable</h1>
        <p className="text-muted-foreground">Select your branch and year to view your class schedule</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Select Branch</label>
          <Select value={selectedBranch} onValueChange={setSelectedBranch}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Computer Science" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((branch) => (
                <SelectItem key={branch} value={branch}>
                  {branch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Select Year</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="min-h-[400px]">
        <CardContent className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Calendar className="h-8 w-8 text-gray-400" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600">
              Please select a branch and year to view your class schedule.
            </p>
            <p className="text-sm text-gray-500">You can select your selections.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
