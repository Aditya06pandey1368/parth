"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Download,
  ClipboardCheck,
  CalendarDays,
  CheckCircle,
} from "lucide-react"

// --- NEW ATTENDANCE DATA ---

const studentDetails = {
  name: "Ram Mohan",
  rollNumber: "CS2021001",
  branch: "Computer Science & Engineering",
  year: "Final Year",
  semester: "8th Semester",
}

const attendanceOverview = {
  overallPercentage: 88,
  totalAttended: 440,
  totalHeld: 500,
}

const semesterAttendance = [
  {
    semester: "Semester 8",
    semesterPercentage: 91,
    status: "Current",
    subjects: [
      { name: "Machine Learning", code: "CS801", attended: 42, total: 45 },
      { name: "Distributed Systems", code: "CS802", attended: 40, total: 45 },
      { name: "Software Engineering", code: "CS803", attended: 28, total: 30 },
      { name: "Project Work", code: "CS804", attended: 55, total: 60 },
      { name: "Seminar", code: "CS805", attended: 27, total: 30 },
    ],
  },
  {
    semester: "Semester 7",
    semesterPercentage: 87,
    status: "Completed",
    subjects: [
      { name: "Artificial Intelligence", code: "CS701", attended: 38, total: 45 },
      { name: "Computer Networks", code: "CS702", attended: 42, total: 45 },
      { name: "Database Management", code: "CS703", attended: 39, total: 45 },
      { name: "Web Technologies", code: "CS704", attended: 40, total: 45 },
      { name: "Elective I", code: "CS705", attended: 25, total: 30 },
      { name: "Lab Work", code: "CS706", attended: 26, total: 30 },
    ],
  },
  {
    semester: "Semester 6",
    semesterPercentage: 85,
    status: "Completed",
    subjects: [
      { name: "Operating Systems", code: "CS601", attended: 38, total: 45 },
      { name: "Computer Graphics", code: "CS602", attended: 35, total: 45 },
      { name: "Compiler Design", code: "CS603", attended: 40, total: 45 },
      { name: "Software Testing", code: "CS604", attended: 28, total: 30 },
      { name: "Mobile Computing", code: "CS605", attended: 36, total: 45 },
      { name: "Mini Project", code: "CS606", attended: 48, total: 50 },
    ],
  },
]

export default function AttendancePage() {
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null)

  const toggleSemester = (semester: string) => {
    setExpandedSemester(expandedSemester === semester ? null : semester)
  }

  // Helper function to determine badge color based on attendance percentage
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 75) return "bg-green-100 text-green-800 border-green-200"
    if (percentage >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Attendance</h1>
            <p className="text-muted-foreground">Track your overall and semester-wise attendance</p>
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 md:mt-0">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </motion.div>

      {/* Student Details & Attendance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Basic Details (No Changes) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Student Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99h52h2goRRCUjLhzZANijXUiSOEpD.png"
                    alt={studentDetails.name}
                  />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{studentDetails.name}</h3>
                  <p className="text-sm text-muted-foreground">{studentDetails.rollNumber}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Branch:</span>
                  <span className="font-medium">{studentDetails.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year:</span>
                  <span className="font-medium">{studentDetails.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Semester:</span>
                  <span className="font-medium">{studentDetails.semester}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Attendance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-accent" />
                Attendance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Overall Percentage */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-3">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor" strokeWidth="3" fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-yellow-500"
                        stroke="currentColor" strokeWidth="3"
                        strokeDasharray={`${attendanceOverview.overallPercentage}, 100`}
                        strokeLinecap="round" fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{attendanceOverview.overallPercentage}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">Overall Attendance</h3>
                </div>

                {/* Classes Attended */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                     <CheckCircle className="h-8 w-8 text-green-500" />
                     <div className="text-3xl font-bold text-muted-foreground">{attendanceOverview.totalAttended}</div>
                  </div>
                  <h3 className="font-semibold text-lg">Classes Attended</h3>
                </div>

                {/* Total Classes */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CalendarDays className="h-8 w-8 text-blue-500" />
                    <div className="text-3xl font-bold text-primary">{attendanceOverview.totalHeld}</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Total Classes Held</h3>
                   <Progress
                      value={(attendanceOverview.totalAttended / attendanceOverview.totalHeld) * 100}
                      className="h-2 [&>div]:bg-yellow-500"
                    />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Semester-wise Attendance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Semester-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {semesterAttendance.map((semester, index) => (
              <motion.div
                key={semester.semester}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-yellow-600/50 transition-colors">
                  <CardContent className="p-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSemester(semester.semester)}
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="font-semibold text-lg">{semester.semester}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              Attendance: <span className="font-medium text-foreground">{semester.semesterPercentage}%</span>
                            </span>
                            <Badge
                              variant={semester.status === "Current" ? "default" : "secondary"}
                              className={
                                semester.status === "Current" ? "bg-yellow-500 text-black hover:bg-yellow-600" : ""
                              }
                            >
                              {semester.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {expandedSemester === semester.semester ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {expandedSemester === semester.semester && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="border-t pt-4">
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium">Subject</th>
                                    <th className="text-left py-2 font-medium">Code</th>
                                    <th className="text-center py-2 font-medium">Attended</th>
                                    <th className="text-center py-2 font-medium">Total</th>
                                    <th className="text-center py-2 font-medium">Percentage</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subIndex) => {
                                    const percentage = Math.round((subject.attended / subject.total) * 100);
                                    return (
                                      <motion.tr
                                        key={subject.code}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                        className="border-b hover:bg-muted/50"
                                      >
                                        <td className="py-3 font-medium">{subject.name}</td>
                                        <td className="py-3 text-muted-foreground">{subject.code}</td>
                                        <td className="py-3 text-center font-medium text-green-600">{subject.attended}</td>
                                        <td className="py-3 text-center">{subject.total}</td>
                                        <td className="py-3 text-center">
                                          <Badge className={getAttendanceColor(percentage)}>
                                            {percentage}%
                                          </Badge>
                                        </td>
                                      </motion.tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}