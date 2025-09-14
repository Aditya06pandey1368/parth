"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

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
      ease: "easeOut",
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
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
      ease: "easeOut",
    },
  },
}

const ratingButtonVariants = {
  inactive: { scale: 1, backgroundColor: "#e5e7eb" },
  active: { scale: 1.1, backgroundColor: "#fbbf24" },
  hover: { scale: 1.15, transition: { duration: 0.1 } },
  tap: { scale: 0.95 },
}

export default function InstitutionalDataPage() {
  const [formData, setFormData] = useState({
    totalStudents: "",
    totalFaculty: "",
    facultyStudentRatio: "",
    phdHolders: "",
    masterHolders: "",
    graduatingStudents: "",
    placedStudents: "",
    higherStudies: "",
    averagePackage: "",
    highestPackage: "",
    medianPackage: "",
    classrooms: 5,
    laboratory: 5,
    library: 5,
    infrastructure: 5,
    greenCampus: 5,
    wasteManagement: 5,
    itInfrastructure: 5,
  })

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log("Submitting institutional data:", formData)
    // Handle form submission
  }

  const RatingScale = ({
    label,
    value,
    onChange,
  }: { label: string; value: number; onChange: (value: number) => void }) => (
    <motion.div
      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm font-medium text-gray-700 flex-1">{label}</span>
      <div className="flex gap-2 ml-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating, index) => (
          <motion.button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
              rating <= value
                ? rating <= 6
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            variants={ratingButtonVariants}
            initial="inactive"
            animate={rating <= value ? "active" : "inactive"}
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: index * 0.05 }}
          >
            {rating}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div className="text-center mb-8" variants={headerVariants} initial="hidden" animate="visible">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Institutional Data for Accreditation
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Please provide the following information for NAAC, NBA, and AICTE reporting
        </motion.p>
      </motion.div>

      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        {/* Student & Faculty Data */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover="hover" variants={cardHoverVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Student & Faculty Data</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { id: "totalStudents", label: "Total Students", placeholder: "e.g. 3000", key: "totalStudents" },
                    { id: "totalFaculty", label: "Total Faculty", placeholder: "e.g. 200", key: "totalFaculty" },
                    {
                      id: "facultyStudentRatio",
                      label: "Faculty: Student Ratio",
                      placeholder: "1:20",
                      key: "facultyStudentRatio",
                    },
                  ].map((field, index) => (
                    <motion.div key={field.id} className="space-y-2" variants={itemVariants} custom={index}>
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="bg-gray-50"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Faculty Qualifications */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover="hover" variants={cardHoverVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Faculty Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { id: "phdHolders", label: "PhD Holders", placeholder: "e.g. 150", key: "phdHolders" },
                    {
                      id: "masterHolders",
                      label: "M.Tech / Master's Holders",
                      placeholder: "e.g. 300",
                      key: "masterHolders",
                    },
                  ].map((field, index) => (
                    <motion.div key={field.id} className="space-y-2" variants={itemVariants} custom={index}>
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="bg-gray-50"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Placement & Career Outcomes */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover="hover" variants={cardHoverVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Placement & Career Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    {
                      id: "graduatingStudents",
                      label: "Total Graduating Students",
                      placeholder: "e.g. 1500",
                      key: "graduatingStudents",
                    },
                    {
                      id: "placedStudents",
                      label: "Number of Placed Students",
                      placeholder: "e.g. 1200",
                      key: "placedStudents",
                    },
                    {
                      id: "higherStudies",
                      label: "Students Opting for Higher Studies",
                      placeholder: "e.g. 200",
                      key: "higherStudies",
                    },
                  ].map((field, index) => (
                    <motion.div key={field.id} className="space-y-2" variants={itemVariants} custom={index}>
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="bg-gray-50"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Salary Figures */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover="hover" variants={cardHoverVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Salary Figures (in INR)</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    {
                      id: "averagePackage",
                      label: "Average Package",
                      placeholder: "₹ e.g. 6,00,000",
                      key: "averagePackage",
                    },
                    {
                      id: "highestPackage",
                      label: "Highest Package",
                      placeholder: "₹ e.g. 25,00,000",
                      key: "highestPackage",
                    },
                    {
                      id: "medianPackage",
                      label: "Median Package",
                      placeholder: "₹ e.g. 5,50,000",
                      key: "medianPackage",
                    },
                  ].map((field, index) => (
                    <motion.div key={field.id} className="space-y-2" variants={itemVariants} custom={index}>
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="bg-gray-50"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Infrastructure & Campus Quality */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover="hover" variants={cardHoverVariants}>
            <Card>
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <CardTitle className="text-lg font-semibold">Infrastructure & Campus Quality</CardTitle>
                  <p className="text-sm text-gray-600">
                    Please rate the quality of campus facilities and infrastructure on a scale of 1 to 10
                  </p>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-1" variants={containerVariants} initial="hidden" animate="visible">
                  {[
                    { label: "Classrooms & Learning Spaces", key: "classrooms" },
                    { label: "Laboratory Facilities", key: "laboratory" },
                    { label: "Library & Information Resources", key: "library" },
                    { label: "Infrastructure Maintenance", key: "infrastructure" },
                    { label: "Green Campus Initiatives", key: "greenCampus" },
                    { label: "Waste Management Systems", key: "wasteManagement" },
                    { label: "IT Infrastructure", key: "itInfrastructure" },
                  ].map((item, index) => (
                    <motion.div key={item.key} variants={itemVariants} custom={index}>
                      <RatingScale
                        label={item.label}
                        value={formData[item.key as keyof typeof formData] as number}
                        onChange={(value) => handleInputChange(item.key, value)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        className="flex justify-center pt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 text-lg font-medium"
            size="lg"
          >
            Submit Data
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
