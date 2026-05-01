import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Yash Londhe — Full Stack Developer",
  description:
    "Portfolio of Yash Londhe, a Full Stack Developer building performant, accessible, and well-crafted digital products.",
  keywords: ["Yash Londhe", "Full Stack Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Yash Londhe" }],
  openGraph: {
    title: "Yash Londhe — Full Stack Developer",
    description: "Building performant, accessible, and well-crafted digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
