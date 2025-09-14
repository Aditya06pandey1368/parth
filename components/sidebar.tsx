"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from '@/public/logo.png'
import {
  LayoutDashboard,
  FileText,
  Award,
  Users,
  Calendar,
  Settings,
  LogOut,
  X,
  GraduationCap,
  Clock,
  BarChart3,
  UserCheck,
  Heart,
  Plus,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"


const primaryNavigation = [
  { name: "Dashboard", href: "/user/portfolio", icon: LayoutDashboard },
  { name: "Research Papers", href: "/user/research", icon: FileText },
  { name: "Certificates", href: "/user/certificate", icon: Award },
  { name: "Clubs", href: "/user/clubs", icon: Users },
  { name: "Events", href: "/user/events", icon: Calendar },
  
]

const secondaryNavigation = [
  { name: "Time Table", href: "/user//timetable", icon: Clock },
  { name: "Result", href: "/user//result", icon: BarChart3 },
  { name: "My Research Papers", href: "/user//my-research", icon: FileText },
  { name: "Faculty Members", href: "/user//faculty", icon: UserCheck },
  { name: "Add Events", href: "/user//add-events", icon: Plus },
  { name: "Community Services", href: "/user//community", icon: Heart },
]

interface SidebarProps {
  isOpen: boolean
  isCollapsed: boolean
  onClose: () => void
  onToggleCollapse: () => void
}

export function Sidebar({ isOpen, isCollapsed, onClose, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out shadow-xl h-screen",
          isCollapsed && !isMobile ? "w-20" : "w-64",
          // Mobile behavior
          isMobile
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : // Desktop behavior - always visible
            "translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header - Fixed height to prevent shifting */}
          <div className="flex items-center h-20 px-4 border-b border-sidebar-border dark:bg-black bg-white backdrop-blur-md flex-shrink-0">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-2 md:hidden hover:bg-sidebar-accent z-50 hover:rotate-90 transition-all duration-300 w-8 h-8"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            )}

            <div className={cn("flex items-center gap-3", isMobile ? "pr-10" : "flex-1")}>
              <div className="w-12 h-12  flex items-center justify-center transition-all duration-300 hover:ring-primary/40 hover:shadow-xl hover:scale-105 relative overflow-hidden group flex-shrink-0">
                <Image
                  src={Logo}  // put your logo in /public folder
                  alt="Logo"

                  className="rounded-full"
                />
              </div>

              <div
                className={cn(
                  "flex flex-col transition-all duration-300 overflow-hidden",
                  isCollapsed && !isMobile ? "w-0 opacity-0" : "w-auto opacity-100",
                )}
              >
                <span className="font-bold text-sidebar-foreground text-xl tracking-tight bg-gradient-to-r from-sidebar-foreground to-sidebar-foreground/80 bg-clip-text whitespace-nowrap">
                  Parth
                </span>
                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Career Catalyst</span>
              </div>
            </div>

            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCollapse}
                className="w-10 h-10 hover:bg-sidebar-accent rounded-xl transition-all duration-300 hover:scale-110 relative overflow-hidden group flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-primary/5 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 transition-all duration-300 ease-in-out">
                  {isCollapsed ? (
                    <PanelLeftOpen className="h-5 w-5 text-sidebar-foreground transition-all duration-300 group-hover:scale-125" />
                  ) : (
                    <PanelLeftClose className="h-5 w-5 text-sidebar-foreground transition-all duration-300 group-hover:scale-125" />
                  )}
                </div>
              </Button>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 scrollbar-thumb-rounded-full transition-all duration-300">
            <div className="space-y-1">
              {primaryNavigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden",
                      isCollapsed && !isMobile ? "h-12 px-3 justify-center" : "h-12 px-4 gap-3",
                      isActive
                        ? "bg-gradient-to-r from-sidebar-primary to-sidebar-primary/90 text-sidebar-primary-foreground shadow-lg ring-2 ring-primary/30"
                        : "text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent hover:to-sidebar-accent/80 hover:text-sidebar-accent-foreground hover:shadow-md hover:scale-[1.02]",
                    )}
                    onClick={() => isMobile && onClose()}
                    title={isCollapsed && !isMobile ? item.name : undefined}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <item.icon className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 relative z-10" />

                    <span
                      className={cn(
                        "font-medium tracking-wide relative z-10 transition-all duration-300 overflow-hidden whitespace-nowrap",
                        isCollapsed && !isMobile ? "w-0 opacity-0" : "w-auto opacity-100",
                      )}
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full animate-pulse shadow-lg" />
                    )}
                  </Link>
                )
              })}

              <div className="py-2">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </div>

              {secondaryNavigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden",
                      isCollapsed && !isMobile ? "h-12 px-3 justify-center" : "h-12 px-4 gap-3",
                      isActive
                        ? "bg-gradient-to-r from-sidebar-primary to-sidebar-primary/90 text-sidebar-primary-foreground shadow-lg ring-2 ring-primary/30"
                        : "text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent hover:to-sidebar-accent/80 hover:text-sidebar-accent-foreground hover:shadow-md hover:scale-[1.02]",
                    )}
                    onClick={() => isMobile && onClose()}
                    title={isCollapsed && !isMobile ? item.name : undefined}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <item.icon className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 relative z-10" />

                    <span
                      className={cn(
                        "font-medium tracking-wide relative z-10 transition-all duration-300 overflow-hidden whitespace-nowrap",
                        isCollapsed && !isMobile ? "w-0 opacity-0" : "w-auto opacity-100",
                      )}
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full animate-pulse shadow-lg" />
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="h-16 border-t border-sidebar-border dark:bg-gray-800 bg-gray-200 backdrop-blur-md p-3 flex-shrink-0">
            <Button
  size="sm"
  className={cn(
    "w-full h-10 flex items-center gap-3 px-4 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-900 transition-transform duration-200 hover:scale-105",
    isCollapsed && !isMobile ? "px-0 justify-center" : "justify-start"
  )}
  title={isCollapsed && !isMobile ? "Logout" : undefined}
>
  <LogOut className="h-4 w-4" />
  {!isCollapsed && <span>Logout</span>}
</Button>


          </div>
        </div>
      </div>

      {isMobile && isOpen && <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={onClose} />}
    </>
  )
}
