import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function Tip({
  text
}: {
  text: string;
}) {
  return (
    <div>
      <div className={`relative col-span-1 overflow-hidden rounded-xl border border-8 border-green-800 bg-stone-900 text-neutral-200 shadow-md mt-6`}>
        <div className="flex text-2xl items-center justify-center px-16 py-8 max-w-4xl">{text}</div>
      </div>
      <div className="text-right text-lg py-2">Segment Tip</div>
    </div>
  );
}