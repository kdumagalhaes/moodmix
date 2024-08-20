import { Hero } from "@/components/Hero";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Logo />
     <Hero.Root>
      Discover top-rated <Hero.Highlight>songs</Hero.Highlight> based on your <Hero.Highlight>mood</Hero.Highlight>
     </Hero.Root>
    </main>
  );
}


