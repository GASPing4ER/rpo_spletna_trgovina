import React from "react";

import { SignupForm } from "@/components";

export default function Signup() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-[#F6F6F6]">
      <div className="w-full max-w-[1120px] flex justify-start my-10">
        <p className="text-2xl font-semibold">Dobrodošel!</p>
      </div>
      <SignupForm />
    </main>
  );
}
