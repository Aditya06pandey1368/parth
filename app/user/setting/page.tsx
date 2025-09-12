"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="text-sm font-medium">Basic Details</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <Link href="user/setting/experience" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="text-sm text-gray-500">Experience Details</span>
          </Link>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <Link href="user/setting/personal" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="text-sm text-gray-500">Personal Details</span>
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Edit Profile</h1>
        <p className="text-muted-foreground">Update your personal information and social links</p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-8">
          {/* Basic Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                Name *
              </Label>
              <Input id="name" placeholder="Enter your full name" className="h-12" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email *
              </Label>
              <Input id="email" type="email" placeholder="Enter your email address" className="h-12" />
            </div>
            <div>
              <Label htmlFor="rollNumber" className="text-sm font-medium mb-2 block">
                Roll Number *
              </Label>
              <Input id="rollNumber" placeholder="Enter your roll number" className="h-12" />
            </div>
            <div>
              <Label htmlFor="branch" className="text-sm font-medium mb-2 block">
                Branch *
              </Label>
              <Input id="branch" placeholder="e.g. Computer Science" className="h-12" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="collegeName" className="text-sm font-medium mb-2 block">
                College Name *
              </Label>
              <Input id="collegeName" placeholder="Enter your college name" className="h-12" />
            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Social Links (Optional)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="linkedin" className="text-sm font-medium mb-2 block">
                  LinkedIn
                </Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/" className="h-12" />
              </div>
              <div>
                <Label htmlFor="github" className="text-sm font-medium mb-2 block">
                  GitHub
                </Label>
                <Input id="github" placeholder="https://github.com/" className="h-12" />
              </div>
              <div>
                <Label htmlFor="leetcode" className="text-sm font-medium mb-2 block">
                  LeetCode
                </Label>
                <Input id="leetcode" placeholder="https://leetcode.com/u/" className="h-12" />
              </div>
              <div>
                <Label htmlFor="geeksforgeeks" className="text-sm font-medium mb-2 block">
                  GeeksforGeeks
                </Label>
                <Input id="geeksforgeeks" placeholder="https://auth.geeksforgeeks.org/user/" className="h-12" />
              </div>
              <div>
                <Label htmlFor="codechef" className="text-sm font-medium mb-2 block">
                  Codechef
                </Label>
                <Input id="codechef" placeholder="https://www.codechef.com/users/" className="h-12" />
              </div>
              <div>
                <Label htmlFor="codeforces" className="text-sm font-medium mb-2 block">
                  Codeforces
                </Label>
                <Input id="codeforces" placeholder="https://codeforces.com/profile/" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <div></div>
            <Link href="/user/setting/experience">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3">
                Next: Experience Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
