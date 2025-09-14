"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function UploadCertificatePage() {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    clubs: "",
    experience: "",
    writeExperience: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Certificate data:", formData)
  }

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/user/certificate">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Certificates
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-2">Upload Certificate</h1>
        <p className="text-muted-foreground">Update your personal information and social links.</p>
      </motion.div>

      {/* Upload Form */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upload Area */}
                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-yellow-400 transition-colors bg-gray-50">
                    <motion.div
                      className="flex flex-col items-center justify-center space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">select your file or drag and drop</p>
                        <Button type="button" className="bg-blue-400 hover:bg-blue-500 text-white px-6">
                          Browse file
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Form Fields */}
                <motion.div
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                >
                  {[
                    {
                      id: "title",
                      label: "Certificate Title :",
                      value: formData.title,
                      placeholder: "Enter certificate title",
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, title: e.target.value }),
                    },
                    {
                      id: "issuer",
                      label: "Issued By :",
                      value: formData.issuer,
                      placeholder: "Enter issuing organization",
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, issuer: e.target.value }),
                    },
                    {
                      id: "clubs",
                      label: "Clubs :",
                      value: formData.clubs,
                      placeholder: "Related clubs or organizations",
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, clubs: e.target.value }),
                    },
                  ].map((field, idx) => (
                    <motion.div
                      key={field.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-400">
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        value={field.value}
                        onChange={field.onChange}
                        className="mt-1 bg-gray-100 border-gray-200"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}

                  {/* Experience Checkbox + Textarea */}
                  <motion.div
                    className="space-y-3"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="writeExperience"
                        checked={formData.writeExperience}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, writeExperience: checked as boolean })
                        }
                      />
                      <Label htmlFor="writeExperience" className="text-sm font-medium text-gray-400">
                        Want to write Experience?
                      </Label>
                    </div>

                    {formData.writeExperience && (
                      <Textarea
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="Describe your experience..."
                        className="bg-gray-100 border-gray-200 min-h-[120px]"
                        rows={6}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div
                className="flex justify-end mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2">
                  Save Changes
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
