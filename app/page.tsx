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
    // 👇 This is the line that was changed
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="relative min-h-screen overflow-x-hidden">
        
        <Navbar></Navbar>
        <main className="relative">
          <Hero></Hero>
          <FeatureSection></FeatureSection>
          <AboutSection></AboutSection>
          <OurMission></OurMission>
        </main>

        <Footer></Footer>
      </div>
    </div>
  );
}