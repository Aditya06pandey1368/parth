import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <div>
       <section className="relative bg-light-yellow pt-24 mt-10 pb-20 md:pt-32 md:pb-28">
            <div className="container mx-auto px-6 text-center">
              <p className="font-semibold text-lg text-medium-gray fade-in-up">ABOUT ACHIEVO</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-4 text-dark-gray fade-in-up" style={{ animationDelay: '100ms' }}>
                Empowering Student Journeys, <br /> One <span className="text-yellow-500">Verified Achievement</span> at a Time.
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-medium-gray fade-in-up" style={{ animationDelay: '200ms' }}>
                We are dedicated to providing students with the tools to build a comprehensive, verified digital portfolio, turning their hard work into tangible opportunities for their future careers.
              </p>
            </div>
             <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
                        <div className="absolute top-0 -left-16 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute bottom-0 -right-16 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
                        <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                          <div className="fade-in-up">
                            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                              <Image
                                alt="Students collaborating on laptops with bright ideas and teamwork"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
                                width={1600}
                                height={1067}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/40 via-yellow-400/20 to-transparent opacity-70"></div>
                              <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm uppercase tracking-widest font-medium">Achievo Platform</p>
                                <h3 className="text-2xl font-bold">Empowering Every Student</h3>
                              </div>
                            </div>
                          </div>
                          <div className="text-left fade-in-up" style={{ animationDelay: '150ms' }}>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                              Who <span className="text-yellow-500">We Are</span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                              <span className="font-semibold text-yellow-600">Achievo</span> was born from a powerful idea: every student&apos;s achievements deserve recognition.
                              We’re a passionate team of educators, technologists, and designers committed to bridging the gap between academic accomplishments
                              and professional success.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                              Our mission is to create a transparent ecosystem where students confidently showcase their skills
                              while employers discover <span className="font-semibold text-yellow-600">verified talent</span> with ease.
                            </p>
                            <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-300">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </section>
          </section>
    </div>
  )
}

export default AboutSection