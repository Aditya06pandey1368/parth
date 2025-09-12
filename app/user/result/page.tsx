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
  TrendingUp,
  TrendingDown,
  Award,
  BookOpen,
  GraduationCap,
  Download,
} from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

// Sample data
const studentDetails = {
  name: "Ram Mohan",
  rollNumber: "CS2021001",
  branch: "Computer Science & Engineering",
  year: "Final Year",
  semester: "8th Semester",
}

const performanceData = {
  currentCGPA: 8.7,
  previousCGPA: 8.5,
  totalCredits: 156,
  maxCredits: 180,
}

const gradeDistribution = [
  { name: "A+", value: 35, color: "#10b981" },
  { name: "A", value: 25, color: "#3b82f6" },
  { name: "B+", value: 20, color: "#f59e0b" },
  { name: "B", value: 15, color: "#ef4444" },
  { name: "C", value: 5, color: "#6b7280" },
]

const semesterResults = [
  {
    semester: "Semester 8",
    sgpa: 9.2,
    credits: 20,
    status: "Current",
    subjects: [
      { name: "Machine Learning", code: "CS801", credits: 4, grade: "A+", marks: 95 },
      { name: "Distributed Systems", code: "CS802", credits: 4, grade: "A", marks: 88 },
      { name: "Software Engineering", code: "CS803", credits: 3, grade: "A+", marks: 92 },
      { name: "Project Work", code: "CS804", credits: 6, grade: "A", marks: 89 },
      { name: "Seminar", code: "CS805", credits: 3, grade: "A+", marks: 94 },
    ],
  },
  {
    semester: "Semester 7",
    sgpa: 8.8,
    credits: 22,
    status: "Completed",
    subjects: [
      { name: "Artificial Intelligence", code: "CS701", credits: 4, grade: "A", marks: 87 },
      { name: "Computer Networks", code: "CS702", credits: 4, grade: "A+", marks: 93 },
      { name: "Database Management", code: "CS703", credits: 4, grade: "A", marks: 85 },
      { name: "Web Technologies", code: "CS704", credits: 4, grade: "A+", marks: 91 },
      { name: "Elective I", code: "CS705", credits: 3, grade: "B+", marks: 78 },
      { name: "Lab Work", code: "CS706", credits: 3, grade: "A", marks: 86 },
    ],
  },
  {
    semester: "Semester 6",
    sgpa: 8.5,
    credits: 24,
    status: "Completed",
    subjects: [
      { name: "Operating Systems", code: "CS601", credits: 4, grade: "A", marks: 84 },
      { name: "Computer Graphics", code: "CS602", credits: 4, grade: "B+", marks: 79 },
      { name: "Compiler Design", code: "CS603", credits: 4, grade: "A", marks: 88 },
      { name: "Software Testing", code: "CS604", credits: 3, grade: "A+", marks: 92 },
      { name: "Mobile Computing", code: "CS605", credits: 4, grade: "A", marks: 86 },
      { name: "Mini Project", code: "CS606", credits: 5, grade: "A+", marks: 90 },
    ],
  },
]

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#6b7280"]

export default function ResultPage() {
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null)

  const toggleSemester = (semester: string) => {
    setExpandedSemester(expandedSemester === semester ? null : semester)
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-100 text-green-800 border-green-200"
      case "A":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "B+":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "B":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Academic Results</h1>
            <p className="text-muted-foreground">Track your academic performance and semester-wise results</p>
          </div>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 md:mt-0">
            <Download className="h-4 w-4 mr-2" />
            Download Transcript
          </Button>
        </div>
      </motion.div>

      {/* Student Details & Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Basic Details */}
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

        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Current CGPA */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-3">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-yellow-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${(performanceData.currentCGPA / 10) * 100}, 100`}
                        strokeLinecap="round"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{performanceData.currentCGPA}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Current CGPA</h3>
                  <div className="flex items-center justify-center gap-1">
                    {performanceData.currentCGPA > performanceData.previousCGPA ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {performanceData.currentCGPA > performanceData.previousCGPA ? "+" : ""}
                      {(performanceData.currentCGPA - performanceData.previousCGPA).toFixed(1)} from last semester
                    </span>
                  </div>
                </div>

                {/* Previous CGPA */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-muted-foreground mb-2">{performanceData.previousCGPA}</div>
                  <h3 className="font-semibold text-lg mb-1">Previous CGPA</h3>
                  <p className="text-sm text-muted-foreground">Semester 7</p>
                </div>

                {/* Credits Progress */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{performanceData.totalCredits}</div>
                  <h3 className="font-semibold text-lg mb-2">Credits Earned</h3>
                  <div className="space-y-2">
                    <Progress
                      value={(performanceData.totalCredits / performanceData.maxCredits) * 100}
                      className="h-2 [&>div]:bg-yellow-500"
                    />
                    <p className="text-sm text-muted-foreground">
                      {performanceData.totalCredits} / {performanceData.maxCredits} credits
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Grade Distribution Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Grade Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center space-y-3">
                {gradeDistribution.map((grade, index) => (
                  <div key={grade.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: grade.color }} />
                      <span className="font-medium">Grade {grade.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">{grade.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Semester-wise Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Semester-wise Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {semesterResults.map((semester, index) => (
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
                              SGPA: <span className="font-medium text-foreground">{semester.sgpa}</span>
                            </span>
                            <span>
                              Credits: <span className="font-medium text-foreground">{semester.credits}</span>
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
                                    <th className="text-center py-2 font-medium">Credits</th>
                                    <th className="text-center py-2 font-medium">Marks</th>
                                    <th className="text-center py-2 font-medium">Grade</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.subjects.map((subject, subIndex) => (
                                    <motion.tr
                                      key={subject.code}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                      className="border-b hover:bg-muted/50"
                                    >
                                      <td className="py-3 font-medium">{subject.name}</td>
                                      <td className="py-3 text-muted-foreground">{subject.code}</td>
                                      <td className="py-3 text-center">{subject.credits}</td>
                                      <td className="py-3 text-center font-medium">{subject.marks}</td>
                                      <td className="py-3 text-center">
                                        <Badge className={getGradeColor(subject.grade)}>{subject.grade}</Badge>
                                      </td>
                                    </motion.tr>
                                  ))}
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
