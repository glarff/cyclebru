import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function Tip({
  panelColor,
  text,
}: {
  panelColor: string;
  text: string;
}) {
  return (
    <div>
      <div
        className={`relative col-span-1 overflow-hidden rounded-xl border border-2 ${panelColor} mt-6 text-neutral-200 shadow-md`}
      >
        <div className="font-sf flex max-w-xl items-center justify-center px-16 py-8 text-center text-3xl">
          {text}
        </div>
      </div>
    </div>
  );
}
