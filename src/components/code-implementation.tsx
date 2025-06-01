"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/code-block"

const reactCode = `import React, { useState } from "react";
import { Schema } from "validis";

const SignupForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});

  // Define validation schemas
  const userSchema = {
    email: Schema.string().email(),
    password: Schema.string().min(8).pass(),
    username: Schema.string().min(3).max(20).noWhitespace()
  };

  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validate each field using Schema API
    Object.entries(userSchema).forEach(([field, schema]) => {
      const result = schema.parse(formData[field]);
      if (!result.success) {
        newErrors[field] = result.errors.map(err => err.message).join(", ");
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Submit form data to server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      {["email", "password", "username"].map((field) => (
        <div key={field} className="space-y-2">
          <label className="block text-sm font-medium">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            type={field === "password" ? "password" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors[field] && (
            <p className="text-red-500 text-sm">{errors[field]}</p>
          )}
        </div>
      ))}
      <button 
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
`

const vueCode = `<template>
  <div id="app" class="max-w-md mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Signup Form</h1>
    <form @submit.prevent="validateForm" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium">Email:</label>
        <input type="email" v-model="form.email" id="email" class="w-full px-3 py-2 border rounded-md" />
        <p class="text-red-500 text-sm" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="space-y-2">
        <label for="password" class="block text-sm font-medium">Password:</label>
        <input type="password" v-model="form.password" id="password" class="w-full px-3 py-2 border rounded-md" />
        <p class="text-red-500 text-sm" v-if="errors.password">{{ errors.password }}</p>
      </div>
      <div class="space-y-2">
        <label for="username" class="block text-sm font-medium">Username:</label>
        <input type="text" v-model="form.username" id="username" class="w-full px-3 py-2 border rounded-md" />
        <p class="text-red-500 text-sm" v-if="errors.username">{{ errors.username }}</p>
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
import { Schema } from "validis";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        username: "",
      },
      errors: {
        email: "",
        password: "",
        username: "",
      },
      // Define validation schemas
      schemas: {
        email: Schema.string().email(),
        password: Schema.string().min(8).pass(),
        username: Schema.string().min(3).max(20).noWhitespace()
      }
    };
  },
  methods: {
    validateForm() {
      // Reset errors
      this.errors = { email: "", password: "", username: "" };
      let isValid = true;

      // Validate each field using Schema API
      Object.entries(this.schemas).forEach(([field, schema]) => {
        const result = schema.parse(this.form[field]);
        if (!result.success) {
          this.errors[field] = result.errors.map(err => err.message).join(", ");
          isValid = false;
        }
      });

      // If all validations pass
      if (isValid) {
        alert("Form submitted successfully!");
        // Submit form data to server
      }
    },
  },
};
</script>
`

const angularCode = `import { Component } from '@angular/core';
import { Schema } from 'validis';

@Component({
  selector: 'app-root',
  template: 
    <div class="max-w-md mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Signup Form</h1>
      <form (ngSubmit)="validateForm()" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium">Email:</label>
          <input 
            type="email" 
            id="email" 
            [(ngModel)]="form.email" 
            name="email"
            class="w-full px-3 py-2 border rounded-md"
          />
          <p *ngIf="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium">Password:</label>
          <input 
            type="password" 
            id="password" 
            [(ngModel)]="form.password" 
            name="password"
            class="w-full px-3 py-2 border rounded-md"
          />
          <p *ngIf="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
        </div>
        <div class="space-y-2">
          <label for="username" class="block text-sm font-medium">Username:</label>
          <input 
            type="text" 
            id="username" 
            [(ngModel)]="form.username" 
            name="username"
            class="w-full px-3 py-2 border rounded-md"
          />
          <p *ngIf="errors.username" class="text-red-500 text-sm">{{ errors.username }}</p>
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = {
    email: '',
    password: '',
    username: ''
  };

  errors = {
    email: '',
    password: '',
    username: ''
  };

  // Define validation schemas
  private schemas = {
    email: Schema.string().email(),
    password: Schema.string().min(8).pass(),
    username: Schema.string().min(3).max(20).noWhitespace()
  };

  validateForm() {
    // Reset errors
    this.errors = { email: '', password: '', username: '' };
    let isValid = true;

    // Validate each field using Schema API
    Object.entries(this.schemas).forEach(([field, schema]) => {
      const result = schema.parse(this.form[field as keyof typeof this.form]);
      if (!result.success) {
        this.errors[field as keyof typeof this.errors] = result.errors.map(err => err.message).join(', ');
        isValid = false;
      }
    });

    // If all validations pass
    if (isValid) {
      alert('Form submitted successfully!');
      // Submit form data to server
    }
  }
}`

// const HTMLcode=`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Signup Form</title>
//   <script src="https://cdn.jsdelivr.net/npm/validis@1.0.10/index.min.js"></script>
//   <style>
//     .error { color: red; font-size: 0.9rem; }
//   </style>
// </head>
// <body>
//   <h1>Signup Form</h1>
//   <form id="signupForm">
//     <div>
//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email">
//       <p class="error" id="emailError"></p>
//     </div>
//     <div>
//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password">
//       <p class="error" id="passwordError"></p>
//     </div>
//     <div>
//       <label for="username">Username:</label>
//       <input type="text" id="username" name="username">
//       <p class="error" id="usernameError"></p>
//     </div>
//     <button type="submit">Signup</button>
//   </form>

//   <script>
//     document.getElementById("signupForm").addEventListener("submit", function (e) {
//       e.preventDefault();

//       const emailInput = document.getElementById("email").value;
//       const passwordInput = document.getElementById("password").value;
//       const usernameInput = document.getElementById("username").value;

//       // Clear previous errors
//       document.getElementById("emailError").textContent = "";
//       document.getElementById("passwordError").textContent = "";
//       document.getElementById("usernameError").textContent = "";

//       // Validate using Validis
//       const emailValidation = validis.email(emailInput);
//       const passwordValidation = validis.pass(passwordInput);
//       const usernameValidation = validis.noSpaces(usernameInput);

//       if (!emailValidation.valid) {
//         document.getElementById("emailError").textContent = emailValidation.reason;
//       }
//       if (!passwordValidation.valid) {
//         document.getElementById("passwordError").textContent =
//           passwordValidation.reasons ? passwordValidation.reasons.join(", ") : passwordValidation.reason;
//       }
//       if (!usernameValidation.valid) {
//         document.getElementById("usernameError").textContent = usernameValidation.reason;
//       }

//       // If all validations pass
//       if (emailValidation.valid && passwordValidation.valid && usernameValidation.valid) {
//         alert("Form submitted successfully!");
//       }
//     });
//   </script>
// </body>
// </html>
// `
// const cdn=`<script src="https://cdn.jsdelivr.net/npm/validis@1.0.10/index.min.js"></script>
// `
export function CodeImplementationExamples() {
  return (
    <div className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" id="code-examples">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Code Implementation
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
            Validis in Your Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Integrate Validis seamlessly into your frontend applications with these framework-specific examples.
            See how to implement form validation with our intuitive API across popular frameworks.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-xl p-1 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="react" className="rounded-lg text-sm font-medium transition-all">React.js</TabsTrigger>
              <TabsTrigger value="vue" className="rounded-lg text-sm font-medium transition-all">Vue.js</TabsTrigger>
              <TabsTrigger value="angular" className="rounded-lg text-sm font-medium transition-all">Angular</TabsTrigger>
              {/* <TabsTrigger value="html">HTML</TabsTrigger> */}
            </TabsList>
            <TabsContent value="react" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm border-b border-border/20">
                  <CardTitle className="text-xl font-bold">React Implementation</CardTitle>
                  <CardDescription>Using Validis in a React signup form with form validation</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Using the new CodeBlock component for syntax highlighting */}
                  <div className="rounded-b-lg overflow-hidden">
                    <CodeBlock code={reactCode} language="jsx" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vue" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm border-b border-border/20">
                  <CardTitle className="text-xl font-bold">Vue.js Implementation</CardTitle>
                  <CardDescription>Using Validis in a Vue.js signup form with reactive validation</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Using the new CodeBlock component for syntax highlighting */}
                  <div className="rounded-b-lg overflow-hidden">
                    <CodeBlock code={vueCode} language="jsx" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="angular" className="mt-6">
              <Card className="border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-muted/30 backdrop-blur-sm border-b border-border/20">
                  <CardTitle className="text-xl font-bold">Angular Implementation</CardTitle>
                  <CardDescription>Using Validis in an Angular signup form with TypeScript integration</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Using the new CodeBlock component for syntax highlighting */}
                  <div className="rounded-b-lg overflow-hidden">
                    <CodeBlock code={angularCode} language="typescript" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* <TabsContent value="html">
              <Card>
                <CardHeader>
                  <CardTitle> Implementation in HTML </CardTitle>
                  <CardDescription>Using Validis in a HTML+Javascript signup form </CardDescription>
                  <CardHeader>
The Validis validation package is included via a CDN link:<CardContent>{cdn}</CardContent></CardHeader>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-sm">
                    <code>{HTMLcode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

