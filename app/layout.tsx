import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter, orbitron } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "CycleBru - Your Free Cycling Coach for Home Trainer Workouts",
  description:
    "CycleBru is the all-in-one online cycling coach. It includes a visual guide for workout sessions, custom workout creation, training planning, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "CycleBru is the all-in-one online cycling coach. It includes a visual guide for workout sessions, custom workout creation, training planning, and more.",
    creator: "Glarffo",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, orbitron.variable)}>
        <div className="fixed h-screen w-full bg-cyclists bg-cover bg-center bg-no-repeat brightness-50" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
