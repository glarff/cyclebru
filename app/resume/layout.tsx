import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export default function DemoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-6/12">
      <main className="flex min-h-screen w-full flex-col">{children}</main>
    </section>
  );
}
