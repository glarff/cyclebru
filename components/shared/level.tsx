import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function Level({
  panelColor,
  intensity,
}: {
  panelColor: string;
  intensity: number;
}) {
  return <div className={`${panelColor}`}>Lvl {intensity}</div>;
}
