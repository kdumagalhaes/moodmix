export default function HeroRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col items-center gap-4">{children}</div>;
}
