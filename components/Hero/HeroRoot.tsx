import { archivo_black } from "@/constants/fonts";

export default function HeroRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className={`text-4xl ${archivo_black.className}`}>{children}</h1>;
}
