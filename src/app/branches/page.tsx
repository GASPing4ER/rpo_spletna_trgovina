import React from "react";
import { getBranches } from "@/actions/branches";
import { BranchCard } from "@/components";

export default async function Branches() {
  const { data: branches } = await getBranches();

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gray-100 mt-20 py-20 px-24">
      <h1 className="text-2xl font-semibold mb-10">Naše poslovalnice</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {branches &&
          branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
      </div>
    </main>
  );
}
