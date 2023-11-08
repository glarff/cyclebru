import React from "react";


export type WorkoutPreviewProps = {
  id: string;
  name: string;
  overview: string;
  objective: string;
  training_phase: string;
};

const WorkoutPreview: React.FC<{ wkp: WorkoutPreviewProps }> = ({ wkp }) => {
  return (
    <div className = "border px-4 py-4" >
      <div className = "text-4xl mb-4 font-roboto">{wkp.name}</div>
      <div className = "italic text-sm font-lato">Workout Time: 1:02:00</div>
      <div className = "italic text-sm font-lato mb-6">Average Intensity: 4.2/10</div>

      <div className = "text-sm uppercase text-red-500 font-bold font-roboto">overview</div>
      <div className = "text-sm max-w-md mb-4 font-lora">{wkp.overview}</div>
      <div className = "text-sm uppercase text-red-500 font-bold font-roboto">objective</div>
      <div className = "text-sm max-w-md mb-4 font-lora">{wkp.objective}</div>
      <div className = "text-sm uppercase text-red-500 font-bold font-roboto">training phase</div>
      <div className = "text-sm max-w-md mb-4 font-lora">{wkp.training_phase}</div>
    </div>
  );
};

export default WorkoutPreview;
