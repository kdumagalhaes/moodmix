import { archivo } from "@/constants/fonts";

interface MoodProps {
  icon: string;
  text: string;
}
export default function Mood({ icon, text }: MoodProps) {
  return (
    <button
      className="
      flex gap-2 w-full justify-center max-w-48 border rounded-md
    border-emerald-400 p-5 hover:bg-emerald-400 hover:text-black hover:duration-300"
    >
      <span>{icon}</span>
      <p className={`uppercase ${archivo.className}`}>{text}</p>
    </button>
  );
}
