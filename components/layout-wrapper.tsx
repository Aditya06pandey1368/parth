"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Sidebar } from "./sidebar"
import { TopNavbar } from "./topnav"
import { cn } from "@/lib/utils"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Auto-collapse on mobile
      if (mobile) {
        setIsSidebarCollapsed(false)
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMenuClick = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed)
    }
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  const handleToggleCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar onMenuClick={handleMenuClick} isCollapsed={isSidebarCollapsed} />

      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onClose={handleSidebarClose}
        onToggleCollapse={handleToggleCollapse}
      />

      {/* Main content */}
      <main
        className={cn(
          "pt-16 transition-all duration-300 ease-in-out",
          // Adjust margin based on sidebar state
          isMobile ? "ml-0" : isSidebarCollapsed ? "ml-16" : "ml-64",
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
