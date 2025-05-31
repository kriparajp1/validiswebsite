"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const validations = {
  string: [
    { name: "min(length)", description: "Minimum string length" },
    { name: "max(length)", description: "Maximum string length" },
    { name: "length(length)", description: "Exact string length" },
    { name: "email()", description: "Email format validation" },
    { name: "url()", description: "URL format validation" },
    { name: "pattern(regex)", description: "Custom regex pattern validation" },
    { name: "noWhitespace()", description: "No whitespace validation" },
    { name: "nonEmpty()", description: "Non-empty string validation" },
  ],
  number: [
    { name: "min(value)", description: "Minimum value" },
    { name: "max(value)", description: "Maximum value" },
    { name: "positive()", description: "Positive number validation" },
    { name: "negative()", description: "Negative number validation" },
    { name: "integer()", description: "Integer validation" },
    { name: "range(min, max)", description: "Range validation" },
  ],
  boolean: [
    { name: "true()", description: "Must be true" },
    { name: "false()", description: "Must be false" },
  ],
  object: [
    { name: "required()", description: "Required fields validation" },
    { name: "strict()", description: "No additional properties allowed" },
  ],
  array: [
    { name: "min(length)", description: "Minimum array length" },
    { name: "max(length)", description: "Maximum array length" },
    { name: "length(length)", description: "Exact array length" },
    { name: "unique()", description: "Unique items validation" },
  ],
  basic: [
    { name: "email()", description: "Email format validation" },
    { name: "phone()", description: "Phone number format validation" },
    { name: "char(limit)", description: "Character limit validation" },
  ],
  numSchema: [
    { name: "num()", description: "Positive number validation" },
    { name: "range(min, max)", description: "Range validation" },
  ],
  password: [
    { name: "pass()", description: "Password strength validation" },
    { name: "minLen(length)", description: "Minimum length validation" },
    { name: "setCompareValue(value)", description: "Set comparison value" },
    { name: "match()", description: "Password match validation" },
  ],
  textCase: [
    { name: "firstUpper()", description: "First letter uppercase validation" },
    { name: "isLower()", description: "Lowercase validation" },
    { name: "isUpper()", description: "Uppercase validation" },
  ],
  space: [
    { name: "edgeSpace()", description: "No leading/trailing whitespace validation" },
    { name: "noSpaces()", description: "No whitespace validation" },
    { name: "blank()", description: "Non-blank validation" },
  ],
  otp: [
    { name: "setLength(length)", description: "Set OTP length" },
    { name: "setType(type)", description: "Set OTP type ('mixed', 'numeric', 'alphabetic')" },
    { name: "generate()", description: "Generate OTP" },
    { name: "mixOtp()", description: "Generate mixed alphanumeric OTP" },
    { name: "numOtp()", description: "Generate numeric OTP" },
    { name: "alphaOtp()", description: "Generate alphabetic OTP" },
  ],
}

export function AvailableValidations() {
  return (
    <div className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" id="available-validations">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/3 top-1/3 h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Validation Methods
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
            Available Validations
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore the comprehensive set of validation methods available in Validis for all your validation needs.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="string" className="w-full">
            <TabsList className="inline-flex h-auto flex-wrap justify-center rounded-xl bg-muted/50 backdrop-blur-sm p-2 text-muted-foreground mb-8 gap-2">
              <TabsTrigger value="string" className="rounded-lg text-sm font-medium transition-all">String Schema</TabsTrigger>
              <TabsTrigger value="number" className="rounded-lg text-sm font-medium transition-all">Number Schema</TabsTrigger>
              <TabsTrigger value="boolean" className="rounded-lg text-sm font-medium transition-all">Boolean Schema</TabsTrigger>
              <TabsTrigger value="object" className="rounded-lg text-sm font-medium transition-all">Object Schema</TabsTrigger>
              <TabsTrigger value="array" className="rounded-lg text-sm font-medium transition-all">Array Schema</TabsTrigger>
              <TabsTrigger value="basic" className="rounded-lg text-sm font-medium transition-all">Basic Schema</TabsTrigger>
              <TabsTrigger value="numSchema" className="rounded-lg text-sm font-medium transition-all">Num Schema</TabsTrigger>
              <TabsTrigger value="password" className="rounded-lg text-sm font-medium transition-all">Password Schema</TabsTrigger>
              <TabsTrigger value="textCase" className="rounded-lg text-sm font-medium transition-all">Text Schema</TabsTrigger>
              <TabsTrigger value="space" className="rounded-lg text-sm font-medium transition-all">Space Schema</TabsTrigger>
              <TabsTrigger value="otp" className="rounded-lg text-sm font-medium transition-all">OTP Schema</TabsTrigger>
            </TabsList>
            
            {Object.entries(validations).map(([key, methods]) => (
              <TabsContent key={key} value={key}>
                <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-muted/30 backdrop-blur-sm border-b border-border/20">
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
                      {key.charAt(0).toUpperCase() + key.slice(1)} Schema Validations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {methods.map((method, index) => (
                        <div 
                          key={index} 
                          className="border border-border/40 rounded-xl p-4 bg-card shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <h3 className="text-md font-semibold mb-2 font-mono text-primary">{method.name}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      ))}
                    </div>
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