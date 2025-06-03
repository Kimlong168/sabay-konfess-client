"use client";

import type React from "react";

import { useState } from "react";
import { Loader2, Heart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendConfession } from "@/api/telegram-api";
import { toast } from "react-toastify";
import Link from "next/link";

interface Props {
  chatId: string;
  username: string;
}

export const ConfessionForm: React.FC<Props> = ({ username, chatId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confession, setConfession] = useState("");
  // const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!confession.trim()) {
      return toast.error("🦄 Fill the message", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    }

    // Simulate form submission
    setIsSubmitting(true);
    try {
      await sendConfession({
        message: confession,
        chatId,
        type: "message",
      });
      console.log(username);
      setConfession("");
      toast.success("🦄 Your confession is sent", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } catch (e) {
      console.log(e);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto container pt-6 md:pt-12">
      {/* Floating decorative elements */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-300 rounded-full opacity-60 animate-bounce delay-300"></div>
        <div className="absolute top-8 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-bounce delay-700"></div>

        <Card className="w-full bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <form onSubmit={handleSubmit}>
            <CardHeader className="text-center relative overflow-hidden py-2 mb-2">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
                  <Sparkles className="h-5 w-5 text-purple-500 animate-spin" />
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ✨ Share Your Secret ✨
                </CardTitle>
                <p className="text-sm text-purple-600 mt-2 font-medium">
                  💭 Anonymous confessions welcome! 💭
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 relative">
              <div className="space-y-3">
                <div className="relative">
                  <Textarea
                    id="confession"
                    placeholder="Spill the tea... What's on your mind? ☕✨"
                    className="min-h-[150px] border-2 border-pink-200 focus:border-purple-400 focus:ring-purple-300 rounded-xl bg-white/80 backdrop-blur-sm text-gray-700 placeholder:text-purple-400 transition-all duration-300 hover:shadow-md focus:shadow-lg resize-none"
                    value={confession}
                    onChange={(e) => setConfession(e.target.value)}
                    required
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-purple-400 font-medium">
                    {confession.length} characters
                  </div>
                </div>
              </div>
              {/* 
              <div className="space-y-3">
                <Label
                  htmlFor="file"
                  className="flex items-center gap-2 text-lg font-semibold text-purple-700 cursor-pointer hover:text-pink-600 transition-colors"
                >
                  <div className="p-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full">
                    <ImageIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>📎 Add Some Proof (Optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="p-0.5 cursor-pointer border-2 border-pink-200 focus:border-purple-400 focus:ring-purple-300 rounded-xl bg-white/80 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-pink-500 file:to-purple-500 file:text-white hover:file:from-pink-600 hover:file:to-purple-600 transition-all duration-300"
                  />
                </div>
                {file && (
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl">
                    <span className="text-green-600">✅</span>
                    <p className="text-sm text-green-700 font-medium">
                      Ready to upload:{" "}
                      <span className="font-bold">{file.name}</span>
                    </p>
                  </div>
                )}
              </div> */}
            </CardContent>

            <CardFooter className="pt-6">
              <Button
                type="submit"
                className="w-full h-12 text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending your secret... 🚀</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>🎭 Submit Confession</span>
                    <Heart className="h-5 w-5 animate-pulse" />
                  </div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Bottom decorative text */}
      <div className="text-center mt-6">
        <p className="text-sm text-purple-500 font-medium">
          🔒 Your identity is safe with us • 💜 Spread love, not hate
        </p>

        <div className="mt-3 text-blue-500">
          <Link href="https://t.me/sabaykonfess_bot?start">
            <button>Get your own confess link now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
