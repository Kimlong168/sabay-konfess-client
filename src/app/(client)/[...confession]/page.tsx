import { ConfessionForm } from "@/components/oragnisms/confession-form";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] }>;
}) {
  // Await the params since they're now a Promise
  const resolvedParams = await params;
  const rawParams = resolvedParams.confession;

  if (!rawParams || !Array.isArray(rawParams) || rawParams.length !== 2) {
    return notFound();
  }

  const [username, chatId] = rawParams;
  return (
    <main>
      <ConfessionForm username={username} chatId={chatId} />
    </main>
  );
}
