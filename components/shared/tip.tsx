import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function Tip({
  panelColor,
  text
}: {
  panelColor: string
  text: string;
}) {
  return (
    <div>
      <div className={`relative col-span-1 overflow-hidden rounded-xl border border-4 ${panelColor} text-neutral-200 shadow-md mt-6`}>
        <div className="flex text-2xl items-center justify-center text-center px-16 py-8 max-w-3xl ">{text}</div>
      </div>
      <div className="text-right text-md py-2 uppercase">Segment Tip</div>
    </div>
  );
}