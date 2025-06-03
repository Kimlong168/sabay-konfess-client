import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 border-0 shadow-2xl overflow-hidden relative">
          {/* Floating decorative elements */}
          <div className="absolute top-8 left-8 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-16 right-12 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-12 left-16 w-8 h-8 bg-white/20 rounded-full animate-bounce delay-700"></div>

          <CardContent className="p-12 text-center text-white relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="h-8 w-8 animate-pulse" />
              <Shield className="h-8 w-8" />
              <Sparkles className="h-8 w-8 animate-spin" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Share Your Story? 🌟
            </h2>

            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of people who have found freedom in anonymous
              sharing. Your story matters, and this is your safe space to tell
              it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="https://t.me/sabaykonfess_bot?start">
                <Button className="px-8 py-4 text-lg font-bold bg-white text-purple-600 hover:bg-gray-100 border-0 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                  🎭 Get Your Confess Link
                </Button>
              </Link>

              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-purple-600 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                📚 Browse Confessions
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>100% Anonymous</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Judgment Free</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Instant Sharing</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
