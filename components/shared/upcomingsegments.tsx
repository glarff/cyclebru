import SegmentInfo from "@/components/shared/segmentinfo"
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
        <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-700 bg-clip-text font-display text-2xl font-bold tracking-[-0.02em] 
                text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
            <Balancer>Upcoming Segments</Balancer>
        </h1>
        <div className={`relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-stone-900 text-neutral-200 shadow-md`}>
        <div className="flex flex-col text-2xl pl-5 pr-16 py-4">
            <SegmentInfo  
                intensity={1} 
                text="90 RPM Warmup" 
                window="1:15:00 - 1:10:00" 
            />
            <SegmentInfo  
                intensity={1} 
                text="95 RPM Warmup" 
                window="1:10:00 - 1:08:00" 
            />
            <SegmentInfo  
                intensity={2} 
                text="100 RPM Warmup" 
                window="1:08:00 - 1:06:00" 
            />
            <SegmentInfo  
                intensity={2} 
                text="105 RPM Warmup" 
                window="1:06:00 - 1:04:00" 
            />
            <SegmentInfo  
                intensity={3} 
                text="110 RPM Warmup" 
                window="1:04:00 - 1:02:30" 
            />
        </div>
      </div>
    </div>
  );
}