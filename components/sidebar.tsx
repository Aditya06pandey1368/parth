"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  FileText,
  Award,
  Users,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Clock,
  BarChart3,
  UserCheck,
  Heart,
  Plus,
} from "lucide-react"

const primaryNavigation = [
  { name: "Dashboard", href: "portfolio", icon: LayoutDashboard },
  { name: "Research Papers", href: "research", icon: FileText },
  { name: "Certificates", href: "certificate", icon: Award },
  { name: "Clubs", href: "clubs", icon: Users },
  { name: "Events", href: "events", icon: Calendar },
  { name: "Settings", href: "settings", icon: Settings },
]

const secondaryNavigation = [
  { name: "Time Table", href: "/timetable", icon: Clock },
  { name: "Result", href: "/result", icon: BarChart3 },
  { name: "My Research Papers", href: "/my-research", icon: FileText },
  { name: "Faculty Members", href: "/faculty", icon: UserCheck },
  { name: "Add Events", href: "/add-events", icon: Plus },
  { name: "Community Services", href: "/community", icon: Heart },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn( 
          "fixed  inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full bg-gray-100
">
          {/* Header */}
          <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sidebar-foreground text-lg">Academic Portal</span>
              <span className="text-xs text-sidebar-foreground/70">Student Management</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}

            <div className="py-3">
              <div className="h-px bg-yellow-400"></div>
            </div>

            {secondaryNavigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99h52h2goRRCUjLhzZANijXUiSOEpD.png"
                  alt="Ram Mohan"
                />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Ram Mohan</p>
                <p className="text-xs text-sidebar-foreground/70 truncate">Computer Science & Engineering</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
