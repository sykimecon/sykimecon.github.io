import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seongyoon Kim | Economics PhD Candidate",
  description: "Seongyoon Kim - PhD Candidate in Economics at the University of Michigan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-slate-body text-[15px] leading-relaxed`}>
        <Header />
        {/* Sidebar + Main grid */}
        <div className="w-[min(100%-2rem,70rem)] mx-auto pt-16 pb-12 md:w-[min(90vw,70rem)] md:pt-20 md:grid md:grid-cols-[minmax(14rem,17rem)_minmax(0,1fr)] md:gap-12 md:items-start">
          <Sidebar />
          <main className="min-w-0 pb-12 md:pt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
