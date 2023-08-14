import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function SegmentInfo({
  intensity,
  text,
  window
}: {
    intensity: number;
    text: string;
    window: string;
}) 
{

    const bgc = getBorderColor(intensity);

  return (
    <div className = "flex px-2 py-2 my-1">
        <div className = {`border px-3 border-2 ${bgc} `}>{intensity}</div>
        <div className = {`w-60 border px-3 border-2 text-center ${bgc} `}>{text}</div>
        <div className = {`w-56 border px-3 border-2 text-center ${bgc} `}>{window}</div>
    </div>
  );
}

const getBorderColor = (intensity:number) => {

    if (intensity < 2) { return "border-green-800"; } // 1 - dark green   
    else if (intensity < 3) { return "border-lime-600"; } // 2 - lime green   
    else if (intensity < 4) { return "border-orange-600"; }  // 3 - dark orange
    else if (intensity < 5) { return "border-rose-400"; }  // 4 - salmon
    else { return "border-rose-600"; }  // 5 - firebrick

}