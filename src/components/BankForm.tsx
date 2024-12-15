"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TUser } from "@/types";
import {
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormFooter,
} from "@/components/ui/form";

interface FormData {
  full_name: string;
  account_number: string;
  expiration_date: string;
  ccv: string;
}

const BankForm: React.FC = ({ bank_details, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    full_name: bank_details.full_name || "",
    account_number: bank_details.account_number || "",
    expiration_date: bank_details.expiration_date || "",
    ccv: bank_details.ccv || "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error, message } = await onSubmit(formData);
    if (error) setError(message);
    setMessage(message);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg shadow-sm p-10"
    >
      <FormHeader className="font-bold text-xl">
        <FormTitle>Bančni Podatki</FormTitle>
      </FormHeader>
      <FormContent className="flex flex-col gap-y-3">
        <Input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Ime in priimek"
          required
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
        <Input
          type="text"
          id="account_number"
          name="account_number"
          value={formData.account_number}
          onChange={handleChange}
          placeholder="Številka računa"
          required
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
        <div className="flex mb-4 gap-x-4">
          <Input
            type="text"
            id="expiration_date"
            name="expiration_date"
            value={formData.expiration_date}
            onChange={handleChange}
            placeholder="Datum Izteka"
            required
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
          <Input
            type="text"
            id="ccv"
            name="ccv"
            value={formData.ccv}
            onChange={handleChange}
            placeholder="CCV"
            required
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
      </FormContent>

      <FormFooter>
        <div className="w-full flex flex-col gap-y-3">
          <Button type="submit" className="py-7 bg-[#4156D8]">
            Shrani
          </Button>
          <div className="flex justify-center gap-y-3">
            {error ? (
              <p className="text-red-600 text-sm">{message}</p>
            ) : (
              <p className="text-green-600 text-sm">{message}</p>
            )}
          </div>
        </div>
      </FormFooter>
    </Form>
  );
};

export default BankForm;
