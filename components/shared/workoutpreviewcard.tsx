import React from "react";
import { WorkoutPreviewProps } from "./workoutpreview";
import Image from "next/image";

const WorkoutPreviewCard: React.FC<{
  wkp: WorkoutPreviewProps;
  selected: boolean;
}> = ({ wkp, selected }) => {
  return (
    <div
      className={`relative mb-2 flex rounded border w-60 px-2 py-1  ${
        selected ? "border-2 border-purple-500 bg-yellow-100" : ""
      }`}
    >
      <Image alt="CycleBru Logo" src="/logo2.png" width={30} height={30} />
      <div className="relative ml-2 text-md font-semibold  mt-1">{wkp.name}</div>
    </div>
  );
};

export default WorkoutPreviewCard;
