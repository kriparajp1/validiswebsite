"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'

// Mock Validis functions for demonstration
const validis = {
  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return { valid: emailRegex.test(email), reason: emailRegex.test(email) ? '' : 'Invalid email format.' };
  },
  phone: (phone: string) => {
    const phoneRegex = /^\+?\d{10,15}$/;
    return { valid: phoneRegex.test(phone), reason: phoneRegex.test(phone) ? '' : 'Invalid phone number format.' };
  },
  pass: (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasNonalphas = /\W/.test(password);
    const reasons = [];
    if (!hasUpperCase) reasons.push("Uppercase letter missing");
    if (!hasLowerCase) reasons.push("Lowercase letter missing");
    if (!hasNumbers) reasons.push("Number missing");
    if (!hasNonalphas) reasons.push("Symbol missing");
    return { valid: reasons.length === 0, reasons };
  }
};

export function RealWorldExamples() {
  const [email, setEmail] = useState('')
  const [emailResult, setEmailResult] = useState<{ valid: boolean; reason?: string } | null>(null)
  const [phone, setPhone] = useState('')
  const [phoneResult, setPhoneResult] = useState<{ valid: boolean; reason?: string } | null>(null)
  const [password, setPassword] = useState('')
  const [passwordResult, setPasswordResult] = useState<{ valid: boolean; reasons?: string[] } | null>(null)

  const validateEmail = () => {
    setEmailResult(validis.email(email))
  }

  const validatePhone = () => {
    setPhoneResult(validis.phone(phone))
  }

  const validatePassword = () => {
    setPasswordResult(validis.pass(password))
  }

  return (
    <div className="py-12 sm:py-16 lg:py-24" id="examples">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Real-World Examples</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            See Validis in Action
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Try out these interactive examples to see how Validis handles real-world validation scenarios.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Email Validation</CardTitle>
              <CardDescription>Test the email validation function</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter an email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={validateEmail}>Validate</Button>
              {emailResult && (
                <div className="flex items-center">
                  {emailResult.valid ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span>{emailResult.valid ? 'Valid' : emailResult.reason}</span>
                </div>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phone Validation</CardTitle>
              <CardDescription>Test the phone number validation function</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter a phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={validatePhone}>Validate</Button>
              {phoneResult && (
                <div className="flex items-center">
                  {phoneResult.valid ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span>{phoneResult.valid ? 'Valid' : phoneResult.reason}</span>
                </div>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password Validation</CardTitle>
              <CardDescription>Test the password strength validation function</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={validatePassword}>Validate</Button>
              {passwordResult && (
                <div className="flex items-center">
                  {passwordResult.valid ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span>{passwordResult.valid ? 'Valid' : passwordResult.reasons?.join(', ')}</span>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

