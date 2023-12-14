import React  from 'react';

export default function DemoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <main className="flex min-h-screen w-full flex-col content-center items-center">{children}</main>
    </section>
  );
}
