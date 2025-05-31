'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Copy, Terminal } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState<{npm: boolean, yarn: boolean}>({npm: false, yarn: false});
  const [activeTab, setActiveTab] = useState<'npm' | 'yarn'>('npm');

  const copyToClipboard = (type: 'npm' | 'yarn', text: string) => {
    navigator.clipboard.writeText(text);
    setCopied({...copied, [type]: true});
    setTimeout(() => setCopied({...copied, [type]: false}), 2000);
  };

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-[#1a1a1a] dark:to-[#6366f1] dark:opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-8 w-8 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute right-1/4 top-1/3 h-6 w-6 rounded-full bg-purple-500/20 animate-pulse delay-300"></div>
        <div className="absolute left-1/3 bottom-1/4 h-10 w-10 rounded-full bg-blue-500/20 animate-pulse delay-700"></div>
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="gradient" className="mb-4 px-4 py-1 text-sm animate-gradient">
              JavaScript Validation Library
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
              <strong>Validis</strong> <br />
              <span className="text-foreground">Comprehensive Validation Library</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A powerful JavaScript validation library with a user-friendly, chainable API for complex validations.
            </p>
            
            {/* Code installation box */}
            <div className="mt-8 flex justify-center">
              <div className="relative rounded-xl bg-muted/50 backdrop-blur-sm p-4 ring-1 ring-inset ring-muted-foreground/10 lg:rounded-2xl lg:p-6 w-full max-w-md shadow-lg dark:shadow-primary/5">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-muted-foreground/5 rounded-full p-1">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Terminal className="h-4 w-4 text-primary" />
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex space-x-2 mb-3 border-b">
                  <button 
                    className={`pb-2 text-sm font-medium ${activeTab === 'npm' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
                    onClick={() => setActiveTab('npm')}
                  >
                    npm
                  </button>
                  <button 
                    className={`pb-2 text-sm font-medium ${activeTab === 'yarn' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
                    onClick={() => setActiveTab('yarn')}
                  >
                    yarn
                  </button>
                </div>
                
                {/* Content */}
                <div className="rounded-md bg-background p-3 dark:bg-muted/80 border border-border/50 relative overflow-hidden">
                  {activeTab === 'npm' && (
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-muted-foreground">npm install validis</code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 hover:bg-primary/10 hover:text-primary" 
                        onClick={() => copyToClipboard('npm', 'npm install validis')}
                      >
                        {copied.npm ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  )}
                  
                  {activeTab === 'yarn' && (
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-muted-foreground">yarn add validis</code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 hover:bg-primary/10 hover:text-primary" 
                        onClick={() => copyToClipboard('yarn', 'yarn add validis')}
                      >
                        {copied.yarn ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={() => {
                  document.getElementById('schema-api')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-purple-600 opacity-0 blur transition-opacity group-hover:opacity-50"></span>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="group relative overflow-hidden border-primary/20 hover:border-primary/50 transition-colors duration-300"
              >
                <Link href="https://github.com/kriparajp1/validis" className="inline-flex items-center">
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:from-[#1a1a1a] dark:to-[#6366f1] dark:opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

