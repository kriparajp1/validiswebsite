"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reactCode = `import React, { useState } from "react";
import { email, pass, noSpaces, char } from "validis";

const SignupForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields using Validis
    const validationErrors = {
      email: email(formData.email).reason,
      password: pass(formData.password).reasons?.join(", "),
      username:
        noSpaces(formData.username).reason || char(formData.username, 15).reason,
    };

    // Filter out valid fields (no errors)
    setErrors(Object.fromEntries(Object.entries(validationErrors).filter(([_, v]) => v)));

    if (!Object.values(validationErrors).some((error) => error)) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["email", "password", "username"].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input
            type={field === "password" ? "password" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
        </div>
      ))}
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
`

const vueCode = `<template>
  <div id="app">
    <h1>Signup Form</h1>
    <form @submit.prevent="validateForm">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" />
        <p class="error" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="form.password" id="password" />
        <p class="error" v-if="errors.password">{{ errors.password }}</p>
      </div>
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="form.username" id="username" />
        <p class="error" v-if="errors.username">{{ errors.username }}</p>
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import * as validis from "validis";

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
    };
  },
  methods: {
    validateForm() {
      // Clear errors
      this.errors = { email: "", password: "", username: "" };

      // Validate email
      const emailValidation = validis.email(this.form.email);
      if (!emailValidation.valid) {
        this.errors.email = emailValidation.reason;
      }

      // Validate password
      const passwordValidation = validis.pass(this.form.password);
      if (!passwordValidation.valid) {
        this.errors.password = passwordValidation.reasons
          ? passwordValidation.reasons.join(", ")
          : passwordValidation.reason;
      }

      // Validate username
      const usernameValidation = validis.noSpaces(this.form.username);
      if (!usernameValidation.valid) {
        this.errors.username = usernameValidation.reason;
      }

      // If no errors, submit form
      if (!this.errors.email && !this.errors.password && !this.errors.username) {
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>`

const angularCode = `import { Component } from '@angular/core';
import * as validis from 'validis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

  validateForm() {
    // Reset errors
    this.errors = { email: '', password: '', username: '' };

    // Validate email
    const emailValidation = validis.email(this.form.email);
    if (!emailValidation.valid) {
      this.errors.email = emailValidation.reason;
    }

    // Validate password
    const passwordValidation = validis.pass(this.form.password);
    if (!passwordValidation.valid) {
      this.errors.password = passwordValidation.reasons
        ? passwordValidation.reasons.join(', ')
        : passwordValidation.reason;
    }

    // Validate username
    const usernameValidation = validis.noSpaces(this.form.username);
    if (!usernameValidation.valid) {
      this.errors.username = usernameValidation.reason;
    }

    // If no errors, submit the form
    if (!this.errors.email && !this.errors.password && !this.errors.username) {
      alert('Form submitted successfully!');
    }
  }
}`

export function CodeImplementationExamples() {
  return (
    <div className="py-12 sm:py-16 lg:py-24" id="code-examples">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Code Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Validis in Action
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how to implement Validis in popular frontend frameworks.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="react">React.js </TabsTrigger>
              <TabsTrigger value="vue">Vue.js</TabsTrigger>
              <TabsTrigger value="angular">Angular.js</TabsTrigger>
            </TabsList>
            <TabsContent value="react">
              <Card>
                <CardHeader>
                  <CardTitle>React Implementation </CardTitle>
                  <CardDescription>Using Validis in a React signup form with TypeScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-sm">
                    <code>{reactCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vue">
              <Card>
                <CardHeader>
                  <CardTitle>Vue.js Implementation</CardTitle>
                  <CardDescription>Using Validis in a Vue.js signup form</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-sm">
                    <code>{vueCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="angular">
              <Card>
                <CardHeader>
                  <CardTitle>Angular Implementation</CardTitle>
                  <CardDescription>Using Validis in an Angular signup form</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 overflow-x-auto text-sm">
                    <code>{angularCode}</code>
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

