import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectSection';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/footer';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Hero/>
      <ProjectsSection />
      <AboutSection/>
      <NewsSection/>
    </div>
  );
}