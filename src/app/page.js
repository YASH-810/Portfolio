import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Hero from "@/components/HeroSection";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-[#d4b527] font-semibold">Yash Londhe</span>. Crafted with ❤️ using Next.js.
        </p>
        <div className="flex items-center gap-6 text-gray-500 text-sm">
          <a href="#home" className="hover:text-[#d4b527] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#d4b527] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#d4b527] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#d4b527] transition-colors">Contact</a>
        </div>
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
