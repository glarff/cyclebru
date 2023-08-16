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
    <div className = {`flex mx-2 my-2 border ${bgc}`}>
        <div className = {`px-3 border`}>{intensity}</div>
        <div className = {`w-60 px-3 text-center border`}>{text}</div>
        <div className = {`w-56 px-3 text-center border`}>{window}</div>
    </div>
  );
}

const getBorderColor = (intensity:number) => {

    if (intensity < 2) { return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900"; } // 1 - dark green   
    else if (intensity < 3) { return "bg-gradient-to-br from-yellow-900 via-lime-700 to-green-900"; } // 2 - lime green   
    else if (intensity < 4) { return "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-900"; }  // 3 - dark orange
    else if (intensity < 5) { return "bg-gradient-to-br from-fuschia-900 via-rose-700 to-pink-900"; }  // 4 - salmon
    else { return "bg-gradient-to-br from-red-900 via-rose-700 to-red-900"; }  // 5 - firebrick

}