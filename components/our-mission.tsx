"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Animation helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: "easeOut" },
  viewport: { once: false, amount: 0.2 },
});

function OurMission() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Mission Section */}
      <section className="py-20 md:py-24 bg-yellow-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeUp(0)}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              Our Mission
            </motion.h2>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 leading-snug"
            >
              &quot;To forge a universal standard of trust for student
              achievements, empowering every learner to showcase their{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                verified potential
              </span>{" "}
              to the world.&quot;
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 tracking-tight"
          >
            The Achievo Advantage
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Digital Portfolio",
                desc: "Create a comprehensive, tamper-proof record of all your academic and extracurricular achievements.",
                icon: (
                  <path
                    d="M9 17v-2.286c0-.49.233-.956.635-1.258l5.882-4.411a2.121 2.121 0 00-2.121-3.642H9M9 17v2.5a2.5 2.5 0 002.5 2.5h2.5a2.5 2.5 0 002.5-2.5V17M9 17h6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
              },
              {
                title: "Seamless University Integration",
                desc: "Connect directly with your university for effortless verification of your courses, projects, and roles.",
                icon: (
                  <path
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1M9 3v1m6-1v1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
              },
              {
                title: "Enhanced Employability",
                desc: "Share your verified portfolio with employers to stand out and fast-track your career opportunities.",
                icon: (
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp(i * 0.2)}
                whileHover={{ scale: 1.05, y: -5 }}
                className="feature-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-colors"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-yellow-100 dark:bg-gray-700 mb-6">
                  <svg
                    className="h-8 w-8 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 tracking-tight"
          >
            Trusted by the Best
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                value: "98%",
                label: "Student Adoption",
                desc: "Students love the intuitive interface and the power of a verified portfolio.",
              },
              {
                value: "50+",
                label: "Partner Universities",
                desc: "We collaborate with forward-thinking institutions to empower their students.",
              },
              {
                value: "10k+",
                label: "Opportunities Unlocked",
                desc: "Connecting verified students with internships, jobs, and accreditations.",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.2)}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-6xl font-extrabold text-yellow-500">
                  {stat.value}
                </p>
                <p className="mt-2 text-xl text-gray-900 dark:text-white font-semibold">
                  {stat.label}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Meet the Minds Behind Achievo
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            We are a diverse, globally-distributed team united by a passion for
            education and technology. Our collaborative spirit is the engine
            that drives Achievo forward.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-12 flex justify-center items-center -space-x-4"
          >
            {[96, 112, 128, 112, 96].map((size, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
                className="inline-block ring-4 ring-white dark:ring-gray-700 rounded-full overflow-hidden z-10"
                style={{ width: size, height: size }}
              >
                <Image
                  alt={`Team member ${i + 1}`}
                  src={`https://picsum.photos/200?random=${i + 1}`}
                  width={size}
                  height={size}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 dark:bg-yellow-500 transition-colors">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <motion.div
            {...fadeUp(0)}
            className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-900 tracking-tight">
                Ready to Build Your Verified Future?
              </h2>
              <p className="mt-4 text-lg text-gray-800 dark:text-gray-100">
                Join thousands of students and leading universities who trust
                Achievo to validate success and unlock opportunities.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="cta-button inline-block bg-gray-900 dark:bg-gray-800 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg"
              >
                Sign Up for Free
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OurMission;
