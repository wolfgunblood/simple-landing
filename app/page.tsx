"use client"
import CTA from "@/components/cta";
import { FAQ } from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import Testimonial from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <HeroImage />
      <Features />
      {/* <Pricing /> */}
      <FAQ />
      {/* <Testimonial /> */}
      <CTA />
      <Footer />
      </>
  );
}
