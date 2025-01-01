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

const HTMLcode=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Form</title>
  <script src="https://cdn.jsdelivr.net/npm/validis/dist/validis.min.js"></script>
  <style>
    .error { color: red; font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>Signup Form</h1>
  <form id="signupForm">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <p class="error" id="emailError"></p>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      <p class="error" id="passwordError"></p>
    </div>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      <p class="error" id="usernameError"></p>
    </div>
    <button type="submit">Signup</button>
  </form>

  <script>
    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;
      const usernameInput = document.getElementById("username").value;

      // Clear previous errors
      document.getElementById("emailError").textContent = "";
      document.getElementById("passwordError").textContent = "";
      document.getElementById("usernameError").textContent = "";

      // Validate using Validis
      const emailValidation = validis.email(emailInput);
      const passwordValidation = validis.pass(passwordInput);
      const usernameValidation = validis.noSpaces(usernameInput);

      if (!emailValidation.valid) {
        document.getElementById("emailError").textContent = emailValidation.reason;
      }
      if (!passwordValidation.valid) {
        document.getElementById("passwordError").textContent =
          passwordValidation.reasons ? passwordValidation.reasons.join(", ") : passwordValidation.reason;
      }
      if (!usernameValidation.valid) {
        document.getElementById("usernameError").textContent = usernameValidation.reason;
      }

      // If all validations pass
      if (emailValidation.valid && passwordValidation.valid && usernameValidation.valid) {
        alert("Form submitted successfully!");
      }
    });
  </script>
</body>
</html>
`
const cdn=`<script src="https://cdn.jsdelivr.net/npm/validis/dist/validis.min.js"></script>
`
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
            See how to implement Validis in popular frontend frameworks and Normal HTML.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="react">React.js </TabsTrigger>
              <TabsTrigger value="vue">Vue.js</TabsTrigger>
              <TabsTrigger value="angular">Angular.js</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
            </TabsList>
            <TabsContent value="react">
              <Card>
                <CardHeader>
                  <CardTitle>React Implementation </CardTitle>
                  <CardDescription>Using Validis in a React signup form </CardDescription>
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
            <TabsContent value="html">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

