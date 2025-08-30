"use client";

import ClaimCard from "@/components/ClaimCard";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Daily Token</h1>
      <ClaimCard />  {/* 👈 this renders your claim button */}
    </main>
  );
}