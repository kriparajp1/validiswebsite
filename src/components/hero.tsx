import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <strong>Validis</strong>  <br/>Simple Validation Package
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your go-to solution for simple and customizable form validations. Zero dependencies, lightweight, and blazing fast.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Badge variant="secondary">npm install validis</Badge>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Badge variant="secondary">or</Badge>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Badge variant="secondary">yarn add validis</Badge>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Button
                onClick={() => {
                  document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button> */}
              <Button variant="outline" asChild>
                <Link href="https://github.com/kriparajp1/validis">
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

