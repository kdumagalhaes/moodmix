import { Hero } from "@/components/Hero";
import MoodsList from "@/components/Moods/MoodsList/MoodsList";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <NavBar />
      <Hero.Root>
        Discover top-rated <Hero.Highlight>songs</Hero.Highlight> based on your{" "}
        <Hero.Highlight>mood</Hero.Highlight>
      </Hero.Root>
      <MoodsList />
    </main>
  );
}
