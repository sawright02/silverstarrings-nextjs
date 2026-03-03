import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { ProcessSection } from "@/components/ProcessSection";
import { CollectionSection } from "@/components/CollectionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProcessSection />
      <CollectionSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
