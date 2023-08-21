import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

import { orbitron } from "@/app/fonts";

export default function Timer({
  title,
  description,
  timerTxt,
  panelColor,
}: {
  title: string;
  description: string;
  timerTxt: string;
  panelColor: string;
}) {


  
  return (
    <div>
      <div className={`mx-12 relative col-span-1 h-28 overflow-hidden  ${panelColor}`}>
        <div className="flex h-28 text-7xl font-orbitron shadow-md">{timerTxt}</div>
      </div>
    </div>
  );
}