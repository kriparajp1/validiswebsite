import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Documentation } from "@/components/documentation"
import { RealWorldExamples } from "@/components/RealCaseExample"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CodeImplementationExamples } from "@/components/code-implementation"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Documentation />
        <RealWorldExamples />
        <CodeImplementationExamples/>
      </main>
      <Footer />
    </div>
  )
}

