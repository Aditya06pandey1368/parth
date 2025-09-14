"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Users, UserPlus, FileText, Building2, Menu, X, Calendar, Clock, Trophy } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Projects", href: "/projects", icon: FileText },
  { name: "Research Papers", href: "/research", icon: FileText },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Clubs", href: "/clubs", icon: Trophy },
  { name: "separator", href: "#", icon: null },
  { name: "Time Table", href: "/timetable", icon: Clock },
  { name: "Board", href: "/board", icon: Building2 },
  { name: "Faculty Members", href: "/faculty", icon: Users },
  { name: "Add Faculty Members", href: "/add-faculty", icon: UserPlus },
  { name: "Add Institutional Data", href: "/institutional-data", icon: Building2 },
  { name: "My Research Papers", href: "/my-research", icon: FileText },
]

export function FacultySidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-sidebar-foreground">Parth</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item, index) => {
              if (item.name === "separator") {
                return (
                  <div key={index} className="py-3">
                    <div className="h-0.5 bg-yellow-400 rounded-full mx-3"></div>
                  </div>
                )
              }

              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-yellow-400 text-gray-900"
                      : "text-sidebar-foreground hover:bg-yellow-400/20 hover:text-gray-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Welcome back 👋</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">Parth Mohan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
