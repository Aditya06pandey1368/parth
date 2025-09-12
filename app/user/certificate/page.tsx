"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2, Plus, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const certificates = [
  {
    id: 1,
    title: "Certificate Of Full Stack Web Development",
    issuer: "Tech Academy",
    date: "2024-01-15",
    status: "verified",
    image: "/full-stack-web-development-certificate.jpg",
  },
  {
    id: 2,
    title: "Certificate of Data Science",
    issuer: "Data Institute",
    date: "2024-02-20",
    status: "verified",
    image: "/data-science-certificate.png",
  },
  {
    id: 3,
    title: "Certificate Of Machine Learning",
    issuer: "AI Academy",
    date: "2024-03-10",
    status: "pending",
    image: "/machine-learning-certificate.jpg",
  },
  {
    id: 4,
    title: "Certificate of UX Design",
    issuer: "Design School",
    date: "2024-04-05",
    status: "verified",
    image: "/ux-design-certificate.jpg",
  },
]

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an e-commerce platform with modern UI/UX",
    status: "completed",
    image: "/ecommerce-website-design.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile application for task management",
    status: "in-progress",
    image: "/mobile-app-development.png",
  },
  {
    id: 3,
    title: "Data Analysis Project",
    description: "Statistical analysis of customer behavior patterns",
    status: "completed",
    image: "/data-analysis-dashboard.png",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Setup",
    description: "AWS cloud infrastructure for scalable web applications",
    status: "completed",
    image: "/cloud-infrastructure-diagram.png",
  },
]

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Certificates & Projects</h1>
          <p className="text-muted-foreground">Manage your academic achievements and project portfolio</p>
        </div>
        <Link href="/certificates/upload">
          <Button className="gap-2 bg-yellow-400 hover:bg-yellow-500 text-black">
            <Plus className="h-4 w-4" />
            Add Certificate
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Certificates Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCertificates.map((cert) => (
            <Card key={cert.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[3/2] bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={cert.status === "verified" ? "default" : "secondary"}
                    className={cn(
                      cert.status === "verified" && "bg-green-100 text-green-800 hover:bg-green-100",
                      cert.status === "pending" && "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
                    )}
                  >
                    {cert.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-yellow-100 hover:text-yellow-700">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:bg-red-100">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={project.status === "completed" ? "default" : "secondary"}
                    className={cn(
                      project.status === "completed" && "bg-green-100 text-green-800 hover:bg-green-100",
                      project.status === "in-progress" && "bg-blue-100 text-blue-800 hover:bg-blue-100",
                    )}
                  >
                    {project.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-yellow-100 hover:text-yellow-700">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:bg-red-100">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
