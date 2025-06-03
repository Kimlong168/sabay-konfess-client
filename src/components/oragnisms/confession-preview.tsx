"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Copy,
  Check,
  MessageCircle,
  Sparkles,
  Download,
} from "lucide-react";
import { getDuration } from "@/utils/get-duration";
import domtoimage from "dom-to-image";

export const ConfessionPreview = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const encodedMessage = searchParams.get("message") || "";
  const encodedTime = searchParams.get("time") || "";

  const [message, setMessage] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [timeAgo, setTimeAgo] = useState("Just now");
  const fullUrl = `${pathname}?${searchParams.toString()}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: decodeURIComponent("Sabay Konfess"),
          url: decodeURIComponent(fullUrl),
        });
        console.log("Shared successfully");
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback - show the social sharing section
      const shareSection = document.getElementById("share-section");
      if (shareSection) {
        shareSection.classList.toggle("hidden");
      }
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("download");
    if (!element) {
      console.error("Element to download not found!");
      return;
    }
    domtoimage
      .toPng(element)
      .then((dataUrl: string) => {
        console.log(dataUrl);
        domtoimage
          .toPng(element)
          .then((dataUrl1: string) => {
            const link = document.createElement("a");
            link.href = dataUrl1;
            link.download = `sabaykonfess.jpg`;

            link.click();
          })
          .catch((error: unknown) => {
            console.error("oops, something went wrong!", error);
          });
      })
      .catch((error: unknown) => {
        console.error("oops, something went wrong!", error);
      });
  };

  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    // Decode the message from URL
    try {
      const decodedMessage = decodeURIComponent(encodedMessage);
      setMessage(decodedMessage);
    } catch (error) {
      console.error("Error decoding message:", error);
      setMessage("Error loading confession");
    }

    const duration = getDuration(encodedTime);
    setTimeAgo(duration);
  }, [encodedMessage, encodedTime]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-4 py-12">
      <div className="container mx-auto max-w-2xl">
        {/* Back button */}
        {/* <div className="mb-6">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-purple-700 hover:text-pink-600 hover:bg-pink-100 transition-colors"
            >
              <ArrowLeft className="sm:mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div> */}

        {/* Floating decorative elements */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-300 rounded-full opacity-60 animate-bounce delay-300"></div>
          <div className="absolute top-8 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-bounce delay-700"></div>

          <div id="download">
            <Card className="w-full bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border-2 border-pink-200 shadow-xl">
              <CardHeader className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MessageCircle className="h-6 w-6 text-purple-500" />
                    <Sparkles className="h-5 w-5 text-pink-500 animate-spin" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    ✨ Anonymous Confession ✨
                  </CardTitle>
                  <p className="text-sm text-purple-600 mt-2 font-medium">
                    Shared {timeAgo}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {message ? (
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-100 shadow-inner">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                          ?
                        </div>
                        <div>
                          <p className="font-semibold text-purple-700">
                            Anonymous
                          </p>
                          <p className="text-xs text-gray-500">{timeAgo}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap break-words">
                      {message}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["anonymous", "confession", "secret"].map(
                        (tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-12">
                    <p className="text-gray-500">No confession message found</p>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <div className="flex flex-row gap-4 justify-center w-full">
                  <Button
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 rounded-xl shadow-md hover:shadow-lg transition-all"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="sm:mr-2 h-4 w-4" />
                        <span className="hidden sm:inline-block">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="sm:mr-2 h-4 w-4" />
                        <span className="hidden sm:inline-block">
                          Copy Link
                        </span>
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className=" border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl transition-all"
                  >
                    <Share2 className="sm:mr-2 h-4 w-4" />
                    <span className="hidden sm:inline-block">Share</span>
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className=" border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl transition-all"
                  >
                    <Download className="sm:mr-2 h-4 w-4" />
                    <span className="hidden sm:inline-block">Download</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
