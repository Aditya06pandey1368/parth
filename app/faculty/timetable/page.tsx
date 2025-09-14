"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Edit, X, FileText, ImageIcon, Plus, Trash2 } from "lucide-react"

interface FacultyDetails {
  name: string
  branch: string
  year: string
  session: string
  specialization: string
}

interface TimetableFile {
  file: File
  url: string
  type: "pdf" | "image"
}

interface SavedTimetable {
  id: string
  facultyDetails: FacultyDetails
  timetableFile: TimetableFile
  createdAt: Date
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
}

export default function FacultyTimetablePage() {
  const [facultyDetails, setFacultyDetails] = useState<FacultyDetails>({
    name: "",
    branch: "",
    year: "",
    session: "",
    specialization: "",
  })

  const [showModal, setShowModal] = useState(false)
  const [timetableFile, setTimetableFile] = useState<TimetableFile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const [savedTimetables, setSavedTimetables] = useState<SavedTimetable[]>([])
  const [selectedBranch, setSelectedBranch] = useState<string>("")
  const [currentTimetableId, setCurrentTimetableId] = useState<string>("")

  const branches = [
    "Computer Science",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (facultyDetails.name && facultyDetails.branch && facultyDetails.year && facultyDetails.session) {
      setShowModal(true)
    }
  }

  const handleFileUpload = (file: File) => {
    const url = URL.createObjectURL(file)
    const type: "pdf" | "image" = file.type.includes("pdf") ? "pdf" : "image"
    const newTimetableFile: TimetableFile = { file, url, type }
    setTimetableFile(newTimetableFile)

    const newTimetable: SavedTimetable = {
      id: Date.now().toString(),
      facultyDetails: { ...facultyDetails },
      timetableFile: newTimetableFile,
      createdAt: new Date(),
    }

    setSavedTimetables((prev) => [...prev, newTimetable])
    setCurrentTimetableId(newTimetable.id)
    setShowModal(false)
  }

  const loadTimetable = (timetableId: string) => {
    const timetable = savedTimetables.find((t) => t.id === timetableId)
    if (timetable) {
      setFacultyDetails(timetable.facultyDetails)
      setTimetableFile(timetable.timetableFile)
      setCurrentTimetableId(timetableId)
    }
  }

  const deleteTimetable = (timetableId: string) => {
    setSavedTimetables((prev) => prev.filter((t) => t.id !== timetableId))
    if (currentTimetableId === timetableId) {
      resetForm()
    }
  }

  const getTimetablesByBranch = (branch: string) => {
    return savedTimetables.filter((t) => t.facultyDetails.branch === branch)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0])
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setShowModal(true)
  }

  const resetForm = () => {
    setFacultyDetails({
      name: "",
      branch: "",
      year: "",
      session: "",
      specialization: "",
    })
    setTimetableFile(null)
    setIsEditing(false)
    setCurrentTimetableId("")
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-8" variants={headerVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Faculty Timetable Management
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Upload and manage faculty timetables by branch
          </motion.p>
        </motion.div>

        {savedTimetables.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card className="shadow-lg mb-6">
                <CardHeader className="bg-yellow-400 text-gray-900">
                  <CardTitle className="text-xl">Manage Saved Timetables</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                      <div className="flex-1">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">Select Branch</Label>
                        <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                          <SelectTrigger className="border-gray-300 focus:border-yellow-400">
                            <SelectValue placeholder="Choose a branch to view timetables" />
                          </SelectTrigger>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch} value={branch}>
                                {branch} ({getTimetablesByBranch(branch).length})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button onClick={resetForm} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6">
                            <Plus className="w-4 h-4 mr-2" />
                            Add New
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {selectedBranch && (
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-medium text-gray-700">
                          {selectedBranch} Timetables ({getTimetablesByBranch(selectedBranch).length})
                        </h4>
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {getTimetablesByBranch(selectedBranch).map((timetable, index) => (
                            <motion.div
                              key={timetable.id}
                              variants={itemVariants}
                              whileHover={{ scale: 1.02, y: -2 }}
                              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                                currentTimetableId === timetable.id
                                  ? "border-yellow-400 bg-yellow-50"
                                  : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <motion.div
                                  className="flex-1"
                                  onClick={() => loadTimetable(timetable.id)}
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <h5 className="font-medium text-gray-900 truncate">
                                    {timetable.facultyDetails.name}
                                  </h5>
                                  <p className="text-sm text-gray-600">
                                    {timetable.facultyDetails.year} • {timetable.facultyDetails.session}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {timetable.createdAt.toLocaleDateString()}
                                  </p>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                  <Button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      deleteTimetable(timetable.id)
                                    }}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </motion.div>
                              </div>
                              <div className="flex items-center text-xs text-gray-500">
                                {timetable.timetableFile.type === "pdf" ? (
                                  <FileText className="w-3 h-3 mr-1" />
                                ) : (
                                  <ImageIcon className="w-3 h-3 mr-1" />
                                )}
                                {timetable.timetableFile.file.name}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {!timetableFile ? (
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <motion.div whileHover="hover" variants={cardHoverVariants}>
              <Card className="shadow-lg">
                <CardHeader className="bg-yellow-400 text-gray-900">
                  <CardTitle className="text-xl">Faculty Basic Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {[
                        {
                          id: "name",
                          label: "Faculty Name *",
                          placeholder: "Enter faculty name",
                          value: facultyDetails.name,
                          key: "name",
                        },
                        {
                          id: "year",
                          label: "Academic Year *",
                          placeholder: "e.g., 2024-25",
                          value: facultyDetails.year,
                          key: "year",
                        },
                        {
                          id: "session",
                          label: "Session *",
                          placeholder: "e.g., Odd Semester",
                          value: facultyDetails.session,
                          key: "session",
                        },
                      ].map((field, index) => (
                        <motion.div key={field.id} className="space-y-2" variants={itemVariants} custom={index}>
                          <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                            {field.label}
                          </Label>
                          <Input
                            id={field.id}
                            type="text"
                            value={field.value}
                            onChange={(e) => setFacultyDetails((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            placeholder={field.placeholder}
                            required
                            className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                          />
                        </motion.div>
                      ))}

                      <motion.div className="space-y-2" variants={itemVariants} custom={1}>
                        <Label htmlFor="branch" className="text-sm font-medium text-gray-700">
                          Branch *
                        </Label>
                        <Select
                          value={facultyDetails.branch}
                          onValueChange={(value) => setFacultyDetails((prev) => ({ ...prev, branch: value }))}
                          required
                        >
                          <SelectTrigger className="border-gray-300 focus:border-yellow-400">
                            <SelectValue placeholder="Select branch" />
                          </SelectTrigger>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch} value={branch}>
                                {branch}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div className="space-y-2 md:col-span-2" variants={itemVariants} custom={4}>
                        <Label htmlFor="specialization" className="text-sm font-medium text-gray-700">
                          Specialization
                        </Label>
                        <Input
                          id="specialization"
                          type="text"
                          value={facultyDetails.specialization}
                          onChange={(e) => setFacultyDetails((prev) => ({ ...prev, specialization: e.target.value }))}
                          placeholder="e.g., Machine Learning, Data Structures"
                          className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="flex justify-end pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-2 font-medium"
                        >
                          Submit & Upload Timetable
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            {/* Faculty Details Display */}
            <motion.div variants={itemVariants}>
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="shadow-lg">
                  <CardHeader className="bg-yellow-400 text-gray-900 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{facultyDetails.name}</CardTitle>
                      <p className="text-sm opacity-90">
                        {facultyDetails.branch} • {facultyDetails.year}
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={handleEdit}
                        variant="outline"
                        size="sm"
                        className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400 bg-transparent"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div>
                        <span className="font-medium text-gray-700">Session:</span>
                        <p className="text-gray-600">{facultyDetails.session}</p>
                      </div>
                      {facultyDetails.specialization && (
                        <div className="md:col-span-3">
                          <span className="font-medium text-gray-700">Specialization:</span>
                          <p className="text-gray-600">{facultyDetails.specialization}</p>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Timetable Display */}
            <motion.div variants={itemVariants}>
              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="shadow-lg">
                  <CardHeader className="bg-gray-100">
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      {timetableFile.type === "pdf" ? (
                        <FileText className="w-5 h-5 mr-2 text-red-600" />
                      ) : (
                        <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
                      )}
                      Faculty Timetable
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <motion.div
                      className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {timetableFile.type === "pdf" ? (
                        <iframe
                          src={timetableFile.url}
                          className="w-full h-96 md:h-[600px]"
                          title="Faculty Timetable PDF"
                        />
                      ) : (
                        <img
                          src={timetableFile.url || "/placeholder.svg"}
                          alt="Faculty Timetable"
                          className="w-full h-auto max-h-[600px] object-contain"
                        />
                      )}
                    </motion.div>
                    <motion.div
                      className="mt-4 flex justify-between items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <p className="text-sm text-gray-600">
                        File: {timetableFile.file.name} ({(timetableFile.file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={resetForm}
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                        >
                          Reset All
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Upload Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isEditing ? "Update Timetable" : "Upload Timetable"}
                  </h3>
                  <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={() => setShowModal(false)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* ... existing modal content with enhanced animations ... */}

                <motion.div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-gray-300 hover:border-yellow-400 hover:bg-yellow-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  whileHover={{ scale: 1.02 }}
                  animate={dragActive ? { scale: 1.05 } : { scale: 1 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600 mb-2">Drag and drop your timetable file here, or</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0])
                      }
                    }}
                    className="hidden"
                    id="file-upload"
                  />
                  <motion.label
                    htmlFor="file-upload"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md cursor-pointer font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse Files
                  </motion.label>
                  <p className="text-xs text-gray-500 mt-2">Supports PDF, JPG, PNG (Max 10MB)</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
