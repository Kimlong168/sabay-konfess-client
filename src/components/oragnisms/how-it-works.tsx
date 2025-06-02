import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Write Your Confession",
      description:
        "Type your thoughts, secrets, or confessions in our secure form. Add images if you want!",
      emoji: "✍️",
      color: "from-pink-400 to-pink-600",
    },
    {
      step: "2",
      title: "Stay Anonymous",
      description:
        "We never ask for your name, email, or any personal information. You're completely anonymous.",
      emoji: "🎭",
      color: "from-purple-400 to-purple-600",
    },
    {
      step: "3",
      title: "Share Instantly",
      description:
        "Your confession is instantly shared through our secure Telegram channel for others to read.",
      emoji: "🚀",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      step: "4",
      title: "Feel Relief",
      description:
        "Experience the freedom that comes with sharing your truth in a safe, judgment-free space.",
      emoji: "😌",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2">
            How It Works🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing your confession is simple, safe, and completely anonymous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}
                    >
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4">{step.emoji}</div>
                  </div>

                  <h3 className="text-xl font-bold text-purple-700 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <ArrowRight className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
