import {Archivo_Black} from "next/font/google"

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: ['400'] });
export default function HeroRoot({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className={`text-3xl ${archivo_black.className}`}>{children}</h1>
  )
}

