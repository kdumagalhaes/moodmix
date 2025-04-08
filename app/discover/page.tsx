"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Play,
  Headphones,
  Cloud,
  Zap,
  Coffee,
  Brain,
} from "lucide-react";
import Image from "next/image";

type Mood = "happy" | "sad" | "energetic" | "relaxed" | "focused";

type Track = {
  name: string;
  artist: string;
  image: string;
  duration: string;
};

export default function DiscoverPage() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);

  const moods: {
    id: Mood;
    name: string;
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      id: "happy",
      name: "Happy",
      description: "Upbeat and joyful tunes",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      id: "sad",
      name: "Sad",
      description: "Melancholic and emotional",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      id: "energetic",
      name: "Energetic",
      description: "High-energy beats",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: "relaxed",
      name: "Relaxed",
      description: "Calm and peaceful",
      icon: <Coffee className="h-6 w-6" />,
    },
    {
      id: "focused",
      name: "Focused",
      description: "Concentration enhancing",
      icon: <Brain className="h-6 w-6" />,
    },
  ];

  const handleMoodSelect = async (mood: Mood) => {
    setSelectedMood(mood);
    setLoading(true);
    try {
      const response = await fetch(`/api/recommendations?mood=${mood}`);
      const data = await response.json();
      setTracks(data.tracks);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          How are you feeling today?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {moods.map((mood) => (
            <Card
              key={mood.id}
              className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                selectedMood === mood.id ? "border-primary border-2" : ""
              }`}
              onClick={() => handleMoodSelect(mood.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  {mood.icon}
                </div>
                <h3 className="text-xl font-semibold">{mood.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {mood.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">
              Finding the perfect tracks...
            </p>
          </div>
        ) : tracks.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Recommended Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex space-x-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={track.image}
                        alt={track.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold truncate">{track.name}</h3>
                      <p className="text-sm text-muted-foreground truncate mb-1">
                        {track.artist}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {track.duration}
                      </p>
                      <div className="flex space-x-2">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-8 w-8"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-8 w-8"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
