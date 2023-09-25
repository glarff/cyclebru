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
        className={`relative mx-12 ${panelColor}`}
      >
        <div className="font-orbitron text-7xl shadow-md">
          {timerTxt}
        </div>
      </div>
    </div>
  );
}
