"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function AboutSection() {
  return (
    <div>
      {/* Hero About Section */}
      <section className="relative bg-light-yellow pt-24 mt-10 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-semibold text-lg text-medium-gray"
          >
            ABOUT ACHIEVO
          </motion.p>

          {/* Typing Animation in Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-4 text-dark-gray"
          >
            Empowering Student Journeys, <br /> One{" "}
            <span className="text-yellow-500">
              <Typewriter
                words={["Verified Achievement", "Skill Recognition", "Opportunity"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>{" "}
            at a Time.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-medium-gray"
          >
            We are dedicated to providing students with the tools to build a
            comprehensive, verified digital portfolio, turning their hard work
            into tangible opportunities for their future careers.
          </motion.p>
        </div>

        {/* Floating Gradient Background Circles */}
        <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-0 -left-16 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 7, delay: 1 }}
            className="absolute bottom-0 -right-16 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          ></motion.div>

          {/* Main Content */}
          <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                alt="Students collaborating on laptops with bright ideas and teamwork"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
                width={1600}
                height={1067}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/40 via-yellow-400/20 to-transparent opacity-70"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-6 left-6 text-white"
              >
                <p className="text-sm uppercase tracking-widest font-medium">
                  Achievo Platform
                </p>
                <h3 className="text-2xl font-bold">Empowering Every Student</h3>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Who <span className="text-yellow-500">We Are</span>
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Achievo</span>{" "}
                was born from a powerful idea: every student&apos;s achievements
                deserve recognition. We’re a passionate team of educators,
                technologists, and designers committed to bridging the gap
                between academic accomplishments and professional success.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our mission is to create a transparent ecosystem where students
                confidently showcase their skills while employers discover{" "}
                <span className="font-semibold text-yellow-600">
                  verified talent
                </span>{" "}
                with ease.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg transition duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AboutSection;
