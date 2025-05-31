"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const schemaApiCode = `const { Schema } = require('validis');

// String validation
const stringSchema = Schema.string().min(3).max(10).email();
const result = stringSchema.parse('test@example.com');

// Number validation
const numberSchema = Schema.number().min(5).max(100).positive();
const numResult = numberSchema.parse(42);

// Boolean validation
const boolSchema = Schema.boolean();
const boolResult = boolSchema.parse(true);

// Object validation
const userSchema = Schema.object({
  username: Schema.string().min(3).max(20),
  email: Schema.string().email(),
  age: Schema.number().min(18).optional()
});
const userResult = userSchema.parse({
  username: 'johndoe',
  email: 'john@example.com',
  age: 25
});

// Array validation
const arraySchema = Schema.array(Schema.string()).min(1).max(5);
const arrayResult = arraySchema.parse(['apple', 'banana', 'cherry']);`

const schemaClassesCode = `// Using the new shorter class names
const { 
  BasicSchema,
  NumSchema,
  PassSchema,
  TextSchema,
  SpaceSchema,
  OtpSchema 
} = require('validis');

// Basic validations
const basicValidator = new BasicSchema();
basicValidator.email().char(50);
const emailResult = basicValidator.validate('example@example.com');

// Number validations
const numberValidator = new NumSchema();
numberValidator.num().range(10, 100);
const numberResult = numberValidator.validate(50);

// Password validations
const passwordValidator = new PassSchema();
passwordValidator.minLen(8).pass();
passwordValidator.setCompareValue('Password123!');
passwordValidator.match();
const passwordResult = passwordValidator.validate('Password123!');

// Text case validations
const textCaseValidator = new TextSchema();
textCaseValidator.firstUpper().isUpper();
const textResult = textCaseValidator.validate('HELLO');

// White space validations
const whiteSpaceValidator = new SpaceSchema();
whiteSpaceValidator.edgeSpace().blank();
const whiteSpaceResult = whiteSpaceValidator.validate('Hello World');

// OTP generator
const otpGenerator = new OtpSchema();
otpGenerator.setLength(8).setType('mixed');
const mixedOtp = otpGenerator.generate();
// Or use shorthand methods
const numOtp = otpGenerator.numOtp();
const alphaOtp = otpGenerator.alphaOtp();`

const returnValuesCode = `// Schema-based API - Success case
{
  success: true,
  data: value // The validated value
}

// Schema-based API - Error case
{
  success: false,
  errors: [
    {
      code: 'validation.code',
      message: 'Error message'
    },
    // More errors if multiple validations failed
  ]
}

// Legacy Function API
{
  valid: true
}

// Legacy Function API - Error case
{
  valid: false,
  reason: 'Error message'
}`

export function SchemaAPI() {
  return (
    <div className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" id="schema-api">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Modern API
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
            Powerful Schema-based Validation
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Validis provides two modern APIs for complex validation scenarios, giving you flexibility and power.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="schema" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-xl p-1 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="schema" className="rounded-lg text-sm font-medium transition-all">Schema API</TabsTrigger>
              <TabsTrigger value="classes" className="rounded-lg text-sm font-medium transition-all">Schema Classes</TabsTrigger>
              <TabsTrigger value="return" className="rounded-lg text-sm font-medium transition-all">Return Values</TabsTrigger>
            </TabsList>
            <TabsContent value="schema" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm">
                  <CardTitle className="text-xl font-bold">Schema-based API</CardTitle>
                  <CardDescription>A chainable API for complex validations with type safety</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="rounded-b-lg bg-muted/80 p-6 overflow-x-auto text-sm">
                    <code>{schemaApiCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="classes" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm">
                  <CardTitle className="text-xl font-bold">Validation Schema Classes</CardTitle>
                  <CardDescription>Class-based implementations with chainable API for complex scenarios</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="rounded-b-lg bg-muted/80 p-6 overflow-x-auto text-sm">
                    <code>{schemaClassesCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="return" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm">
                  <CardTitle className="text-xl font-bold">Return Values</CardTitle>
                  <CardDescription>Understanding validation results and error handling</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="rounded-b-lg bg-muted/80 p-6 overflow-x-auto text-sm">
                    <code>{returnValuesCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}