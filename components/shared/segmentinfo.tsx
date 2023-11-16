import { getBorderColor, getTextColor } from "@/app/demo/helperfunctions";

export default function SegmentInfo({
  num,
  intensity,
  text,
  window,
}: {
  num: number;
  intensity: number;
  text: string;
  window: string;
}) {
  const bgc = getTextColor(intensity);
  const bdc = getBorderColor(intensity);

  return (
    <div className={`mx-2 my-2 flex bg-black border border-solid ${bgc} ${bdc}`}>
      <div id={`upcomingSegment{num}intensity`} className={`w-10 border px-3`}>
        {intensity}
      </div>
      <div
        id={`upcomingSegment{num}title`}
        className={`w-72 border px-3 text-center`}
      >
        {text}
      </div>
      <div
        id={`upcomingSegment{num}window`}
        className={`w-56 border px-1 text-center`}
      >
        {window}
      </div>
    </div>
  );
}