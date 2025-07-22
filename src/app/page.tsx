"use client"
import React from "react";

import Navigation from "../components/Navigation";
import TestimonialsSection from "../components/TestimonialsSection";
import HeroSection2 from "@/components/HeroSection2";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TechnologySection from "@/components/TechnologySection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const HomePage: React.FC = () => {
  return (

    <div className="bg-white dark:bg-dark text-text-primary dark:text-white font-sans antialiased overflow-x-hidden">
      <Navigation />
      <HeroSection2 />
      <ServicesSection />
      <TeamSection />
      <TechnologySection />
      <PricingSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
