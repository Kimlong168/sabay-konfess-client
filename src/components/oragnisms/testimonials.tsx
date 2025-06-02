import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Finally found a place where I can share my thoughts without fear of judgment. This platform gave me the courage to speak my truth.",
      author: "Anonymous User",
      rating: 5,
      emoji: "🌟",
    },
    {
      text: "The anonymity feature is perfect. I've been able to share things I've never told anyone before. It's incredibly liberating!",
      author: "Secret Sharer",
      rating: 5,
      emoji: "🦋",
    },
    {
      text: "Simple, secure, and safe. Exactly what I needed to get some heavy thoughts off my chest. Thank you for creating this space.",
      author: "Grateful User",
      rating: 5,
      emoji: "💝",
    },
    {
      text: "I love how easy it is to use. No complicated sign-ups, just pure honesty. This has become my go-to place for venting.",
      author: "Regular Confessor",
      rating: 5,
      emoji: "✨",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            What People Are Saying 💬
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from our anonymous community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="text-3xl mb-4">{testimonial.emoji}</div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  {testimonial.text}
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ?
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      Verified Anonymous User
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
