import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function UpcomingSegments({
  text
}: {
  text: string;
}) {
  return (
    <div>
      <div className={`relative col-span-1 h-28 overflow-hidden rounded-xl border border-gray-200 bg-stone-900 text-neutral-200 shadow-md mt-20 ml-40`}>
        <div className="flex h-28 text-2xl items-center justify-center px-4">Upcoming Segments</div>
      </div>
      <div className="text-right text-lg py-2">Upcoming Segments</div>
    </div>
  );
}