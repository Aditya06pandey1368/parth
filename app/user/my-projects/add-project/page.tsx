"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  ImageIcon,
  Upload,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectDocumentationPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("public")
  const [publishSchedule, setPublishSchedule] = useState("immediately")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  const contentRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const applyFormatting = useCallback(
    (command: string, value?: string) => {
      const textarea = contentRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = content.substring(start, end)
      const beforeText = content.substring(0, start)
      const afterText = content.substring(end)

      let formattedText = ""
      let newCursorPos = start

      switch (command) {
        case "bold":
          formattedText = `**${selectedText || "bold text"}**`
          newCursorPos = selectedText ? end + 4 : start + 2
          break
        case "italic":
          formattedText = `*${selectedText || "italic text"}*`
          newCursorPos = selectedText ? end + 2 : start + 1
          break
        case "underline":
          formattedText = `<u>${selectedText || "underlined text"}</u>`
          newCursorPos = selectedText ? end + 7 : start + 3
          break
        case "strikethrough":
          formattedText = `~~${selectedText || "strikethrough text"}~~`
          newCursorPos = selectedText ? end + 4 : start + 2
          break
        case "link":
          const url = value || "https://example.com"
          formattedText = `[${selectedText || "link text"}](${url})`
          newCursorPos = selectedText ? end + url.length + 4 : start + 1
          break
        case "h1":
          formattedText = `# ${selectedText || "Heading 1"}`
          newCursorPos = selectedText ? end + 2 : start + 2
          break
        case "h2":
          formattedText = `## ${selectedText || "Heading 2"}`
          newCursorPos = selectedText ? end + 3 : start + 3
          break
        case "ul":
          formattedText = `- ${selectedText || "List item"}`
          newCursorPos = selectedText ? end + 2 : start + 2
          break
        case "ol":
          formattedText = `1. ${selectedText || "List item"}`
          newCursorPos = selectedText ? end + 3 : start + 3
          break
        case "quote":
          formattedText = `> ${selectedText || "Quote"}`
          newCursorPos = selectedText ? end + 2 : start + 2
          break
        case "code":
          formattedText = `\`${selectedText || "code"}\``
          newCursorPos = selectedText ? end + 2 : start + 1
          break
        default:
          return
      }

      const newContent = beforeText + formattedText + afterText
      setContent(newContent)

      // Restore cursor position
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(newCursorPos, newCursorPos)
      }, 0)
    },
    [content],
  )

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setFeaturedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        setFeaturedImage(file)
        const reader = new FileReader()
        reader.onload = (e) => {
          setImagePreview(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }, [])

  const removeImage = useCallback(() => {
    setFeaturedImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }, [])

  const saveDocument = useCallback(async () => {
    setIsSaving(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLastSaved(new Date())
      console.log("[v0] Document saved:", { title, content, status, category, tags })
    } catch (error) {
      console.error("[v0] Save failed:", error)
    } finally {
      setIsSaving(false)
    }
  }, [title, content, status, category, tags])

  const publishDocument = useCallback(async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please add a title and content before publishing.")
      return
    }

    setIsPublishing(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("[v0] Document published:", {
        title,
        content,
        status,
        publishSchedule,
        category,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        featuredImage: featuredImage?.name,
      })
      alert("Document published successfully!")
    } catch (error) {
      console.error("[v0] Publish failed:", error)
      alert("Failed to publish document. Please try again.")
    } finally {
      setIsPublishing(false)
    }
  }, [title, content, status, publishSchedule, category, tags, featuredImage])

  useState(() => {
    const interval = setInterval(() => {
      if (title.trim() || content.trim()) {
        saveDocument()
      }
    }, 30000) // Auto-save every 30 seconds

    return () => clearInterval(interval)
  })

  const toolbarButtons = [
    { icon: Bold, label: "Bold", command: "bold" },
    { icon: Italic, label: "Italic", command: "italic" },
    { icon: Underline, label: "Underline", command: "underline" },
    { icon: Strikethrough, label: "Strikethrough", command: "strikethrough" },
    { icon: Link, label: "Link", command: "link" },
    { icon: Heading1, label: "H1", command: "h1" },
    { icon: Heading2, label: "H2", command: "h2" },
    { icon: List, label: "Unordered List", command: "ul" },
    { icon: ListOrdered, label: "Ordered List", command: "ol" },
    { icon: Quote, label: "Blockquote", command: "quote" },
    { icon: Code, label: "Code", command: "code" },
  ]

  return (
    <div className="min-h-screen bg-[#FFFBF5] dark:bg-gray-900">
  <motion.div
    className="p-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#333333] dark:text-gray-100">
            Project Documentation
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#888888] dark:text-gray-400">
              Update your personal information and social links.
            </p>
            {lastSaved && (
              <p className="text-xs text-[#888888] dark:text-gray-400">
                Last saved: {lastSaved.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        {/* Title Input */}
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your Title Here..."
            className="w-full text-4xl font-bold border-none outline-none bg-transparent transition-all duration-200 focus:ring-2 focus:ring-yellow-400/20 rounded-lg p-2 -ml-2 text-[#333333] dark:text-gray-100 placeholder-[#CCCCCC] dark:placeholder-gray-500"
            style={{
              fontSize: "2.25rem",
            }}
          />
        </div>

        {/* Rich Text Editor Toolbar */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 border border-[#EAEAEA] dark:border-gray-700">
          <div className="flex flex-wrap gap-1">
            {toolbarButtons.map((button, index) => (
              <motion.button
                key={index}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={button.label}
                onClick={() => applyFormatting(button.command)}
              >
                <button.icon size={16} className="text-[#333333] dark:text-gray-100" />
              </motion.button>
            ))}
            <motion.button
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Insert Image"
              onClick={() => {
                const url = prompt("Enter image URL:")
                if (url) {
                  applyFormatting("link", url)
                }
              }}
            >
              <ImageIcon size={16} className="text-[#333333] dark:text-gray-100" />
            </motion.button>
          </div>
        </div>

        {/* Main Text Area */}
        <div className="flex-1">
          <textarea
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your article here..."
            className="w-full h-96 p-4 border rounded-lg resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400/50 bg-[#FEFEFE] dark:bg-gray-800 border-[#EAEAEA] dark:border-gray-700 text-[#333333] dark:text-gray-100"
          />
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="space-y-6">
        {/* Publish Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="w-full text-white font-medium py-3 rounded-lg shadow-sm bg-[#D4A017] hover:bg-[#b88c14] dark:bg-yellow-600 dark:hover:bg-yellow-500"
            onClick={publishDocument}
            disabled={isPublishing}
          >
            {isPublishing ? "Publishing..." : "Publish"}
          </Button>
        </motion.div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          <Accordion type="single" defaultValue="status" collapsible>
            <AccordionItem value="status" className="border rounded-lg border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">Status & Visibility</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3 my-2">
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-full border-[#EAEAEA] dark:border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={publishSchedule} onValueChange={setPublishSchedule}>
                    <SelectTrigger className="w-full border-[#EAEAEA] dark:border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Publish immediately</SelectItem>
                      <SelectItem value="scheduled">Schedule for later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="categories" className="border rounded-lg my-2 border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">Categories</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full border-[#EAEAEA] dark:border-gray-700">
                    <SelectValue placeholder="Select categories..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documentation">Documentation</SelectItem>
                    <SelectItem value="tutorial">Tutorial</SelectItem>
                    <SelectItem value="guide">Guide</SelectItem>
                    <SelectItem value="reference">Reference</SelectItem>
                    <SelectItem value="api">API</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tags" className="border rounded-lg my-2 border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">Tags</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Add tags separated by commas..."
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400/20 border-[#EAEAEA] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333333] dark:text-gray-100 placeholder-[#AAAAAA] dark:placeholder-gray-500"
                />
                {tags && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {tags.split(",").map((tag, index) => {
                      const trimmedTag = tag.trim()
                      return trimmedTag ? (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded bg-[#D4A017] text-white dark:bg-yellow-600"
                        >
                          {trimmedTag}
                        </span>
                      ) : null
                    })}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="github" className="border rounded-lg my-2 border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">GitHub Link</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <input
                  type="url"
                  placeholder="Add GitHub repository link..."
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400/20 border-[#EAEAEA] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333333] dark:text-gray-100 placeholder-[#AAAAAA] dark:placeholder-gray-500"
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project url" className="border rounded-lg my-2 border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">Deployed Project Link</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <input
                  type="url"
                  placeholder="Add deployed project link..."
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-yellow-400/20 border-[#EAEAEA] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333333] dark:text-gray-100 placeholder-[#AAAAAA] dark:placeholder-gray-500"
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="featured" className="border rounded-lg my-2 border-[#EAEAEA] dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <span className="text-[#333333] dark:text-gray-100">Featured Image</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Featured image preview"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={12} />
                    </button>
                    <p className="text-xs mt-2 text-[#888888] dark:text-gray-400">
                      {featuredImage?.name}
                    </p>
                  </div>
                ) : (
                  <div
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-yellow-400 transition-colors border-[#EAEAEA] dark:border-gray-700"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <Upload size={24} className="mx-auto mb-2 text-[#888888] dark:text-gray-400" />
                    <p className="text-sm text-[#888888] dark:text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs mt-1 text-[#AAAAAA] dark:text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </motion.div>
</div>

  )
}
