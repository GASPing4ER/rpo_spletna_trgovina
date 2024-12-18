import React from "react";
import { getBranches } from "@/actions/branches";
import { BranchCard } from "@/components";

export default async function Contact() {
  const { data: branches } = await getBranches();

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-100 py-28 px-20 mt-20">
      <div className="w-full max-w-[1120px]">
        <h1 className="font-semibold text-2xl mb-10">Kontakt</h1>
        <div className="bg-white rounded-lg shadow-sm py-12 px-16 mt-4">
          <h2 className="font-bold text-xl mb-8">Klicni center</h2>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-base">Delovni čas:</h3>
            <p className="text-base">Med delovniki: 8-18h</p>
            <p className="text-base">Sobota in nedelja: 8-13h</p>
          </div>
          <div className="flex gap-4 mt-5">
            <h3 className="font-bold text-base">Telefonska številka:</h3>
            <p className="text-base underline">+386 59 100 900</p>
          </div>
          <div className="flex gap-4 mt-5">
            <h3 className="font-bold text-base">E-mail naslov:</h3>
            <p className="text-base underline">info-slo@shoppster.com</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1120px] bg-white rounded-lg shadow-sm py-12 px-16 mt-4">
        <h1 className="font-semibold text-2xl mb-10">Naše poslovalnice</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {branches &&
            branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
        </div>
      </div>
    </main>
  );
}
