import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>
          <div className="container mx-auto grid min-h-[calc(100vh-80px)] items-center px-6 lg:grid-cols-2 gap-16 lg:gap-8">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-gray-900">Unlock Your Potential. Showcase Every Success. Build Your Verified Future.</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Achievo empowers university students to track and verify their academic and extracurricular achievements, creating a comprehensive digital portfolio for internships, jobs, and accreditations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#" className="px-8 py-4 text-base font-bold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-transform transform hover:scale-105">Create Your Portfolio</Link>
                <Link href="#" className="px-8 py-4 text-base font-bold rounded-full bg-gray-200/60 text-gray-700 hover:bg-gray-300/60 transition-transform transform hover:scale-105">Request a Demo</Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                <div className="flex -space-x-2">
                  <Image alt="User avatar 1" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rI_J4yYlKhgXXMZX8aHRCkxAZke3iaDr5kH-A2Re3UvCluah4bEZF5p8CyiwUQMKO3AT3tFqFTeI8rGkrkkbr8faofWARmQstUxrY3T3ZLAAmaq2zRRfEuasMPVrxLxxICczM5idmp7ZwfpaZNUmkxBzCFZft3_5pfPOmv9EI7atPEvv0JTmjZ7HvNB9rNdpqrg3wDmwBnSh1u2KCX6y-7RmcmIDZRBZ2rcYlM572k7TwphLmO1__3NNYIX2dn3Ain1HJ77gikU" width={40} height={40} />
                  <Image alt="User avatar   2" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rI_J4yYlKhgXXMZX8aHRCkxAZke3iaDr5kH-A2Re3UvCluah4bEZF5p8CyiwUQMKO3AT3tFqFTeI8rGkrkkbr8faofWARmQstUxrY3T3ZLAAmaq2zRRfEuasMPVrxLxxICczM5idmp7ZwfpaZNUmkxBzCFZft3_5pfPOmv9EI7atPEvv0JTmjZ7HvNB9rNdpqrg3wDmwBnSh1u2KCX6y-7RmcmIDZRBZ2rcYlM572k7TwphLmO1__3NNYIX2dn3Ain1HJ77gikU" width={40} height={40} />
                  <Image alt="User avatar 3" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rI_J4yYlKhgXXMZX8aHRCkxAZke3iaDr5kH-A2Re3UvCluah4bEZF5p8CyiwUQMKO3AT3tFqFTeI8rGkrkkbr8faofWARmQstUxrY3T3ZLAAmaq2zRRfEuasMPVrxLxxICczM5idmp7ZwfpaZNUmkxBzCFZft3_5pfPOmv9EI7atPEvv0JTmjZ7HvNB9rNdpqrg3wDmwBnSh1u2KCX6y-7RmcmIDZRBZ2rcYlM572k7TwphLmO1__3NNYIX2dn3Ain1HJ77gikU" width={40} height={40} />
                </div>
                <p className="text-sm text-gray-500">Trusted by students from 100+ universities.</p>
              </div>
            </div>
            <div className="relative hidden lg:block h-full">
              <div className="absolute inset-0 wireframe-bg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="card-float absolute top-[10%] left-[15%] w-60 transform -rotate-12 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg">
                    <p className="font-semibold text-sm text-gray-800">Coursera Certificate</p>
                    <p className="text-xs text-gray-500">Machine Learning Specialization</p>
                    <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-1.5 bg-[#f9a806] rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="card-float-delay-1 absolute top-[25%] right-[5%] w-56 transform rotate-6 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg">
                    <p className="font-bold text-yellow-500 text-lg">Hackathon Winner</p>
                    <p className="text-xs text-gray-500">InnovateX 2023 - 1st Place</p>
                    <p className="text-green-500 text-xs mt-2 font-semibold">Verified!</p>
                  </div>
                  <div className="card-float-delay-2 absolute bottom-[30%] left-[5%] w-48 transform rotate-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg">
                    <p className="font-semibold text-sm text-gray-800">CGPA: 3.8/4.0</p>
                    <div className="w-full h-16 mt-2">
                      <svg height="100%" viewBox="0 0 100 50" width="100%">
                        <path d="M 0 40 C 20 10, 40 10, 60 30 S 80 45, 100 25" fill="none" stroke="#f9a806" strokeWidth="3"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="card-float absolute bottom-[15%] right-[20%] w-64 transform -rotate-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg">
                    <p className="font-semibold text-sm text-gray-800">New Internship Verified!</p>
                    <p className="text-xs text-gray-500">Software Engineer Intern at TechCorp</p>
                    <Image alt="TechCorp Logo" className="h-6 w-6 mt-2 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0iqpiWG2BIjDYQTdhV_-eX-LuxfaR2QMwEgc2sbOIum4scVMgcXWh89O8sVtALcibycqm2wseWfCLpES9LhHnzUxFiNg4MrA3yg9C_9W_scPp72nJ7MSVnVhpez9jN4cifrx5mCOeY6cKbe92dc7tlSEuUvXF_5xSiyx3ZCZHzgTaLYlFjo3IRYewJyOqqwfDnW6fpkb2NdRnNUsbA8V-qwIwiS0I-GyNp4tBGNFllQcFju_z3sp9faJtox7mfyYF6K2HGNd5FIQ" width={24} height={24} />
                  </div>
                  <div className="card-float-delay-1 absolute top-[55%] left-[30%] w-52 transform rotate-8 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-lg">
                    <p className="font-semibold text-sm text-gray-800">Club Activity</p>
                    <p className="text-xs text-gray-500">President, AI & Robotics Club</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                      <p className="text-xs font-semibold text-green-500">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Hero