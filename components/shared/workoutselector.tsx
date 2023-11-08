import React from "react";
import { WorkoutPreviewProps } from "./workoutpreview";
import Image from "next/image";

const WorkoutSelector: React.FC<{ wkp: WorkoutPreviewProps }> = ({ wkp }) => {
  return (
    <div className ="flex mb-4 border px-1 py-1 bg-white">
        <Image
          alt="Calendar icon"
          src="/logo2.png"
          width={40}
          height={40}
        />
      <div className="text-xl ml-2">{wkp.name}</div>
    </div>
  );
};

export default WorkoutSelector;
