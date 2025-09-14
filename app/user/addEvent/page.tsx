"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Bold, Italic, Underline, Strikethrough, Type, FileText, X } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectDocumentation() {
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [supportingDoc, setSupportingDoc] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSupportingDragging, setIsSupportingDragging] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const supportingFileInputRef = useRef<HTMLInputElement>(null)

  const formatText = (command: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)

    let formattedText = ""
    let newCursorPos = start

    switch (command) {
      case "bold":
        if (selectedText) {
          formattedText = `**${selectedText}**`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "****"
          newCursorPos = start + 2 // Position cursor between the asterisks
        }
        break
      case "italic":
        if (selectedText) {
          formattedText = `*${selectedText}*`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "**"
          newCursorPos = start + 1
        }
        break
      case "underline":
        if (selectedText) {
          formattedText = `<u>${selectedText}</u>`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "<u></u>"
          newCursorPos = start + 3
        }
        break
      case "strikethrough":
        if (selectedText) {
          formattedText = `~~${selectedText}~~`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "~~~~"
          newCursorPos = start + 2
        }
        break
      case "h1":
        if (selectedText) {
          formattedText = `# ${selectedText}`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "# "
          newCursorPos = start + 2
        }
        break
      case "h2":
        if (selectedText) {
          formattedText = `## ${selectedText}`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = "## "
          newCursorPos = start + 3
        }
        break
      default:
        formattedText = selectedText
        newCursorPos = end
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end)
    setContent(newContent)

    setTimeout(() => {
      textarea.focus()
      if (selectedText) {
        // If text was selected, place cursor at the end of formatted text
        textarea.setSelectionRange(newCursorPos, newCursorPos)
      } else {
        // If no text was selected, place cursor in the middle of formatting marks
        textarea.setSelectionRange(newCursorPos, newCursorPos)
      }
    }, 10)
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    setUploadedFiles((prev) => [...prev, ...files])
  }, [])

  const handleSupportingDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsSupportingDragging(true)
  }, [])

  const handleSupportingDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsSupportingDragging(false)
  }, [])

  const handleSupportingDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsSupportingDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      setSupportingDoc(files[0])
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleSupportingFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setSupportingDoc(files[0])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const removeSupportingDoc = () => {
    setSupportingDoc(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-stone-50 dark:bg-slate-900 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content Editor */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-slate-100">Add Event</h1>
              <p className="text-sm text-gray-600 dark:text-slate-400">Update your personal information and social links.</p>
            </div>

            <div className="space-y-4">
              <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <Input
                  placeholder="Your Title Here..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg font-medium h-12 bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-400"
                />
              </motion.div>

              {/* Rich Text Editor Toolbar */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-1 p-2 bg-white border border-gray-200 rounded-md dark:bg-slate-800 dark:border-slate-700"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("bold")}
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("italic")}
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("underline")}
                  >
                    <Underline className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("strikethrough")}
                  >
                    <Strikethrough className="h-4 w-4" />
                  </Button>
                </motion.div>
                <div className="w-px h-6 bg-gray-200 dark:bg-slate-600 mx-2" />
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("h1")}
                  >
                    H1
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                    onClick={() => formatText("h2")}
                  >
                    H2
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-700">
                    <Type className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.005 }} transition={{ duration: 0.2 }}>
                <Textarea
                  ref={textareaRef}
                  placeholder="Start writing your article here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] bg-white border-gray-200 resize-none font-mono text-sm leading-relaxed dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Sidebar Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* File Upload Card */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Card
                className={cn(
                  "p-6 border-2 border-dashed bg-white transition-colors cursor-pointer dark:bg-slate-800",
                  isDragging ? "border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20" : "border-gray-300 dark:border-slate-600",
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <motion.div
                    animate={{
                      y: isDragging ? -5 : 0,
                      scale: isDragging ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Upload
                      className={cn("h-8 w-8 transition-colors", isDragging ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-slate-500")}
                    />
                  </motion.div>
                  <p className="text-sm font-medium text-gray-600 dark:text-slate-300">Drag & Drop Event Image</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">or click to browse</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </Card>
            </motion.div>

            <AnimatePresence>
              {uploadedFiles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  {uploadedFiles.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md dark:bg-slate-800 dark:border-slate-700"
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                        <span className="text-sm text-gray-700 dark:text-slate-300 truncate">{file.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)} className="h-6 w-6 p-0 dark:text-slate-300 dark:hover:bg-slate-700">
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Fields */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="event-title" className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Event Title
                </Label>
                <Input id="event-title" placeholder="Enter event title" className="bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-400" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clubs" className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Clubs
                </Label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100">
                    <SelectValue placeholder="Select club" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100">
                    <SelectItem value="tech">Tech Club</SelectItem>
                    <SelectItem value="sports">Sports Club</SelectItem>
                    <SelectItem value="arts">Arts Club</SelectItem>
                    <SelectItem value="music">Music Club</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-slate-300">Date & Time</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 dark:bg-slate-800 dark:border-slate-700" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="dark:bg-slate-800 dark:text-slate-100" />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue" className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Venue
                </Label>
                <Input id="venue" placeholder="Enter venue" className="bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-400" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="send-requests" className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Send Request's
                </Label>
                <Input id="send-requests" placeholder="Enter request details" className="bg-white border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-400" />
              </div>

              {/* Supporting Document Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-slate-300">Upload Supporting Document</Label>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card
                    className={cn(
                      "p-4 border-2 border-dashed bg-white transition-colors cursor-pointer dark:bg-slate-800",
                      isSupportingDragging ? "border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20" : "border-gray-300 dark:border-slate-600",
                    )}
                    onDragOver={handleSupportingDragOver}
                    onDragLeave={handleSupportingDragLeave}
                    onDrop={handleSupportingDrop}
                    onClick={() => supportingFileInputRef.current?.click()}
                  >
                    <div className="flex items-center justify-center text-center">
                      <motion.div
                        animate={{
                          scale: isSupportingDragging ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Upload
                          className={cn(
                            "h-5 w-5 mr-2 transition-colors",
                            isSupportingDragging ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-slate-500",
                          )}
                        />
                      </motion.div>
                      <p className="text-xs text-gray-500 dark:text-slate-400">Choose file or drag here</p>
                    </div>
                    <input
                      ref={supportingFileInputRef}
                      type="file"
                      onChange={handleSupportingFileSelect}
                      className="hidden"
                    />
                  </Card>
                </motion.div>

                <AnimatePresence>
                  {supportingDoc && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md dark:bg-slate-800 dark:border-slate-700"
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500 dark:text-slate-400" />
                        <span className="text-sm text-gray-700 dark:text-slate-300 truncate">{supportingDoc.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={removeSupportingDoc} className="h-6 w-6 p-0 dark:text-slate-300 dark:hover:bg-slate-700">
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Send Request Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
                Send Request
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}