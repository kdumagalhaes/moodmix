import Image from "next/image";

interface MoodProps {
  icon: string;
  text: string;
}
export default function Mood({ icon, text }: MoodProps) {
  return (
    <button type="button">
      <Image src={icon} alt={text} />
      <p>{text}</p>
    </button>
  );
}
