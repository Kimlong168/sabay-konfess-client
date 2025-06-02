import { Button } from "@/components/ui/button";
import { Heart, Shield, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-32 right-16 w-8 h-8 bg-purple-300 rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-bounce delay-700"></div>
      <div className="absolute bottom-32 right-10 w-10 h-10 bg-indigo-300 rounded-full opacity-40 animate-bounce delay-500"></div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
            <div className="p-3 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            🤫 Sabay Konfess
          </h1>

          <p className="text-xl md:text-2xl text-purple-700 mb-4 font-medium">
            ✨ Share your thoughts anonymously ✨
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A safe space to express your deepest thoughts, secrets, and
            confessions. No judgment, no names, just pure honesty. 💭
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="https://t.me/sabaykonfess_bot?start">
            <Button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              🎭 Get Your Confess Link
            </Button>
          </Link>

          <Button
            variant="outline"
            className="px-8 py-4 text-lg font-semibold border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl transition-all duration-300"
          >
            📖 Read Stories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-pink-200 shadow-lg">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-bold text-purple-700 mb-2">100% Anonymous</h3>
            <p className="text-gray-600 text-sm">
              Your identity is completely protected
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 shadow-lg">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-purple-700 mb-2">Instant Sharing</h3>
            <p className="text-gray-600 text-sm">
              Share your thoughts in seconds
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-indigo-200 shadow-lg">
            <div className="text-3xl mb-2">💜</div>
            <h3 className="font-bold text-purple-700 mb-2">Safe Space</h3>
            <p className="text-gray-600 text-sm">
              No judgment, only understanding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
