"use client"

// import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from 'lucide-react'

const validationDocs = {
  basic: {
    title: "Basic Validations",
    description: "Essential validation functions for common use cases",
    functions: [
      {
        name: "email",
        description: "Validates email format using regex pattern matching",
        usage: `const { email } = require('validis');
const result = email('test@example.com');
// Returns: { valid: true } or { valid: false, reason: "Invalid email format." }`,
        validExamples: ["user@example.com", "name.lastname@domain.com"],
        invalidExamples: ["plainaddress", "@domain.com"]
      },
      {
        name: "phone",
        description: "Validates phone numbers with optional '+' prefix (10-15 digits)",
        usage: `const { phone } = require('validis');
const result = phone('+1234567890');
// Returns: { valid: true } or { valid: false, reason: "Invalid phone number format." }`,
        validExamples: ["+1234567890", "1234567890"],
        invalidExamples: ["123456", "abcdefghijk"]
      },
      {
        name: "char",
        description: "Checks if the input string length does not exceed the given limit",
        usage: `const { char } = require('validis');
const result = char('hello', 10);
// Returns: { valid: true } or { valid: false, reason: "Input exceeds character limit." }`,
        validExamples: ["hello", "short"],
        invalidExamples: ["this is too long", "exceeds limit"]
      }
    ]
  },
  space: {
    title: "Space Validations",
    description: "Functions to validate various space-related conditions",
    functions: [
      {
        name: "edgeSpace",
        description: "Ensures no leading or trailing spaces",
        usage: `const { edgeSpace } = require('validis');
const result = edgeSpace('hello');  // ✅ Valid
const result2 = edgeSpace(' hello'); // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "No edge spaces allowed." }`,
        validExamples: ["hello", "no spaces"],
        invalidExamples: [" leading space", "trailing space "]
      },
      {
        name: "noSpaces",
        description: "Ensures the input contains no spaces at all",
        usage: `const { noSpaces } = require('validis');
const result = noSpaces('hello');    // ✅ Valid
const result2 = noSpaces('hello world'); // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "No spaces allowed." }`,
        validExamples: ["hello", "nospaces"],
        invalidExamples: ["hello world", "has spaces"]
      },
      {
        name: "blank",
        description: "Checks if the input is not entirely whitespace",
        usage: `const { blank } = require('validis');
const result = blank('hello');  // ✅ Valid
const result2 = blank('   ');   // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "Cannot be blank." }`,
        validExamples: ["hello", "not blank"],
        invalidExamples: ["   ", "\t\n"]
      }
    ]
  },
  password: {
    title: "Password Validations",
    description: "Functions to validate password strength and length",
    functions: [
      {
        name: "pass",
        description: "Validates password strength (uppercase, lowercase, numbers, symbols)",
        usage: `const { pass } = require('validis');
const result = pass('Passw0rd!');
// Returns: { valid: true } or { valid: false, reasons: ["Uppercase letter missing", ...] }`,
        validExamples: ["Passw0rd!", "Str0ng@Pass"],
        invalidExamples: ["password", "12345678"]
      },
      {
        name: "minLen",
        description: "Checks if the input meets a minimum length requirement",
        usage: `const { minLen } = require('validis');
const result = minLen('hello', 5);
// Returns: { valid: true } or { valid: false, reason: "Input does not meet minimum length." }`,
        validExamples: ["password", "longEnough"],
        invalidExamples: ["short", "tiny"]
      },
      {
        name: "match",
        description: "Validates if two inputs match exactly.",
        usage: `const { match } = require('validis');
    const result = match('input1', 'input2');
    // Returns: { valid: true } or { valid: false, reason: "Inputs do not match!" }`,
        validExamples: ["password123", "password123"],
        invalidExamples: ["password123", "passw"]
    }
    
    ]
  },
  number: {
    title: "Number Validations",
    description: "Functions to validate numerical inputs",
    functions: [
      {
        name: "num",
        description: "Validates if a number is positive",
        usage: `const { num } = require('validis');
const result = num(42);
// Returns: { valid: true } or { valid: false, reason: "Number must be positive." }`,
        validExamples: ["42", "1.5"],
        invalidExamples: ["-1", "0"]
      },
      {
        name: "range",
        description: "Checks if a number is within a specified range",
        usage: `const { range } = require('validis');
const result = range(50, 10, 100);
// Returns: { valid: true } or { valid: false, reason: "Number is out of range." }`,
        validExamples: ["50", "75"],
        invalidExamples: ["5", "150"]
      }
    ]
  },
  textCase: {
    title: "Text Case Validations",
    description: "Functions to validate text casing",
    functions: [
      {
        name: "firstUpper",
        description: "Checks if the first letter of the input is uppercase",
        usage: `const { firstUpper } = require('validis');
const result = firstUpper('Hello');
// Returns: { valid: true } or { valid: false, reason: "First letter is not uppercase." }`,
        validExamples: ["Hello", "Test"],
        invalidExamples: ["hello", "test"]
      },
      {
        name: "isLower",
        description: "Validates if the entire input is lowercase",
        usage: `const { isLower } = require('validis');
const result = isLower('hello');
// Returns: { valid: true } or { valid: false, reason: "String is not fully lowercase." }`,
        validExamples: ["hello", "lowercase"],
        invalidExamples: ["Hello", "UPPERCASE"]
      },
      {
        name: "isUpper",
        description: "Validates if the entire input is uppercase",
        usage: `const { isUpper } = require('validis');
const result = isUpper('HELLO');
// Returns: { valid: true } or { valid: false, reason: "String is not fully uppercase." }`,
        validExamples: ["HELLO", "UPPERCASE"],
        invalidExamples: ["Hello", "lowercase"]
      }
    ]
  }
}

export function Documentation() {
  // const [activeTab, setActiveTab] = useState("basic")

  return (
    <div className="py-12 sm:py-16 lg:py-24 relative" id="docs">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 bottom-1/3 h-[200px] w-[200px] rounded-full bg-green-200 opacity-20 blur-3xl dark:bg-green-900 dark:opacity-10"></div>
        <div className="absolute right-1/3 top-1/4 h-[180px] w-[180px] rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900 dark:opacity-10"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Badge variant="info" className="mb-4 px-4 py-1">Documentation</Badge>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Comprehensive Validation Guide
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn how to use Validis validation functions with detailed examples and use cases.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="basic" className="w-full" >
            <TabsList className="inline-flex h-auto flex-wrap justify-center rounded-xl bg-muted/80 backdrop-blur-sm p-1.5 text-muted-foreground mb-8 border border-border/50 shadow-sm">
              {Object.keys(validationDocs).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {validationDocs[key as keyof typeof validationDocs].title}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(validationDocs).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-primary/10 shadow-lg dark:shadow-primary/5 overflow-hidden">
                  <CardHeader className="bg-muted/50 backdrop-blur-sm border-b border-border/10">
                    <CardTitle className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 p-4 sm:p-6">
                    {category.functions.map((func, index) => (
                      <div key={index} className="border-t pt-6 first:border-t-0 first:pt-0 hover:bg-muted/30 p-4 rounded-lg transition-colors duration-200">
                        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{func.name}</h3>
                        <p className="text-muted-foreground mb-4">{func.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Usage</h4>
                          <pre className="rounded-lg bg-muted/80 p-4 overflow-x-auto text-sm border border-border/50 shadow-inner">
                            <code>{func.usage}</code>
                          </pre>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Valid Examples
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {func.validExamples.map((example, i) => (
                                <Badge key={i} variant="secondary">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              Invalid Examples
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {func.invalidExamples.map((example, i) => (
                                <Badge key={i} variant="secondary">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

