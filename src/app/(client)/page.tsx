import { CTA } from "@/components/oragnisms/cta";
import { Features } from "@/components/oragnisms/features";
import { Footer } from "@/components/oragnisms/footer";
import { Hero } from "@/components/oragnisms/hero";
import { HowItWorks } from "@/components/oragnisms/how-it-works";
// import { Testimonials } from "@/components/oragnisms/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
