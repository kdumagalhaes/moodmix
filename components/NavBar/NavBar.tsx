import { archivo_black } from "@/constants/fonts";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="relative w-full max-w-3xl flex items-center bg-zinc-900 pt-1 pb-1 pl-1 pr-2 rounded-md gap-x-2 mb-8">
      <Link href="/">
        <Image
          alt="tape icon"
          src="/images/logo.svg"
          width={60}
          height={60}
          className="transform transition-transform duration-300 ease-in-out hover:-rotate-6"
        />
      </Link>
      <h2
        className={`absolute left-1/2 transform -translate-x-1/2 ${archivo_black.className}`}
      >
        MoodMix
      </h2>
    </div>
  );
}
