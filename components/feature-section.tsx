import React from 'react'

function FeatureSection() {
  return (
    <div>
       <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Column 1: For Students */}
                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-12">
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#f9a806] flex items-center justify-center ring-8 ring-gray-50">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">For Students</h3>
                      <p className="text-gray-600">Build your digital portfolio.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Log All Achievements</h4>
                      <p className="text-sm text-gray-500">Courses, projects, awards, and skills in one place.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Get Verified</h4>
                      <p className="text-sm text-gray-500">Gain credibility with faculty-approved entries.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.186 2.25 2.25 0 00-3.933 2.186z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Share with Employers</h4>
                      <p className="text-sm text-gray-500">Export your verified portfolio for job applications.</p>
                    </div>
                  </div>
                </div>

                {/* Column 2: For Faculty */}
                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-12">
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#f9a806] flex items-center justify-center ring-8 ring-gray-50">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">For Faculty</h3>
                      <p className="text-gray-600">Mentor and validate student growth.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Approve Achievements</h4>
                      <p className="text-sm text-gray-500">Quickly verify student submissions and records.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Track Student Progress</h4>
                      <p className="text-sm text-gray-500">Monitor academic and extracurricular milestones.</p>
                    </div>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-8 ring-gray-50 border-2 border-gray-300">
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Provide Recommendations</h4>
                      <p className="text-sm text-gray-500">Write letters of recommendation for top students.</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Explainer */}
                <section className="bg-white py-16 lg:col-span-1">
                  <div className="container mx-auto px-6 text-center">
                    <div className="w-full px-6 text-center">
                      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
                        <video
                          className="w-full rounded-2xl block"
                          controls
                          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
                          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
    </div>
  )
}

export default FeatureSection
