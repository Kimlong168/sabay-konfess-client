import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Heart, Users, Lock, Sparkles } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anonymous & Secure",
      description:
        "Your confessions are completely anonymous. We never store personal information or track users.",
      emoji: "🛡️",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Delivery",
      description:
        "Share your thoughts instantly through our secure Telegram integration. No delays, no hassle.",
      emoji: "⚡",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Judgment-Free Zone",
      description:
        "Express yourself freely in a safe, supportive environment where every story matters.",
      emoji: "💝",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description:
        "Join a community of people who understand. Sometimes sharing is the first step to healing.",
      emoji: "🤝",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy First",
      description:
        "We use end-to-end encryption and never store your confessions on our servers.",
      emoji: "🔐",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Easy to Use",
      description:
        "Simple, intuitive interface. Just type your confession and hit send. It's that easy!",
      emoji: "✨",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Sabay Konfess? 🌟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have built the safest and most user-friendly platform for
            anonymous sharing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                    <div className="text-purple-600 group-hover:text-pink-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
