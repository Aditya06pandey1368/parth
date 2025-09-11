import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <Link href="/" className="flex items-center gap-2">
                  <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" fillRule="evenodd"></path>
                    <path d="M16.5 12.013a4.491 4.491 0 01-4.238 4.484.75.75 0 00.976 1.458 6 6 0 005.65-5.942.75.75 0 00-1.49-.114l-.001-.001-.002-.005a4.5 4.5 0 01-1.238 2.231A4.491 4.491 0 0116.5 12.013z"></path>
                  </svg>
                  <h2 className="text-2xl font-bold text-white">Achievo</h2>
                </Link>
                <p className="mt-4 text-sm">Verified portfolios for the future of work.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wider uppercase">Product</h3>
                <div className="mt-4 space-y-3">
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Features</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">For Students</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">For Universities</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wider uppercase">Company</h3>
                <div className="mt-4 space-y-3">
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">About Us</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Careers</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Press</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wider uppercase">Resources</h3>
                <div className="mt-4 space-y-3">
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Blog</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Help Center</Link>
                  <Link href="#" className="block hover:text-yellow-400 transition-colors">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
              <p>© 2024 Achievo. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer;
