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
    // Handle form submission
    console.log("Certificate data:", formData)
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/certificates">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Certificates
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upload Certificate</h1>
        <p className="text-muted-foreground">Update your personal information and social links.</p>
      </div>

      {/* Upload Form */}
      <Card>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Area */}
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-yellow-400 transition-colors bg-gray-50">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3">select your file or drag and drop</p>
                      <Button type="button" className="bg-blue-400 hover:bg-blue-500 text-white px-6">
                        Browse file
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-gray-400">
                    Certificate Title :
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1 bg-gray-100 border-gray-200"
                    placeholder="Enter certificate title"
                  />
                </div>

                <div>
                  <Label htmlFor="issuer" className="text-sm font-medium text-gray-400">
                    Issued By :
                  </Label>
                  <Input
                    id="issuer"
                    value={formData.issuer}
                    onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                    className="mt-1 bg-gray-100 border-gray-200"
                    placeholder="Enter issuing organization"
                  />
                </div>

                <div>
                  <Label htmlFor="clubs" className="text-sm font-medium text-gray-400">
                    Clubs :
                  </Label>
                  <Input
                    id="clubs"
                    value={formData.clubs}
                    onChange={(e) => setFormData({ ...formData, clubs: e.target.value })}
                    className="mt-1 bg-gray-100 border-gray-200"
                    placeholder="Related clubs or organizations"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="writeExperience"
                      checked={formData.writeExperience}
                      onCheckedChange={(checked) => setFormData({ ...formData, writeExperience: checked as boolean })}
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
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
