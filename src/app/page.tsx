import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Documentation } from "@/components/documentation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Documentation />
      </main>
      <Footer />
    </div>
  )
}

