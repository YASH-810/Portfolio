import Image from "next/image";
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Service from "@/components/Service";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Hero from "@/components/HeroSection";
import StarsBackground from "@/components/Particles";
export default function Home() {
  return (
   <>
   <StarsBackground />
   <Navbar />
   <Hero />
   <About />
   <Service />
   <Project />
   <Contact />
   </>
  );
}
