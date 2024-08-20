import { Archivo, Archivo_Black } from "next/font/google";

export const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});

export const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });
