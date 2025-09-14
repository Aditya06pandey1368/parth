"use client"

import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import ProfileImg from "@/public/studentProfile.jpg"

interface NavbarProps {
  onMenuClick: () => void
}

export function TopNavbar({ onMenuClick }: NavbarProps) {
  // next-themes
  const { theme, setTheme, resolvedTheme } = useTheme()

  // mounted guard to prevent server/client mismatch (hydration error)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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
          <div className="flex items-center gap-3 pl-4 border-l border-border/50">
            <div className="relative group">
              <Avatar className="h-9 w-9 ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-500 cursor-pointer hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-primary/30">
                <AvatarImage src={ProfileImg.src} alt="Ram Mohan" />
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
          </div>
        </div>
      </div>
    </header>
  )
}
