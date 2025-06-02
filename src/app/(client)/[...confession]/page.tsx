import { ConfessionForm } from "@/components/oragnisms/confession-form";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    confession?: string[];
  };
}

export default function ConfessionPage({ params }: PageProps) {
  const userParams = params.confession;

  if (!userParams || userParams.length !== 2) {
    notFound(); // Invalid URL format
  }

  const [username, chatId] = userParams;

  return <ConfessionForm username={username} chatId={chatId} />;
}
