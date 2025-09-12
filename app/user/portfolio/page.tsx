"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Download, GraduationCap, Mail, Users, FileText, Linkedin, Twitter } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row gap-4 md:gap-6">
        {/* Profile Section */}
        <Card className="xl:w-2/3">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col items-center sm:items-start">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mb-4">
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99h52h2goRRCUjLhzZANijXUiSOEpD.png"
                    alt="Ram Mohan"
                  />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="flex gap-2 mb-4">
                  <div className="p-2 bg-blue-100 rounded">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="p-2 bg-red-100 rounded">
                    <Mail className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="p-2 bg-blue-100 rounded">
                    <Twitter className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Ram Mohan</h1>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2">
                  Computer Science & Engineering
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-2">INDIAN INSTITUTE OF ENGINEERING</p>
                <p className="text-base md:text-lg text-muted-foreground mb-6">rammohan@gmail.com</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Section */}
        <Card className="xl:w-1/3">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Attendance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Attendance</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">CGPA</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-3 text-base">Certificates Earned</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Certificates</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">25</span>
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-xs">📜</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Verified Certificates</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">18</span>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold">14</p>
                <p className="text-xs md:text-sm text-muted-foreground">Community Services</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold">8</p>
                <p className="text-xs md:text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold">3</p>
                <p className="text-xs md:text-sm text-muted-foreground">Publications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold">A+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Grades</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experience and Education */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {/* Work Experience */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-blue-600 text-lg md:text-xl">My Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">Cognizant, Mumbai</h4>
                    <p className="text-xs md:text-sm text-gray-500">Sep 2018 - July 2020</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">Supra Pvt limited, Mumbai</h4>
                    <p className="text-xs md:text-sm text-gray-500">Sep 2020 - July 2021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">Cinetstox, Mumbai</h4>
                    <p className="text-xs md:text-sm text-gray-500">Sep 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-blue-600 text-lg md:text-xl">Education Qualification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">Bachelor of Engineering</h4>
                    <p className="text-xs md:text-sm text-gray-500">INDIAN INSTITUTE OF ENGINEERING</p>
                    <p className="text-xs md:text-sm text-gray-500">2014 - 2018</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">Master of Science</h4>
                    <p className="text-xs md:text-sm text-gray-500">University of Mumbai</p>
                    <p className="text-xs md:text-sm text-gray-500">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg md:text-xl">Position of Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h4 className="font-medium text-sm md:text-base">Team Leader</h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Led development team of 5 members</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
              </div>
              <h4 className="font-medium text-sm md:text-base">Project Manager</h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Managed multiple client projects</p>
            </div>
            <div className="text-center p-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-yellow-600" />
              </div>
              <h4 className="font-medium text-sm md:text-base">Mentor</h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Mentored junior developers</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
