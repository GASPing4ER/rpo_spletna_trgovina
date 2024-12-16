import React from "react";

import { SignupForm } from "@/components";

export default function Signup() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#F6F6F6] mt-20  py-20 px-24">
      <div className="w-full max-w-[1120px] flex justify-start mb-10">
        <p className="text-2xl font-semibold">Dobrodošel!</p>
      </div>
      <SignupForm />
    </main>
  );
}
