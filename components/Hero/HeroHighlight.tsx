export default function HeroHighlight({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className="bg-gradient-to-bl from-emerald-400 to-emerald-700 bg-clip-text text-transparent">{children}</span>
}
