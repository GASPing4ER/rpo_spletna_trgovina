"use client";

import React, { useState } from "react";
import { login } from "@/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormFooter,
} from "@/components/ui/form";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await login({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setError(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="w-full max-w-lg p-2">
      <FormHeader>
        <FormTitle>Login</FormTitle>
      </FormHeader>
      <FormContent>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </FormContent>
      <FormFooter>
        <Button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md"
        >
          Login
        </Button>
      </FormFooter>
      <p className="text-center text-sm text-gray-600">
        <Link href="/signup">Don&apos;t have an account?</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
