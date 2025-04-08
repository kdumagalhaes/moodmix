import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Hero.Root>
        <Music className="h-12 w-12 text-primary" />
        <Hero.Cta>
          Discover <Hero.Highlight>Music</Hero.Highlight> by{" "}
          <Hero.Highlight>Mood</Hero.Highlight>
        </Hero.Cta>
        <Hero.Description>
          Find the perfect soundtrack for your emotions. Let your mood guide you
          to new musical discoveries.
        </Hero.Description>
        <Link href="/discover" className="mt-16">
          <Button size="lg" className="text-lg">
            Start Discovering
          </Button>
        </Link>
      </Hero.Root>
    </main>
  );
}
