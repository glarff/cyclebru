export default function Timer({
  timerTxt,
  panelColor,
}: {
  timerTxt: string;
  panelColor: string;
}) {
  return (
    <div>
      <div
        className={`relative mx-12 text-${panelColor}`}
      >
        <div className="font-orbitron text-4xl md:text-7xl shadow-md">
          {timerTxt}
        </div>
      </div>
    </div>
  );
}
