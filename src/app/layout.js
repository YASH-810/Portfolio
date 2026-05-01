import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Yash Londhe | Full Stack Developer",
  description:
    "Portfolio of Yash Londhe — Full Stack Developer, Android Developer & UI/UX Designer based in India. Crafting fast, accessible and visually stunning digital experiences.",
  keywords: ["Yash Londhe", "Full Stack Developer", "Next.js", "React", "Portfolio", "Android Developer"],
  authors: [{ name: "Yash Londhe" }],
  openGraph: {
    title: "Yash Londhe | Full Stack Developer",
    description: "Full Stack Developer Portfolio — Building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
