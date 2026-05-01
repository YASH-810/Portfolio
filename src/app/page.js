import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

function Footer() {
  const socials = [
    { label: "GitHub",    href: "https://github.com/yash-810" },
    { label: "LinkedIn",  href: "https://linkedin.com/in/yash-londhe-969a242a2" },
    { label: "Twitter",   href: "https://x.com/yourusername" },
    { label: "Instagram", href: "https://instagram.com/yashh_londhe" },
  ];

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-700 text-xs">
          © {new Date().getFullYear()} Yash Londhe
        </p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
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
