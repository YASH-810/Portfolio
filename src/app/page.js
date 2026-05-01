import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-zinc-700 text-xs">
          © {new Date().getFullYear()} Yash Londhe
        </p>
        <p className="text-zinc-700 text-xs">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
