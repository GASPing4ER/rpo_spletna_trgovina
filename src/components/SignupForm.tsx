"use client";

import React, { useState } from "react";
import { signup } from "@/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormFooter,
} from "@/components/ui/form";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const { error } = await signup({
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
    });

    if (error) {
      setError(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full h-full max-w-[1120px] max-h-[624]"
    >
      <FormHeader className="font-bold text-xl">
        <FormTitle>Registracija</FormTitle>
      </FormHeader>
      <FormContent>
        <label
          htmlFor="firstLastName"
          className="text-sm font-medium text-[#545454]"
        >
          Ime in priimek
        </label>
        <div className="flex flex-row mb-4 gap-x-2">
          <Input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Vpiši ime"
            required
            className="mt-1.5 w-full py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Vpiši priimek"
            required
            className="mt-1.5 w-full py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-[#545454]">
            E-mail
          </label>
          <Input
            type="text"
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
          <label htmlFor="geslo" className="text-sm font-medium text-[#545454]">
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
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Ponovi geslo"
            required
            className="mt-1.5 w-full py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </FormContent>
      <FormFooter>
        <Button type="submit" className="w-full py-7 bg-[#4156D8] mt-2">
          Registriraj se
        </Button>
      </FormFooter>
    </Form>
  );
};

export default RegisterForm;
