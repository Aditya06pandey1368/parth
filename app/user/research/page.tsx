"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Eye, Download, ExternalLink, Calendar, Users, BookOpen, Upload, X } from "lucide-react"

const researchPapers = [
  {
    id: 1,
    title: "Certificate Of Full Stack Web Development",
    authors: ["Ram Mohan", "Dr. Smith"],
    journal: "International Journal of Computer Science",
    year: 2024,
    status: "published",
    citations: 15,
    image: "/research-paper-1.jpg",
    abstract: "This paper presents a comprehensive study on full-stack web development methodologies...",
  },
  {
    id: 2,
    title: "Certificate of Data Science",
    authors: ["Ram Mohan", "Prof. Johnson"],
    journal: "Data Science Quarterly",
    year: 2024,
    status: "under-review",
    citations: 8,
    image: "/research-paper-2.jpg",
    abstract: "An analysis of modern data science techniques and their applications in industry...",
  },
  {
    id: 3,
    title: "Certificate Of Machine Learning",
    authors: ["Ram Mohan"],
    journal: "AI Research Journal",
    year: 2023,
    status: "published",
    citations: 23,
    image: "/research-paper-3.jpg",
    abstract: "Exploring advanced machine learning algorithms for predictive analytics...",
  },
  {
    id: 4,
    title: "Certificate of UX Design",
    authors: ["Ram Mohan", "Dr. Wilson"],
    journal: "Design Studies",
    year: 2023,
    status: "published",
    citations: 12,
    image: "/research-paper-4.jpg",
    abstract: "User experience design principles for modern web applications...",
  },
]

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    type: "Web Development",
    status: "completed",
    duration: "6 months",
    team: 4,
    image: "/project-ecommerce.jpg",
    description: "Complete redesign of an e-commerce platform with modern UI/UX principles and improved performance.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    type: "Mobile Development",
    status: "in-progress",
    duration: "4 months",
    team: 3,
    image: "/project-mobile.jpg",
    description: "Cross-platform mobile application for task management with real-time collaboration features.",
  },
  {
    id: 3,
    title: "Data Analysis Project",
    type: "Data Science",
    status: "completed",
    duration: "3 months",
    team: 2,
    image: "/project-data.jpg",
    description: "Statistical analysis of customer behavior patterns using machine learning algorithms.",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Setup",
    type: "DevOps",
    status: "completed",
    duration: "2 months",
    team: 5,
    image: "/project-cloud.jpg",
    description: "AWS cloud infrastructure setup for scalable web applications with automated deployment.",
  },
]

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("papers")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    journal: "",
    year: "",
    status: "",
    abstract: "",
    doi: "",
    keywords: "",
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const filteredPapers = researchPapers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleSubmit = () => {
    console.log("Form data:", formData)
    console.log("Uploaded file:", uploadedFile)
    setIsModalOpen(false)
    setFormData({
      title: "",
      authors: "",
      journal: "",
      year: "",
      status: "",
      abstract: "",
      doi: "",
      keywords: "",
    })
    setUploadedFile(null)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Research Papers</h1>
          <p className="text-muted-foreground">Explore your academic publications and research projects</p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-yellow-400 text-black hover:bg-yellow-500">
              <Plus className="h-4 w-4" />
              Add Research Paper
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Research Paper</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
              {/* Left Column - Paper Upload */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload" className="text-sm font-medium">
                    Upload Research Paper
                  </Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 mb-2">Select your file or drag and drop</p>
                    <p className="text-xs text-gray-500 mb-4">PDF files only</p>
                    <input id="file-upload" type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      Browse File
                    </Button>
                    {uploadedFile && (
                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-center justify-between">
                        <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => setUploadedFile(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Paper Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Paper Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter paper title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="authors">Authors *</Label>
                  <Input
                    id="authors"
                    placeholder="Enter authors (comma separated)"
                    value={formData.authors}
                    onChange={(e) => handleInputChange("authors", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="journal">Journal/Conference *</Label>
                  <Input
                    id="journal"
                    placeholder="Enter journal or conference name"
                    value={formData.journal}
                    onChange={(e) => handleInputChange("journal", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year">Publication Year *</Label>
                    <Input
                      id="year"
                      type="number"
                      placeholder="2024"
                      value={formData.year}
                      onChange={(e) => handleInputChange("year", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status *</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="under-review">Under Review</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="accepted">Accepted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="doi">DOI (Optional)</Label>
                  <Input
                    id="doi"
                    placeholder="10.1000/xyz123"
                    value={formData.doi}
                    onChange={(e) => handleInputChange("doi", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="machine learning, AI, data science"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange("keywords", e.target.value)}
                  />
                </div>
              </div>

              {/* Full Width - Abstract */}
              <div className="lg:col-span-2">
                <Label htmlFor="abstract">Abstract *</Label>
                <Textarea
                  id="abstract"
                  placeholder="Enter paper abstract or summary..."
                  rows={6}
                  value={formData.abstract}
                  onChange={(e) => handleInputChange("abstract", e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="button" className="bg-yellow-400 text-black hover:bg-yellow-500" onClick={handleSubmit}>
                Save Research Paper
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search papers and projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="papers">Research Papers</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="papers" className="space-y-6">
          {/* Research Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPapers.map((paper) => (
              <Card key={paper.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-[3/4] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={paper.image || "/placeholder.svg"}
                      alt={paper.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {paper.authors.join(", ")} • {paper.year}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">{paper.journal}</p>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={paper.status === "published" ? "default" : "secondary"}
                      className={
                        paper.status === "published"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {paper.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{paper.citations} citations</span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3" />
                      {project.type}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {project.team} team members
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={project.status === "completed" ? "default" : "secondary"}
                      className={
                        project.status === "completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      }
                    >
                      {project.status}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{researchPapers.length}</p>
                <p className="text-sm text-muted-foreground">Total Papers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {researchPapers.reduce((sum, paper) => sum + paper.citations, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Citations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{projects.length}</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <ExternalLink className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  {researchPapers.filter((p) => p.status === "published").length}
                </p>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
