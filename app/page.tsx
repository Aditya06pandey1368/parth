import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import FeatureSection from '@/components/feature-section';
import AboutSection from '@/components/about-section';
import OurMission from '@/components/our-mission';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="relative min-h-screen overflow-x-hidden">
        
        {/* 👇 Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-50 dark:bg-gray-900 shadow-md">
          <Navbar />
        </div>

        {/* 👇 Add top padding equal to navbar height */}
        <main className="relative pt-20">
          <Hero />
          <FeatureSection />
          <AboutSection />
          <OurMission />
        </main>

        <Footer />
      </div>
    </div>
  );
}
