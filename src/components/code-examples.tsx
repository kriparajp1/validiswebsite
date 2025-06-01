"use client"

// import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/ui/code-block"

const examples = {
  email: `const { email } = require('validis');
const result = email('test@example.com');
// Returns: { valid: true }`,
  phone: `const { phone } = require('validis');
const result = phone('+1234567890');
// Returns: { valid: true }`,
  password: `const { pass } = require('validis');
const result = pass('Passw0rd!');
// Returns: { valid: true }`,
  spaces: `const { noSpaces } = require('validis');
const result = noSpaces('hello');    // ✅ Valid
const result2 = noSpaces('hello world'); // ❌ Invalid`,
}

export function CodeExamples() {
  // const [activeTab, setActiveTab] = useState("email")

  return (
    <div className="py-24 sm:py-32" id="docs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Documentation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple and intuitive API
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get started quickly with our easy-to-use validation functions.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="spaces">Spaces</TabsTrigger>
            </TabsList>
            {Object.entries(examples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <CodeBlock code={code} language="javascript" />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

