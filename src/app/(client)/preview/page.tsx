import { ConfessionPreview } from "@/components/oragnisms/confession-preview";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sabay Konfess",
};

export default async function Page() {
  return (
    <Suspense>
      <ConfessionPreview />
    </Suspense>
  );
}
