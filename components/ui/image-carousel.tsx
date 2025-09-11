"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import login1 from '@/public/pathLoginImage-1.png'
import login2 from '@/public/parthLoginImage-2.png'
import login3 from '@/public/parthLoginImage-3.png'
import login4 from '@/public/parthLoginImage-4.png'
import login5 from '@/public/login5.png'

const images = [
  {
    src: login1,
    alt: "Smart Student Hub - Centralised Digital Platform for HEIS",
  },
  {
    src: login2,
    alt: "Smart Student Hub - Manage & build your profile",
  },
  {
    src: login3,
    alt: "Comprehensive Student Records - Your Academic Journey, Digitized",
  },
  {
    src: login4,
    alt: "Student Achievement Hub - Track Your Achievements. Simplify Your Journey",
  },
  {
    src: login5,
    alt: "Recognition - Your hard work, validated & celebrated",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-lg">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
