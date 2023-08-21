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
        className={`relative col-span-1 mx-12 overflow-hidden  ${panelColor}`}
      >
        <div className="flex font-orbitron text-7xl shadow-md">
          {timerTxt}
        </div>
      </div>
    </div>
  );
}
