"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import ProfilePic from '@/public/studentProfile.jpg'
import CertificateImg from '@/public/certificateDummy.jpg'
import { BookOpen,CheckCircle2, Download, GraduationCap, Mail, Users, FileText, Linkedin, Twitter,  ChevronLeft,
  ChevronRight,
  Building2,
  Github,
 
 } from "lucide-react"
 
const certificates = [
  {
    title: "Certificate Of Full Stack Web Development",
    issuer: "Edusmart",
    image: CertificateImg.src,
    verified: true, // ✅ added
  },
  {
    title: "Certificate Of Data Science",
    issuer: "Edusmart",
    image: CertificateImg.src,
    verified: false, // ❌ not verified
  },
  {
    title: "Certificate Of Machine Learning",
    issuer: "Edusmart",
    image: CertificateImg.src,
    verified: true,
  },
  {
    title: "Certificate Of UX Design",
    issuer: "DesignPro",
    image: CertificateImg.src,
    verified: false,
  },
];

export default function Dashboard() {


  return (
    <div className="pt-3">
        <main className="p-3">
          {/* Header Section */}
       

          {/* Profile and Attendance Section */}
          <div className="flex flex-col xl:flex-row gap-4 md:gap-6 mb-8">
        {/* Profile Section */}
        <Card className="xl:w-2/3">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col items-center  sm:items-start">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mb-4">
                  <AvatarImage
                    src={ProfilePic.src}
                    alt="Ram Mohan"
                  />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div className="flex gap-2 mb-4 ">
                  <div className="p-2 bg-blue-100 rounded">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="p-2 bg-red-100 rounded">
                    <Mail className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="p-2 bg-blue-100 rounded">
                    <Twitter className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="p-2 bg-gray-400 rounded">
                    <Github className="h-4 w-4 text-gray-200" />
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, value: "14", label: "Community Services", color: "bg-green-100 text-green-600" },
              { icon: BookOpen, value: "8", label: "Projects", color: "bg-blue-100 text-blue-600" },
              { icon: FileText, value: "3", label: "Publications", color: "bg-teal-100 text-teal-600" },
              { icon: GraduationCap, value: "A+", label: "Grades", color: "bg-green-100 text-green-600" },
            ].map((stat, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Work Experience and Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Work Experience */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-blue-600">My Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { company: "Cognizant, Mumbai", period: "Sep 2018" },
                  { company: "Scope Pvt limited, Mumbai", period: "Sep 2020" },
                  { company: "Creativo, Mumbai", period: "Sep 2021" },
                ].map((exp, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{exp.company}</div>
                      <div className="text-xs text-gray-500">{exp.period}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-blue-600">Education Qualification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { degree: "Cognizant, Mumbai", period: "Sep 2018" },
                  { degree: "Scope Pvt limited, Mumbai", period: "Sep 2020" },
                  { degree: "Creativo, Mumbai", period: "Sep 2021" },
                ].map((edu, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{edu.degree}</div>
                      <div className="text-xs text-gray-500">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Certificates Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Certificates</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="overflow-hidden">
  <div className="relative aspect-[3/2] bg-muted rounded-lg mb-3 overflow-hidden">
    {/* Certificate Image */}
    <img
      src={cert.image || "/placeholder.svg"}
      alt={cert.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
    />

    {/* Verified Icon Overlay */}
    {cert.verified && (
      <div className="absolute top-2 right-2 bg-white rounded-full shadow-md p-1">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
      </div>
    )}
  </div>

  <CardContent className="p-4">
    <h3 className="font-medium text-sm mb-1">{cert.title}</h3>
    <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
    <div className="flex gap-2">
      <Button
        size="sm"
        className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1"
      >
        View
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="text-xs px-3 py-1 bg-transparent"
      >
        View Article
      </Button>
    </div>
  </CardContent>
</Card>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Projects</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "E-commerce Website Redesign", category: "Development", color: "bg-teal-600" },
                { title: "Mobile App Development", category: "Development", color: "bg-teal-700" },
                { title: "Data Analysis Project", category: "Data Analysis", color: "bg-gray-300" },
                { title: "Cloud Infrastructure Setup", category: "Cloud Computing", color: "bg-teal-600" },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`aspect-[4/3] ${project.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{project.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{project.category}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                        View Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Services Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Community Services</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "E-commerce Website Redesign", category: "Development", color: "bg-teal-600" },
                { title: "Mobile App Development", category: "Development", color: "bg-teal-700" },
                { title: "Data Analysis Project", category: "Data Analysis", color: "bg-gray-300" },
                { title: "Cloud Infrastructure Setup", category: "Cloud Computing", color: "bg-teal-600" },
              ].map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`aspect-[4/3] ${service.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{service.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{service.category}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                        View Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conferences, Seminars and Workshops */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Conferences, Seminars and Workshops</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Certificate Of Full Stack Web Development",
                  issuer: "Edusmart",
                  image: "/conference-certificate-web-development.jpg",
                },
                {
                  title: "Certificate Of Data Science",
                  issuer: "Edusmart",
                  image: "/seminar-certificate-data-science.jpg",
                },
                {
                  title: "Certificate Of Machine Learning",
                  issuer: "Edusmart",
                  image: "/workshop-certificate-machine-learning.jpg",
                },
                {
                  title: "Certificate Of UX Design",
                  issuer: "DesignPro",
                  image: "/conference-certificate-ux-design.jpg",
                },
              ].map((cert, index) => (
                <Card key={index} className="overflow-hidden">
                   <div className="aspect-[3/2] bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                        View Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Papers */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Research Papers</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "E-commerce Website Redesign", category: "Development", color: "bg-teal-600" },
                { title: "Mobile App Development", category: "Development", color: "bg-teal-700" },
                { title: "Data Analysis Project", category: "Data Analysis", color: "bg-gray-300" },
                { title: "Cloud Infrastructure Setup", category: "Cloud Computing", color: "bg-teal-600" },
              ].map((paper, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`aspect-[4/3] ${paper.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{paper.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{paper.category}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                        View Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Achievements</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "E-commerce Website Redesign", category: "Development", color: "bg-teal-600" },
                { title: "Mobile App Development", category: "Development", color: "bg-teal-700" },
                { title: "Data Analysis Project", category: "Data Analysis", color: "bg-gray-300" },
                { title: "Cloud Infrastructure Setup", category: "Cloud Computing", color: "bg-teal-600" },
              ].map((achievement, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`aspect-[4/3] ${achievement.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1">{achievement.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{achievement.category}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs px-3 py-1">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs px-3 py-1 bg-transparent">
                        View Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
  )
}
