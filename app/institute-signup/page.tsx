"use client"

import type React from "react"

import { motion } from "framer-motion"
import { UploadCloud, X, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from "react"

const countries = [
  { value: "afghanistan", label: "Afghanistan" },
  { value: "albania", label: "Albania" },
  { value: "algeria", label: "Algeria" },
  { value: "andorra", label: "Andorra" },
  { value: "angola", label: "Angola" },
  { value: "antigua-and-barbuda", label: "Antigua and Barbuda" },
  { value: "argentina", label: "Argentina" },
  { value: "armenia", label: "Armenia" },
  { value: "australia", label: "Australia" },
  { value: "austria", label: "Austria" },
  { value: "azerbaijan", label: "Azerbaijan" },
  { value: "bahamas", label: "Bahamas" },
  { value: "bahrain", label: "Bahrain" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "barbados", label: "Barbados" },
  { value: "belarus", label: "Belarus" },
  { value: "belgium", label: "Belgium" },
  { value: "belize", label: "Belize" },
  { value: "benin", label: "Benin" },
  { value: "bhutan", label: "Bhutan" },
  { value: "bolivia", label: "Bolivia" },
  { value: "bosnia-and-herzegovina", label: "Bosnia and Herzegovina" },
  { value: "botswana", label: "Botswana" },
  { value: "brazil", label: "Brazil" },
  { value: "brunei", label: "Brunei" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "burkina-faso", label: "Burkina Faso" },
  { value: "burundi", label: "Burundi" },
  { value: "cabo-verde", label: "Cabo Verde" },
  { value: "cambodia", label: "Cambodia" },
  { value: "cameroon", label: "Cameroon" },
  { value: "canada", label: "Canada" },
  { value: "central-african-republic", label: "Central African Republic" },
  { value: "chad", label: "Chad" },
  { value: "chile", label: "Chile" },
  { value: "china", label: "China" },
  { value: "colombia", label: "Colombia" },
  { value: "comoros", label: "Comoros" },
  { value: "congo-democratic-republic", label: "Congo (Democratic Republic)" },
  { value: "congo-republic", label: "Congo (Republic)" },
  { value: "costa-rica", label: "Costa Rica" },
  { value: "croatia", label: "Croatia" },
  { value: "cuba", label: "Cuba" },
  { value: "cyprus", label: "Cyprus" },
  { value: "czech-republic", label: "Czech Republic" },
  { value: "denmark", label: "Denmark" },
  { value: "djibouti", label: "Djibouti" },
  { value: "dominica", label: "Dominica" },
  { value: "dominican-republic", label: "Dominican Republic" },
  { value: "ecuador", label: "Ecuador" },
  { value: "egypt", label: "Egypt" },
  { value: "el-salvador", label: "El Salvador" },
  { value: "equatorial-guinea", label: "Equatorial Guinea" },
  { value: "eritrea", label: "Eritrea" },
  { value: "estonia", label: "Estonia" },
  { value: "eswatini", label: "Eswatini" },
  { value: "ethiopia", label: "Ethiopia" },
  { value: "fiji", label: "Fiji" },
  { value: "finland", label: "Finland" },
  { value: "france", label: "France" },
  { value: "gabon", label: "Gabon" },
  { value: "gambia", label: "Gambia" },
  { value: "georgia", label: "Georgia" },
  { value: "germany", label: "Germany" },
  { value: "ghana", label: "Ghana" },
  { value: "greece", label: "Greece" },
  { value: "grenada", label: "Grenada" },
  { value: "guatemala", label: "Guatemala" },
  { value: "guinea", label: "Guinea" },
  { value: "guinea-bissau", label: "Guinea-Bissau" },
  { value: "guyana", label: "Guyana" },
  { value: "haiti", label: "Haiti" },
  { value: "honduras", label: "Honduras" },
  { value: "hungary", label: "Hungary" },
  { value: "iceland", label: "Iceland" },
  { value: "india", label: "India" },
  { value: "indonesia", label: "Indonesia" },
  { value: "iran", label: "Iran" },
  { value: "iraq", label: "Iraq" },
  { value: "ireland", label: "Ireland" },
  { value: "israel", label: "Israel" },
  { value: "italy", label: "Italy" },
  { value: "ivory-coast", label: "Ivory Coast" },
  { value: "jamaica", label: "Jamaica" },
  { value: "japan", label: "Japan" },
  { value: "jordan", label: "Jordan" },
  { value: "kazakhstan", label: "Kazakhstan" },
  { value: "kenya", label: "Kenya" },
  { value: "kiribati", label: "Kiribati" },
  { value: "korea-north", label: "Korea (North)" },
  { value: "korea-south", label: "Korea (South)" },
  { value: "kuwait", label: "Kuwait" },
  { value: "kyrgyzstan", label: "Kyrgyzstan" },
  { value: "laos", label: "Laos" },
  { value: "latvia", label: "Latvia" },
  { value: "lebanon", label: "Lebanon" },
  { value: "lesotho", label: "Lesotho" },
  { value: "liberia", label: "Liberia" },
  { value: "libya", label: "Libya" },
  { value: "liechtenstein", label: "Liechtenstein" },
  { value: "lithuania", label: "Lithuania" },
  { value: "luxembourg", label: "Luxembourg" },
  { value: "madagascar", label: "Madagascar" },
  { value: "malawi", label: "Malawi" },
  { value: "malaysia", label: "Malaysia" },
  { value: "maldives", label: "Maldives" },
  { value: "mali", label: "Mali" },
  { value: "malta", label: "Malta" },
  { value: "marshall-islands", label: "Marshall Islands" },
  { value: "mauritania", label: "Mauritania" },
  { value: "mauritius", label: "Mauritius" },
  { value: "mexico", label: "Mexico" },
  { value: "micronesia", label: "Micronesia" },
  { value: "moldova", label: "Moldova" },
  { value: "monaco", label: "Monaco" },
  { value: "mongolia", label: "Mongolia" },
  { value: "montenegro", label: "Montenegro" },
  { value: "morocco", label: "Morocco" },
  { value: "mozambique", label: "Mozambique" },
  { value: "myanmar", label: "Myanmar" },
  { value: "namibia", label: "Namibia" },
  { value: "nauru", label: "Nauru" },
  { value: "nepal", label: "Nepal" },
  { value: "netherlands", label: "Netherlands" },
  { value: "new-zealand", label: "New Zealand" },
  { value: "nicaragua", label: "Nicaragua" },
  { value: "niger", label: "Niger" },
  { value: "nigeria", label: "Nigeria" },
  { value: "north-macedonia", label: "North Macedonia" },
  { value: "norway", label: "Norway" },
  { value: "oman", label: "Oman" },
  { value: "pakistan", label: "Pakistan" },
  { value: "palau", label: "Palau" },
  { value: "palestine", label: "Palestine" },
  { value: "panama", label: "Panama" },
  { value: "papua-new-guinea", label: "Papua New Guinea" },
  { value: "paraguay", label: "Paraguay" },
  { value: "peru", label: "Peru" },
  { value: "philippines", label: "Philippines" },
  { value: "poland", label: "Poland" },
  { value: "portugal", label: "Portugal" },
  { value: "qatar", label: "Qatar" },
  { value: "romania", label: "Romania" },
  { value: "russia", label: "Russia" },
  { value: "rwanda", label: "Rwanda" },
  { value: "saint-kitts-and-nevis", label: "Saint Kitts and Nevis" },
  { value: "saint-lucia", label: "Saint Lucia" },
  { value: "saint-vincent-and-grenadines", label: "Saint Vincent and the Grenadines" },
  { value: "samoa", label: "Samoa" },
  { value: "san-marino", label: "San Marino" },
  { value: "sao-tome-and-principe", label: "Sao Tome and Principe" },
  { value: "saudi-arabia", label: "Saudi Arabia" },
  { value: "senegal", label: "Senegal" },
  { value: "serbia", label: "Serbia" },
  { value: "seychelles", label: "Seychelles" },
  { value: "sierra-leone", label: "Sierra Leone" },
  { value: "singapore", label: "Singapore" },
  { value: "slovakia", label: "Slovakia" },
  { value: "slovenia", label: "Slovenia" },
  { value: "solomon-islands", label: "Solomon Islands" },
  { value: "somalia", label: "Somalia" },
  { value: "south-africa", label: "South Africa" },
  { value: "south-sudan", label: "South Sudan" },
  { value: "spain", label: "Spain" },
  { value: "sri-lanka", label: "Sri Lanka" },
  { value: "sudan", label: "Sudan" },
  { value: "suriname", label: "Suriname" },
  { value: "sweden", label: "Sweden" },
  { value: "switzerland", label: "Switzerland" },
  { value: "syria", label: "Syria" },
  { value: "taiwan", label: "Taiwan" },
  { value: "tajikistan", label: "Tajikistan" },
  { value: "tanzania", label: "Tanzania" },
  { value: "thailand", label: "Thailand" },
  { value: "timor-leste", label: "Timor-Leste" },
  { value: "togo", label: "Togo" },
  { value: "tonga", label: "Tonga" },
  { value: "trinidad-and-tobago", label: "Trinidad and Tobago" },
  { value: "tunisia", label: "Tunisia" },
  { value: "turkey", label: "Turkey" },
  { value: "turkmenistan", label: "Turkmenistan" },
  { value: "tuvalu", label: "Tuvalu" },
  { value: "uganda", label: "Uganda" },
  { value: "ukraine", label: "Ukraine" },
  { value: "united-arab-emirates", label: "United Arab Emirates" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "united-states", label: "United States" },
  { value: "uruguay", label: "Uruguay" },
  { value: "uzbekistan", label: "Uzbekistan" },
  { value: "vanuatu", label: "Vanuatu" },
  { value: "vatican-city", label: "Vatican City" },
  { value: "venezuela", label: "Venezuela" },
  { value: "vietnam", label: "Vietnam" },
  { value: "yemen", label: "Yemen" },
  { value: "zambia", label: "Zambia" },
  { value: "zimbabwe", label: "Zimbabwe" },
]

interface FormData {
  collegeName: string
  collegeWebsite: string
  collegeAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  phoneNumber: string
  collegeDescription: string
  fullName: string
  title: string
  email: string
}

interface FormErrors {
  [key: string]: string
}

export default function InstitutionRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    collegeName: "",
    collegeWebsite: "",
    collegeAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    collegeDescription: "",
    fullName: "",
    title: "",
    email: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    const requiredFields: (keyof FormData)[] = [
      "collegeName",
      "collegeWebsite",
      "collegeAddress",
      "city",
      "state",
      "postalCode",
      "country",
      "phoneNumber",
      "collegeDescription",
      "fullName",
      "title",
      "email",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required"
      }
    })

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Website URL validation
    if (formData.collegeWebsite && !/^https?:\/\/.+\..+/.test(formData.collegeWebsite)) {
      newErrors.collegeWebsite = "Please enter a valid URL (e.g., https://example.edu)"
    }

    // Phone number validation (basic)
    if (formData.phoneNumber && !/^[\d\s\-$$$$+]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    const validFiles = Array.from(files).filter((file) => {
      const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
      const maxSize = 10 * 1024 * 1024 // 10MB
      return validTypes.includes(file.type) && file.size <= maxSize
    })

    setUploadedFiles((prev) => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Form submitted successfully:", { formData, uploadedFiles })
      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          collegeName: "",
          collegeWebsite: "",
          collegeAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
          phoneNumber: "",
          collegeDescription: "",
          fullName: "",
          title: "",
          email: "",
        })
        setUploadedFiles([])
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFBF6] dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Network of Institutions</h1>
          <p className="text-muted-foreground text-lg">
            Register your institution to connect with students and streamline your processes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Card 1: Basic College Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Basic College Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="collegeName">College Name*</Label>
                    <Input
                      id="collegeName"
                      placeholder="Enter college name"
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange("collegeName", e.target.value)}
                      className={errors.collegeName ? "border-red-500" : ""}
                    />
                    {errors.collegeName && <p className="text-sm text-red-500">{errors.collegeName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="collegeWebsite">College Website URL*</Label>
                    <Input
                      id="collegeWebsite"
                      placeholder="https://example.edu"
                      value={formData.collegeWebsite}
                      onChange={(e) => handleInputChange("collegeWebsite", e.target.value)}
                      className={errors.collegeWebsite ? "border-red-500" : ""}
                    />
                    {errors.collegeWebsite && <p className="text-sm text-red-500">{errors.collegeWebsite}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collegeAddress">College Address*</Label>
                  <Input
                    id="collegeAddress"
                    placeholder="Street Address"
                    value={formData.collegeAddress}
                    onChange={(e) => handleInputChange("collegeAddress", e.target.value)}
                    className={errors.collegeAddress ? "border-red-500" : ""}
                  />
                  {errors.collegeAddress && <p className="text-sm text-red-500">{errors.collegeAddress}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City*</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province*</Label>
                    <Input
                      id="state"
                      placeholder="State/Province"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className={errors.state ? "border-red-500" : ""}
                    />
                    {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal/ZIP Code*</Label>
                    <Input
                      id="postalCode"
                      placeholder="ZIP Code"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      className={errors.postalCode ? "border-red-500" : ""}
                    />
                    {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country*</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Main Phone Number*</Label>
                    <Input
                      id="phoneNumber"
                      placeholder="+91 123-456-7890"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className={errors.phoneNumber ? "border-red-500" : ""}
                    />
                    {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: College Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>College Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="collegeDescription">A Brief Description of the College*</Label>
                  <Textarea
                    id="collegeDescription"
                    rows={5}
                    placeholder="Provide a brief description of your college..."
                    value={formData.collegeDescription}
                    onChange={(e) => handleInputChange("collegeDescription", e.target.value)}
                    className={errors.collegeDescription ? "border-red-500" : ""}
                  />
                  {errors.collegeDescription && <p className="text-sm text-red-500">{errors.collegeDescription}</p>}
                </div>
                <p className="text-sm text-muted-foreground">
                  This description will be visible to students on your institution's profile.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Verification Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Verification Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Please upload official documents to verify your institution's accreditation.
                </p>

                <div
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    handleFileUpload(e.dataTransfer.files)
                  }}
                >
                  <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Click to browse files or drag & drop your document here.
                    <br />
                    PDF, DOCX up to 10MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.docx"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label>Uploaded Files:</Label>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <span className="text-sm truncate">{file.name}</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Your Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Your Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Your Full Name*</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Your Title/Position at the College*</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Registrar, Dean of Admissions"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Official College Email Address*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.name@college.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <p className="text-sm text-muted-foreground">
                  This email will be used for all official communications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submission Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center space-y-4 pt-8"
          >
            {submitStatus === "success" && (
              <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                <CheckCircle className="h-5 w-5" />
                <span>Form submitted successfully! We'll review your application.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center justify-center gap-2 text-red-600 mb-4">
                <AlertCircle className="h-5 w-5" />
                <span>There was an error submitting your form. Please try again.</span>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-[#F0B90B] hover:bg-[#E0A800] text-black font-semibold px-8 py-3 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit for Review"}
            </Button>

            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              By submitting, you represent that you are an authorized representative of the institution and agree to our
              Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  )
}
