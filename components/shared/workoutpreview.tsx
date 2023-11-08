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
    <div className = "border px-4 py-4">
      <div className = "text-4xl mb-10">{wkp.name}</div>
      <div className = "text-lg max-w-md mb-4">{wkp.overview}</div>
      <div className = "text-lg max-w-md mb-4 flex">Objective: <div className="ml-2"></div>{wkp.objective}</div>
      <div className = "text-lg max-w-md mb-4 flex">Training Phase: <div className="ml-2"></div>{wkp.training_phase}</div>
    </div>
  );
};

export default WorkoutPreview;
