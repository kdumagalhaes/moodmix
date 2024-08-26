import { MOODS } from "@/constants/moods";
import Mood from "../Mood/Mood";

export default function MoodsList() {
  return (
    <div>
      <p className="text-xl mt-8 mb-5 text-center">How are you feeling now?</p>
      <div className="grid grid-cols-5 gap-4">
        {MOODS.map((mood) => {
          return (
            <Mood
              key={mood.id}
              icon={mood.icon}
              text={mood.text}
              path={mood.path}
            />
          );
        })}
      </div>
    </div>
  );
}
