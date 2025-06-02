import { ConfessionPreview } from "@/components/oragnisms/confession-preview";
import { Suspense } from "react";
export default async function Page() {
  return (
    <Suspense>
      <ConfessionPreview />
    </Suspense>
  );
}
