import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero.Root>
      Discover top-rated <Hero.Highlight>songs</Hero.Highlight> based on your <Hero.Highlight>mood</Hero.Highlight>
     </Hero.Root>
    </main>
  );
}


