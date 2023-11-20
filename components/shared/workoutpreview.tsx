import React from "react";
import Button from "./button";

import {
  getTimeDivisions,
  formatForTimer
} from "@/app/demo/helperfunctions";

import Router from "next/router";

export type WorkoutFocus = {
  id: number
  focus_text: String
}

export type WorkoutSegment = {
  id: number
  name: String
  duration: number
  intensity: number
}

export type WorkoutPreviewProps = {
  id: number
  name: string
  overview: string
  objective: string
  training_phase: string
  segments: WorkoutSegment[]
  focus: WorkoutFocus[]
  difficulty: number
};

const formatTimeForDisplay = (ms: number) => {
  const x1 = getTimeDivisions(ms);
  return (formatForTimer(x1.hrs, x1.mins, x1.secs));
}

const calculateTotalTime = (wk: WorkoutSegment[]) => {
  let ttl = 0;
  if (wk) {
    for (let i = 0; i < wk.length; i++) {
      ttl += wk[i].duration;
    }
  }
  return ttl;
};

const calculateAverageIntensity = (wk: WorkoutSegment[]) => {
  let totalTime = 0;
  let totalWeightedTime = 0;
  if (wk) {
    for (let i = 0; i < wk.length; i++) {
      totalTime += wk[i].duration;
      totalWeightedTime += wk[i].duration * wk[i].intensity;
    }
  }
  return (totalWeightedTime / totalTime).toPrecision(3);
};

const startWorkout = (wkp: WorkoutPreviewProps) => {
  localStorage.setItem('selectedWorkout', JSON.stringify(wkp));
  Router.push('/demo');
}
 
const WorkoutPreview: React.FC<{ wkp: WorkoutPreviewProps }> = ({ wkp }) => {
  return (
    <div className="border px-4 py-4 mb-10">
      <div className="mb-4 font-roboto text-4xl">{wkp.name}</div>
      <div className="font-lato text-sm italic">
        Workout Time: {
          formatTimeForDisplay(calculateTotalTime(wkp.segments)) 
        }
      </div>
      <div className="mb-6 font-lato text-sm italic">
        Average Intensity: {
          calculateAverageIntensity(wkp.segments)
        }
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
         <button
          className="relative text-purple-800 font-semibold px-1 py-1 border border-purple-800 rounded-md"
          onClick={() => startWorkout(wkp) }
         >
            Start
         </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPreview;
