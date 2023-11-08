import { prisma } from '@/lib/prisma';

import "@/app/globals.css";

import { sfPro, inter, orbitron, roboto, montserrat, lato, lora } from "@/app/fonts";
import cx from "classnames";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import WorkoutPreview, {WorkoutPreviewProps} from '@/components/shared/workoutpreview';
import MediumTitle from '@/components/shared/mediumtitle';
import WorkoutSelector from '@/components/shared/workoutselector';
import { useState, useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const workouts = await prisma.workout.findMany();
  return {
    props: { workouts },
    revalidate: 10,
  };
};

type Props = {
    workouts: WorkoutPreviewProps[]
}

const Workout: React.FC<Props> = (props) => {
  return (
    <div className="fixed h-screen w-full bg-cyclists bg-cover bg-center bg-no-repeat">
      <div className={cx(sfPro.variable, inter.variable, orbitron.variable, roboto.variable, montserrat.variable, lato.variable, lora.variable)}>
        <main className="flex min-h-screen w-full flex-col content-center items-center">
          <div className="bg-white rounded px-10 py-10 mt-20">
            <div className ="w-full text-center text-black">
              <MediumTitle text="Choose your Workout" />
            </div>
            <div className = "flex">
              <div className = "flex-none">
                {props.workouts.map((wkp) => (
                  <div key={wkp.id} className="post">
                    <WorkoutSelector wkp={wkp} />
                  </div>
                ))}
              </div>
              <div className="flex-auto ml-12">
                <WorkoutPreview wkp={props.workouts[0]} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Workout