"use client"

import { useEffect, useState, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu, Moon, Sun, User, Settings, LogOut, X, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

interface NavbarProps {
  onMenuClick: () => void
  isCollapsed: boolean
}

export function TopNavbar({ onMenuClick, isCollapsed }: NavbarProps) {
  // next-themes
  const { theme, setTheme, resolvedTheme } = useTheme()

  // mounted guard to prevent server/client mismatch (hydration error)
  const [mounted, setMounted] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false)
      }
    }

    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isProfileMenuOpen])

  // Use resolvedTheme when available; only read theme after mount
  const currentTheme = mounted ? (resolvedTheme ?? theme) : undefined

  return (
    <header className="fixed top-0 right-0 left-0 z-30 h-20 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="flex items-center justify-between h-full px-6">
        {/* Menu Button */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="hover:bg-accent/80 rounded-2xl transition-all duration-500 hover:scale-110 relative overflow-hidden group w-9 h-9 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-0 border border-primary/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"></div>
            <Menu className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-180" />
          </Button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() =>
              // fallback: if not mounted yet, toggle to 'dark' (safe default)
              setTheme((mounted ? (resolvedTheme ?? theme) : "light") === "dark" ? "light" : "dark")
            }
            className="hover:bg-accent/80 rounded-2xl transition-all duration-500 hover:scale-110 relative group w-9 h-9 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 delay-75"></div>

            {/* --- Important: render a neutral placeholder until mounted to avoid hydration mismatch --- */}
            {!mounted ? (
              // placeholder has same dimensions as icons so server and initial client HTML match
              <div className="w-4 h-4" aria-hidden />
            ) : currentTheme === "dark" ? (
              <Sun className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90" />
            ) : (
              <Moon className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            )}
          </Button>

          {/* Notification Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/80 rounded-2xl transition-all duration-500 hover:scale-110 relative group w-9 h-9 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute inset-0 border border-orange-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 delay-75"></div>
            <Bell className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:animate-bounce" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border border-background animate-pulse shadow-lg shadow-red-500/50"></div>
          </Button>

          {/* Profile Section */}
          <div className="flex items-center gap-3 pl-4 border-l border-border/50 relative" ref={profileMenuRef}>
            <div
              className="relative group cursor-pointer flex items-center gap-2 hover:bg-accent/50 rounded-2xl p-2 transition-all duration-300"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <div className="relative">
                <Avatar className="h-9 w-9 ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-primary/30">
                  <AvatarImage src="/placeholder.svg?height=36&width=36&text=RM" alt="Ram Mohan" />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm">
                    RM
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-background shadow-lg shadow-green-500/50 animate-pulse"></div>
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-foreground leading-tight">Ram Mohan</p>
                <p className="text-xs text-muted-foreground/80 leading-tight">Student</p>
              </div>

              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isProfileMenuOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isProfileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/20 z-50 overflow-hidden">
                {/* Menu Header */}
                <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 ring-2 ring-primary/30">
                        <AvatarImage src="/placeholder.svg?height=40&width=40&text=RM" alt="Ram Mohan" />
                        <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold">
                          RM
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Ram Mohan</p>
                        <p className="text-xs text-muted-foreground">Student</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="h-8 w-8 hover:bg-accent/80 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-accent/80 rounded-xl transition-all duration-300 hover:scale-[1.02] group">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <User className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="font-medium">View Portfolio</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-accent/80 rounded-xl transition-all duration-300 hover:scale-[1.02] group">
                      <div className="p-1.5 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Settings className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="font-medium">Edit Profile</span>
                    </button>

                    <div className="my-2 border-t border-border/50"></div>

                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:bg-red-500/10 rounded-xl transition-all duration-300 hover:scale-[1.02] group">
                      <div className="p-1.5 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                        <LogOut className="h-4 w-4" />
                      </div>
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
