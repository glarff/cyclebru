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
  const workouts = await prisma.workout.findMany();
  return {
    props: { workouts },
    revalidate: 10,
  };
};

type Props = {
  workouts: WorkoutPreviewProps[];
};

const Workout: React.FC<Props> = (props) => {
  // Default Workout to Id 1
  const [selectedWorkout, setSelectedWorkout] = useState("1");

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
          <div className="mt-20 rounded bg-white px-10 py-10">
            <div className="w-full text-center text-black">
              <BigTitle text="Choose your Workout" />
            </div>
            <div className="flex">
              <div className="flex-none">
                {props.workouts.map((wkp) => (
                  <div key={wkp.id} className="post">
                    <button
                      className="relative scale-50 transition-colors hover:bg-white hover:text-black md:scale-100"
                      onClick={() => setSelectedWorkout(wkp.id)}
                    >
                      <WorkoutPreviewCard
                        wkp={wkp}
                        selected={selectedWorkout === wkp.id ? true : false}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="ml-12 flex-auto">
                <WorkoutPreview
                  wkp={props.workouts[Number(selectedWorkout) - 1]}
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
