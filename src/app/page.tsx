import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Documentation } from "@/components/documentation"
import { RealWorldExamples } from "@/components/RealCaseExample"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CodeImplementationExamples } from "@/components/code-implementation"
import { SchemaAPI } from "@/components/schema-api"
import { AvailableValidations } from "@/components/available-validations"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SchemaAPI />
        <AvailableValidations />
        <Documentation />
        <RealWorldExamples />
        <CodeImplementationExamples/>
      </main>
      <Footer />
    </div>
  )
}

