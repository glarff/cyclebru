import SegmentInfo from "@/components/shared/segmentinfo";
import MediumTitle from "@/components/shared/mediumtitle";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function UpcomingSegments({
  segwin1txt,
  segwin2txt,
  segwin3txt,
  segwin4txt,
  segwin5txt,
  segwin1intensity,
  segwin2intensity,
  segwin3intensity,
  segwin4intensity,
  segwin5intensity,
  segwin1window,
  segwin2window,
  segwin3window,
  segwin4window,
  segwin5window,
}: {
  segwin1txt: string;
  segwin2txt: string;
  segwin3txt: string;
  segwin4txt: string;
  segwin5txt: string;
  segwin1intensity: number;
  segwin2intensity: number;
  segwin3intensity: number;
  segwin4intensity: number;
  segwin5intensity: number;
  segwin1window: string;
  segwin2window: string;
  segwin3window: string;
  segwin4window: string;
  segwin5window: string;
}) {
  return (
    <div>
      <MediumTitle text="Upcoming Segments" />
      <div
        className={`relative col-span-1 overflow-hidden rounded-xl text-neutral-200 shadow-md`}
      >
        <div className="flex flex-col py-4 text-2xl">
          <SegmentInfo
            num={1}
            intensity={segwin1intensity}
            text={segwin1txt}
            window={segwin1window}
          />
          <SegmentInfo
            num={2}
            intensity={segwin2intensity}
            text={segwin2txt}
            window={segwin2window}
          />
          <SegmentInfo
            num={3}
            intensity={segwin3intensity}
            text={segwin3txt}
            window={segwin3window}
          />
          <SegmentInfo
            num={4}
            intensity={segwin4intensity}
            text={segwin4txt}
            window={segwin4window}
          />
          <SegmentInfo
            num={5}
            intensity={segwin5intensity}
            text={segwin5txt}
            window={segwin5window}
          />
        </div>
      </div>
    </div>
  );
}
