import { prisma } from "@/lib/prisma";

import "@/app/globals.css";

import {
  sfPro,
  inter,
  orbitron,
  roboto,
  montserrat,
  lato,
  lora,
} from "@/app/fonts";
import cx from "classnames";

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import WorkoutPreview, {
  WorkoutPreviewProps,
} from "@/components/shared/workoutpreview";
import BigTitle from "@/components/shared/bigtitle";
import WorkoutPreviewCard from "@/components/shared/workoutpreviewcard";
import { useState, useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const workouts = await prisma.workout.findMany({
    include: {
      segments: true,
      focus: true,
    }
  });

  return {
    props: { workouts },
    revalidate: 10,
  };
};

type Props = {
  workouts: WorkoutPreviewProps[];
};

const getWorkoutById = (wk: WorkoutPreviewProps[], searchId: number) => {
  for (let i = 0; i < wk.length; i++) {
    if (wk[i].id === searchId) {
      return i;
    }
  }

  return 0;
};

const Workout: React.FC<Props> = (props) => {
  // Default Workout to Id 1
  const [selectedWorkout, setSelectedWorkout] = useState(0);

  return (
    <div className="fixed h-screen w-full bg-cyclists bg-cover bg-center bg-no-repeat">
      <div
        className={cx(
          sfPro.variable,
          inter.variable,
          orbitron.variable,
          roboto.variable,
          montserrat.variable,
          lato.variable,
          lora.variable,
        )}
      >
        <main className="flex min-h-screen w-full flex-col content-center items-center">
          <div className="mt-20 rounded bg-white px-10">
            <div className="w-full text-center">
              <BigTitle text="Choose your Workout" />
            </div>
            <div className="flex">
              <div className="mb-10 mr-2">
                <div className="font-roboto text-sm font-bold uppercase text-purple-600">Classic Workouts</div>
                {props.workouts.filter((wkp) => wkp.difficulty === 1).map((wkp) => (
                  <div key={wkp.id} className="post">
                    <button
                      className="relative scale-50 transition-colors hover:bg-white hover:text-black md:scale-100"
                      onClick={() => setSelectedWorkout(getWorkoutById(props.workouts, wkp.id))}
                    >
                      <WorkoutPreviewCard
                        wkp={wkp}
                        selected={props.workouts[selectedWorkout].id === wkp.id ? true : false}
                      />
                    </button>
                  </div>
                ))}
                <div className="font-roboto text-sm font-bold uppercase text-purple-600">Need for Speed</div>
                {props.workouts.filter((wkp) => wkp.difficulty === 2).map((wkp) => (
                  <div key={wkp.id} className="post">
                    <button
                      className="relative scale-50 transition-colors hover:bg-white hover:text-black md:scale-100"
                      onClick={() => setSelectedWorkout(getWorkoutById(props.workouts, wkp.id))}
                    >
                      <WorkoutPreviewCard
                        wkp={wkp}
                        selected={props.workouts[selectedWorkout].id === wkp.id ? true : false}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className = "ml-2">
                <div className="font-roboto text-sm font-bold uppercase text-purple-600">Strength and Punch</div>
                {props.workouts.filter((wkp) => wkp.difficulty === 3).map((wkp) => (
                  <div key={wkp.id} className="post">
                    <button
                      className="relative scale-50 transition-colors hover:bg-white hover:text-black md:scale-100"
                      onClick={() => setSelectedWorkout(getWorkoutById(props.workouts, wkp.id))}
                    >
                      <WorkoutPreviewCard
                        wkp={wkp}
                        selected={props.workouts[selectedWorkout].id === wkp.id ? true : false}
                      />
                    </button>
                  </div>
                ))}
                <div className="font-roboto text-sm font-bold uppercase text-purple-600">Rest and Recovery</div>
                {props.workouts.filter((wkp) => wkp.difficulty === 4).map((wkp) => (
                  <div key={wkp.id} className="post">
                    <button
                      className="relative scale-50 transition-colors hover:bg-white hover:text-black md:scale-100"
                      onClick={() => setSelectedWorkout(getWorkoutById(props.workouts, wkp.id))}
                    >
                      <WorkoutPreviewCard
                        wkp={wkp}
                        selected={props.workouts[selectedWorkout].id === wkp.id ? true : false}
                      />
                    </button>
                  </div>
                ))}             
              </div>
              <div className="ml-12">
                <WorkoutPreview
                  wkp={props.workouts[selectedWorkout]}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workout;
