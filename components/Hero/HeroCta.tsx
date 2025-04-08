import { archivo_black } from "@/constants/fonts";

export default function HeroCta({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className={`text-4xl ${archivo_black.className}`}>{children}</h1>;
}
