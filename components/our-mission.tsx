import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OurMission() {
  return (
    <div>
      <section className="py-20 md:py-24 bg-light-yellow">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-gray tracking-tight fade-in-up">Our Mission</h2>
                <p className="mt-6 text-2xl md:text-3xl font-medium text-medium-gray leading-snug fade-in-up" style={{ animationDelay: '150ms' }}>
                  &quot;To forge a universal standard of trust for student achievements, empowering every learner to showcase their <span className="font-bold text-dark-gray">verified potential</span> to the world.&quot;
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-16 tracking-tight fade-in-up">The Achievo Advantage</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="feature-card bg-white p-8 rounded-xl fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-light-yellow mb-6">
                    <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 17v-2.286c0-.49.233-.956.635-1.258l5.882-4.411a2.121 2.121 0 00-2.121-3.642H9M9 17v2.5a2.5 2.5 0 002.5 2.5h2.5a2.5 2.5 0 002.5-2.5V17M9 17h6" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-dark-gray">Verified Digital Portfolio</h3>
                  <p className="text-medium-gray">Create a comprehensive, tamper-proof record of all your academic and extracurricular achievements.</p>
                </div>
                <div className="feature-card bg-white p-8 rounded-xl fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-light-yellow mb-6">
                    <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1M9 3v1m6-1v1" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-dark-gray">Seamless University Integration</h3>
                  <p className="text-medium-gray">Connect directly with your university for effortless verification of your courses, projects, and roles.</p>
                </div>
                <div className="feature-card bg-white p-8 rounded-xl fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-light-yellow mb-6">
                    <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-dark-gray">Enhanced Employability</h3>
                  <p className="text-medium-gray">Share your verified portfolio with employers to stand out and fast-track your career opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28 bg-light-gray">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-16 tracking-tight fade-in-up">Trusted by the Best</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
                  <p className="text-6xl font-extrabold text-yellow-500">98%</p>
                  <p className="mt-2 text-xl text-dark-gray font-semibold">Student Adoption</p>
                  <p className="text-medium-gray mt-2">Students love the intuitive interface and the power of a verified portfolio.</p>
                </div>
                <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
                  <p className="text-6xl font-extrabold text-yellow-500">50+</p>
                  <p className="mt-2 text-xl text-dark-gray font-semibold">Partner Universities</p>
                  <p className="text-medium-gray mt-2">We collaborate with forward-thinking institutions to empower their students.</p>
                </div>
                <div className="fade-in-up" style={{ animationDelay: '300ms' }}>
                  <p className="text-6xl font-extrabold text-yellow-500">10k+</p>
                  <p className="mt-2 text-xl text-dark-gray font-semibold">Opportunities Unlocked</p>
                  <p className="text-medium-gray mt-2">Connecting verified students with internships, jobs, and accreditations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray fade-in-up tracking-tight">Meet the Minds Behind Achievo</h2>
              <p className="mt-5 max-w-3xl mx-auto text-medium-gray text-lg fade-in-up" style={{ animationDelay: '150ms' }}>
                We are a diverse, globally-distributed team united by a passion for education and technology. Our collaborative spirit is the engine that drives Achievo forward.
              </p>
              <div className="mt-12 flex justify-center items-center -space-x-4 fade-in-up" style={{ animationDelay: '300ms' }}>
                <Image alt="Photo of a smiling female team member with blonde hair, representing the design lead." className="inline-block h-20 w-20 md:h-24 md:w-24 rounded-full ring-4 ring-white team-member-img object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRljL2EPmqZ0zgM-yfwoezePb4EGMhV4-uOsGsJDkQMheyWdlZ7OTMWNaM6l5PC_iiKGkmzkiSht-YTipx8fS9IoPYdQbU0-REgdyuz0uc7PRStgz_ZY8fuLyPdtwSVljKrSRrVD3b7bJ7-XphdTupVN5Yo-1hbAvTDkvrHdCd2NEN1M3UWp6a9Nvk1gox5olkr69LSMVm53EykU2NlF61_V6fLeoXQN1mJoo87-5cRROftkieXo9P8-dZFiyyKI98wq6BQegnQ0A" width={96} height={96} />
                <Image alt="Photo of a smiling male team member with glasses, representing the lead engineer." className="inline-block h-24 w-24 md:h-28 md:w-28 rounded-full ring-4 ring-white team-member-img object-cover z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS4K2UW36_Tgl932tQBYnanmwVI7DS60AEJ6qsVeJ0rhw3EoB9VDs5xtYhxl6zH-DcOtrRR0aXtWkvj4naNhUr62kCJi-GJnH9jUPGixBRDSKtmZqXwHziQPyty5rrTZcDLyuV4qzdXpDozCu2ACMkr75RauwPPOhKITHZs37ewCdGwSs2C0ZyysujTtiyTHMCrSKQJJO-WKlfZAdqg-tjxTwFsbIdid304LFbQOaJEHRgG0ejTf9YVjB5o2Fa0hc-gdNP1TAoEks" width={112} height={112} />
                <Image alt="Photo of a smiling female team member, representing the CEO/Founder." className="inline-block h-28 w-28 md:h-32 md:w-32 rounded-full ring-4 ring-white team-member-img object-cover z-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnnijPGo1XpVPr1qyDp3xoRPng6oysWdSVGZfVKXUT1KTETl14zDh5AE8dPo9GXJ4CxUCPNYrhXtsNefXMu-49NM53NMHKMJRdJKzRszky67NEEfZfm3YV7m4Czzj2ikseByzQZKi3HpLaaJE4NJSmgcOPgbNMksyoQ4MwEz1rwaKzabGXZJhV47Zimeg5c_lJSAhP-Ehi0vteUjqNAlv2Wx8DxBVJSfURVEvUd1zx5Fb7ZxT-hsg-_fW5rZdNxmLqWJtExDrV99o" width={128} height={128} />
                <Image alt="Photo of a smiling male team member, representing the head of university partnerships." className="inline-block h-24 w-24 md:h-28 md:w-28 rounded-full ring-4 ring-white team-member-img object-cover z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu7Hxg7CIoxYzA2Ne6wSrTay_oJ3SZk31s3RXl6qg7qTvqCfT6rCJgeTPQGdT_D5ypd6FiCMLH1qKZ7Fr5AZ5AN_8hGGKqKwugpdGPyM91kY3wU9iWWkmD_bypawTymNxdWR7QdrSi8DlTxqmND34DvTm3Njjyj4MDh5zMlp10VW42pcqPqYnDzLkd11mZkRBbyltPcr4mo69fl8sW35ICa8klrdJSksOLS1Y1Qwck0h9Ql9dzMtwUuVG7Ya8rQHBKrpHvzG9mSZw" width={112} height={112} />
                <Image alt="Photo of a smiling female team member, representing the product manager." className="inline-block h-20 w-20 md:h-24 md:w-24 rounded-full ring-4 ring-white team-member-img object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEUAA7cTO04LodUWUt-RN1c9N-Qn4Yeb81N63J8Z0l5U9hEp-FLOtyWGoKSL1QxMa96ke3-0rmIKU-l-768LuEYyeXkBaDcwgeSqu0Ym4JdkZ4-zDYks5yk6grZGIAGk2cmKXPPV6xawBmpQGQE1OP5PBk3Mx2QeNgPMQ-YpIAnngNUvnELAc42kKZ6d-QKqaIxDLpEvsRGJnA2KmfruFACuDaGYs1Gu0gEvNEkwVr3aLMzKj0ja23rqOAVw1EYbYt9dqLHMg9PQ" width={96} height={96} />
              </div>
            </div>
          </section>

          <section className="bg-yellow-400">
            <div className="container mx-auto px-6 py-20 md:py-24">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="md:w-2/3 fade-in-up">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Ready to Build Your Verified Future?</h2>
                  <p className="mt-4 text-lg text-gray-800">Join thousands of students and leading universities who trust Achievo to validate success and unlock opportunities.</p>
                </div>
                <div className="fade-in-up" style={{ animationDelay: '150ms' }}>
                  <Link href="#" className="cta-button inline-block bg-gray-900 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg">
                    Sign Up for Free
                  </Link>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default OurMission
