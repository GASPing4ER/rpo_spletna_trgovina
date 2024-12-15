"use client";

import React, { useState } from "react";
import { login, forgotPassword } from "@/actions/auth";
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

  const handlePasswordReset = async (email: string) => {
    if (!email) {
      setError("Vpiši e-mail naslov.");
      return;
    }

    const { error } = await forgotPassword(email);

    if (error) {
      setError(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full h-full max-w-[1120px] max-h-[508]"
    >
      <FormHeader className="font-bold text-xl">
        <FormTitle>Vpis</FormTitle>
      </FormHeader>
      <FormContent>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-[#545454]">
            E-mail naslov
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Vpiši e-mail"
            required
            className="mt-1.5 w-full py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#545454]"
          >
            Geslo
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Vpiši geslo"
            required
            className="mt-1.5 w-full py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={() => handlePasswordReset(formData.email)}
          >
            <p className="text-center text-sm">Pozabljeno geslo?</p>
          </button>
          <p className="text-center text-sm">
            Še nimaš računa?{" "}
            <Link href="/signup" className="font-semibold">
              Registriraj se.
            </Link>
          </p>
        </div>
      </FormContent>
      <FormFooter>
        <Button type="submit" className="w-full py-7 bg-[#4156D8] mt-8">
          Vpiši se
        </Button>
      </FormFooter>
    </Form>
  );
};

export default LoginForm;
