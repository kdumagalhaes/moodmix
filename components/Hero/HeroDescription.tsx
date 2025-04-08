export default function HeroDescription({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h2 className="text-center text-lg max-w-[600px]">{children}</h2>;
}
