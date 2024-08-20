import { archivo_black } from "@/constants/fonts"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex flex-row items-center bg-zinc-900 pt-2 pb-2 pl-2 pr-4 rounded-md gap-x-2 mb-8">
      <Image
        alt="tape icon"
        src="/images/logo.svg"
        width={80}
        height={80}
        className="transform transition-transform duration-300 ease-in-out hover:-rotate-6"
        />
      <h2 className={archivo_black.className}>MoodMix</h2>
    </div>
  )
}