import React from "react";
import { WorkoutPreviewProps } from "./workoutpreview";
import Image from "next/image";

const WorkoutPreviewCard: React.FC<{
  wkp: WorkoutPreviewProps;
  selected: boolean;
}> = ({ wkp, selected }) => {
  return (
    <div
      className={`mb-4 flex rounded border px-1 py-1 ${
        selected ? "border-4 border-green-200" : ""
      }`}
    >
      <Image alt="CycleBru Logo" src="/logo2.png" width={40} height={40} />
      <div className="ml-2 text-xl">{wkp.name}</div>
    </div>
  );
};

export default WorkoutPreviewCard;
