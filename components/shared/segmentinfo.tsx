import { getPanelColor } from "@/app/demo/helperfunctions";

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
  const bgc = getPanelColor(intensity);

  return (
    <div className={`mx-2 my-2 flex bg-black border text-${bgc}`}>
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

/* const getPanelColor = (intensity: number) => {
  if (intensity < 1) {
    return "invisible";
  } else if (intensity < 2) {
    return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900";
  }
  else if (intensity < 3) {
    return "bg-gradient-to-br from-lime-800 via-emarald-600 to-lime-800";
  }
  else if (intensity < 4) {
    return "bg-gradient-to-br from-lime-700 via-emarald-700 to-lime-700";
  }
  else if (intensity < 5) {
    return "bg-gradient-to-br from-lime-400 via-emarald-700 to-lime-600";
  }
  else if (intensity < 6) {
    return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900";
  }
  else if (intensity < 7) {
    return "bg-gradient-to-br from-lime-900 via-lime-700 to-green-900";
  }
  else if (intensity < 8) {
    return "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-900";
  }
  else if (intensity < 9) {
    return "bg-gradient-to-br from-fuchsia-900 via-rose-700 to-pink-900";
  }
  else {
    return "bg-gradient-to-br from-red-900 via-rose-700 to-red-900";
  } 
};
 */