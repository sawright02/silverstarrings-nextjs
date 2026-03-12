import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { ProcessSection } from "@/components/ProcessSection";
import { CollectionSection } from "@/components/CollectionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { RINGS_QUERY } from "@/sanity/lib/queries";
import type { Ring } from "@/components/CollectionSection";

export default async function Home() {
  let rings: Ring[] | undefined;

  if (client) {
    try {
      const data = await client.fetch(RINGS_QUERY, {}, { next: { revalidate: 60 } });
      if (data && data.length > 0) rings = data as Ring[];
    } catch (err) {
      console.error("Sanity fetch failed, using hardcoded rings:", err);
    }
  }

  return (
    <main>
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProcessSection />
      <CollectionSection rings={rings} />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
