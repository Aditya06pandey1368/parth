"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import  Image  from "next/image"
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
  { name: "Settings", href: "/user/setting", icon: Settings },
]

const secondaryNavigation = [
  { name: "Time Table", href: "/timetable", icon: Clock },
  { name: "Result", href: "/result", icon: BarChart3 },
  { name: "My Research Papers", href: "/my-research", icon: FileText },
  { name: "Faculty Members", href: "/faculty", icon: UserCheck },
  { name: "Add Events", href: "/add-events", icon: Plus },
  { name: "Community Services", href: "/community", icon: Heart },
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
          <div className="flex items-center h-20 px-4 border-b border-sidebar-border bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-md flex-shrink-0">
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

          <div className="h-16 border-t border-sidebar-border bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-md p-3 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full h-10 text-sidebar-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white transition-all duration-500 rounded-xl font-semibold relative overflow-hidden group border border-transparent hover:border-red-400/30 hover:shadow-lg hover:shadow-red-500/20",
                isCollapsed && !isMobile ? "px-0 justify-center" : "justify-start gap-3 px-4",
              )}
              title={isCollapsed && !isMobile ? "Logout" : undefined}
            >
              {/* Enhanced background animation layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>

              {/* Ripple wave effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:w-32 group-hover:h-32 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-1000 ease-out"></div>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

              {/* Icon with creative animations */}
              <LogOut className="h-4 w-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-180 relative z-10 flex-shrink-0 group-hover:text-white drop-shadow-sm" />

              {/* Text with enhanced slide animation */}
              <span
                className={cn(
                  "relative z-10 transition-all duration-500 overflow-hidden whitespace-nowrap group-hover:text-white font-bold tracking-wide",
                  isCollapsed && !isMobile ? "w-0 opacity-0 translate-x-4" : "w-auto opacity-100 translate-x-0",
                )}
              >
                Logout
              </span>

              {/* Particle effect simulation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-4 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white/50 rounded-full animate-bounce delay-500"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {isMobile && isOpen && <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={onClose} />}
    </>
  )
}
