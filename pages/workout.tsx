import { prisma } from '@/lib/prisma';

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import WorkoutPreview, {WorkoutPreviewProps} from '@/components/shared/workoutpreview';

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
    <div>
      <div className="page">
        <h1>Choose your Workout</h1>
        <main>
          {props.workouts.map((wkp) => (
            <div key={wkp.id} className="post">
              <WorkoutPreview wkp={wkp} />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Workout