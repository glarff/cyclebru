import localFont from "next/font/local";
import { Inter, Orbitron, Roboto, Montserrat, Lato, Lora } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-lora",
});
