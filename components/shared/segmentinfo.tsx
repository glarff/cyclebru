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
    <div className={`mx-2 my-2 flex border ${bgc}`}>
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

const getPanelColor = (intensity: number) => {
  if (intensity < 1) {
    return "invisible";
  } else if (intensity < 2) {
    return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900";
  } // 1 - dark green
  else if (intensity < 3) {
    return "bg-gradient-to-br from-yellow-900 via-lime-700 to-green-900";
  } // 2 - lime green
  else if (intensity < 4) {
    return "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-900";
  } // 3 - dark orange
  else if (intensity < 5) {
    return "bg-gradient-to-br from-fuchsia-900 via-rose-700 to-pink-900";
  } // 4 - salmon
  else {
    return "bg-gradient-to-br from-red-900 via-rose-700 to-red-900";
  } // 5 - firebrick
};
