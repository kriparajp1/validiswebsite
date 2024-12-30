import { Github, Linkedin } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://github.com/kriparajp1" className="text-muted-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/kriparajp/" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Validis Package. All rights reserved.
          </p>
          <p className="text-center text-sm leading-5 text-muted-foreground mt-2">
            Developed with ❤️ by Kriparaj P
          </p>
        </div>
      </div>
    </footer>
  )
}

