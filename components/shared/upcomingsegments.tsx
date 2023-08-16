import SegmentInfo from "@/components/shared/segmentinfo"
import MediumTitle from "@/components/shared/mediumtitle";
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
    <div className = "ml-40">
        <MediumTitle text = "Upcoming Segments" />
        <div className={`relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-stone-900 text-neutral-200 shadow-md`}>
        <div className="flex flex-col text-2xl pl-5 pr-16 py-4">
            <SegmentInfo  
                num={1}
                intensity={1} 
                text="90 RPM Warmup" 
                window="1:15:00 - 1:10:00" 
            />
            <SegmentInfo  
                num={2}
                intensity={1} 
                text="95 RPM Warmup" 
                window="1:10:00 - 1:08:00" 
            />
            <SegmentInfo
                num={3}  
                intensity={2} 
                text="100 RPM Warmup" 
                window="1:08:00 - 1:06:00" 
            />
            <SegmentInfo
                num={4}  
                intensity={2} 
                text="105 RPM Warmup" 
                window="1:06:00 - 1:04:00" 
            />
            <SegmentInfo
                num={5}  
                intensity={3} 
                text="110 RPM Warmup" 
                window="1:04:00 - 1:02:30" 
            />
        </div>
      </div>
    </div>
  );
}