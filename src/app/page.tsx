"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Legend from "@/components/Legend";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/ChatBot";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <Legend />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <CookieBanner />
    </>
  );
}
