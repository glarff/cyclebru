import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";

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
