import React from "react";
import Button from "./button";

export type WorkoutPreviewProps = {
  id: string;
  name: string;
  overview: string;
  objective: string;
  training_phase: string;
};

const WorkoutPreview: React.FC<{ wkp: WorkoutPreviewProps }> = ({ wkp }) => {
  return (
    <div className="border px-4 py-4">
      <div className="mb-4 font-roboto text-4xl">{wkp.name}</div>
      <div className="font-lato text-sm italic">Workout Time: 1:02:00</div>
      <div className="mb-6 font-lato text-sm italic">
        Average Intensity: 4.2/10
      </div>
      <div className="font-roboto text-sm font-bold uppercase text-red-500">
        overview
      </div>
      <div className="mb-4 max-w-md font-lora text-sm">{wkp.overview}</div>
      <div className="font-roboto text-sm font-bold uppercase text-red-500">
        objective
      </div>
      <div className="mb-4 max-w-md font-lora text-sm">{wkp.objective}</div>
      <div className="font-roboto text-sm font-bold uppercase text-red-500">
        training phase
      </div>
      <div className="mb-4 max-w-md font-lora text-sm">
        {wkp.training_phase}
      </div>
      <div className="relative mb-16 mt-8 max-w-full">
        <div className="absolute right-0">
          <Button>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPreview;
