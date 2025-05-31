import { Github, Linkedin } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 backdrop-blur-sm py-16 border-t border-border/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-1/4 top-0 h-[250px] w-[250px] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h3 className="text-xl font-bold leading-6 text-foreground bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">Validis</h3>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              A comprehensive and powerful validation library for JavaScript with an intuitive, chainable API.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/kriparajp1/validis" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Documentation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#features" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#schema-api" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Schema API
                    </a>
                  </li>
                  <li>
                    <a href="#docs" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="https://github.com/kriparajp1/validis/issues" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      GitHub Issues
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kriparajp1/validis" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/20 pt-8 sm:mt-20 lg:mt-24 flex items-center justify-between">
          <p className="text-xs leading-5 text-muted-foreground">&copy; {new Date().getFullYear()} Validis. All rights reserved.</p>
          <p className="text-xs leading-5 text-muted-foreground">Made with ❤️ for developers</p>
        </div>
      </div>
    </footer>
  )
}

