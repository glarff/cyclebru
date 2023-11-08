import React from "react";

export type WorkoutPreviewProps = {
  id: string;
  name: string;
  overview: string;
  objective: string;
  phase: string;
};

const WorkoutPreview: React.FC<{ wkp: WorkoutPreviewProps }> = ({ wkp }) => {
  return (
    <div>
      <h2>{wkp.name}</h2>
      <small>{wkp.overview}</small>
    </div>
  );
};

export default WorkoutPreview;
