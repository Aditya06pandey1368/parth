import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <header className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-lg">
          <nav className="container mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-8 w-8 text-[#f9a806]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Achievo</h2>
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link href="#" className="hover:text-[#f9a806] transition-colors">Dashboard</Link>
              <Link href="#" className="hover:text-[#f9a806] transition-colors">Features</Link>
              <Link href="#" className="hover:text-[#f9a806] transition-colors">For Institutions</Link>
              <Link href="#" className="hover:text-[#f9a806] transition-colors">Contact</Link>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#" className="px-5 py-2.5 text-sm font-semibold rounded-full text-gray-700 hover:bg-gray-200/60 transition-colors">Faculty Login</Link>
              <Link href="#" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-colors">Student Signup</Link>
            </div>
            <button className="lg:hidden text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </nav>
        </header>
      
    </div>
  )
}

export default Navbar
