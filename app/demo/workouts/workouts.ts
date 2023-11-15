// ============================== INTERFACES =============================== //

interface WorkoutSegment {
  id: number;
  workoutId: number;
  name: string;
  duration: number;
  intensity: number;
  tip: string;
}

interface Workout {
  name: string;
  segments: WorkoutSegment[];
  timeLeft: number;
  paused: boolean;
}

/* ========================================================================= */

const newSegment = (id: number, wkid: number, ttl: string, dur: number, int: number, tps: string) => {
  return { id:id, workoutId: wkid, name: ttl, duration: dur, intensity: int, tip: tps };
};

const newWorkout = (
  ttl: string,
  segs: WorkoutSegment[],
  tml: number,
  paus: boolean,
) => {
  return {
    name: ttl,
    segments: segs,
    timeLeft: tml,
    paused: paus,
  };
};

// ========================================================================= //

/* ============================== Static Data =============================== */

// ======================== Random Tip Generation ========================== //

const getRandomElement = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const getTipByType = (typ: string) => {
  let possibilities = [];

  if (typ == "Biking") {
    possibilities.push(
      "Think about pedaling as if tracing a square.  Push forward along the top, down the frontside, scrape the bottom, then pull back up the backside.",
    );
    possibilities.push(
      "Avoid side to side movement in the knees by keeping core tight - no Gumby riding.",
    );
    possibilities.push(
      "Dont let your pelvis slouch. Rotate the hips forward and push the butt back, similar to plank.",
    );
    possibilities.push(
      "Keep the grip on the bars relaxed.  No white knuckles!  Change grips often if needed.",
    );
    possibilities.push(
      "Pay attention!  Are all parts of your form good?  Let go of unneeded thoughts and focus on finishing the effort.",
    );
    possibilities.push(
      "Get on the pedals early - start pushing forward before 12 oclock position.  Feet flat or toes slightly pointed up.",
    );
    possibilities.push(
      "Keep your head up, relax your elbows, shoulders, and hands slightly.",
    );

    return getRandomElement(possibilities);
  } else if (typ == "Productivity") {
    possibilities.push(
      "Focus on one goal at a time.  You have all this time to do this one task!",
    );
    possibilities.push(
      "If you get distracted by something, note down to do it later, rather than doing it now.",
    );
    possibilities.push(
      "Take short breaks if needed to clear your mind and rest, but dont start something else.",
    );
    possibilities.push(
      "Before starting something new, quickly think about what the most effecient way to execute it is, then go. Dont overthink it.",
    );
    possibilities.push(
      "Finish your task completely.  If theres time left, take a quick break and relax before the next segment.",
    );

    return getRandomElement(possibilities);
  } else if (typ == "FoamRoll") {
    possibilities.push(
      "Move up and down the roll for five to ten reps, holding at the end of each move for a few seconds, then switch sides and repeat.",
    );
    possibilities.push(
      "When you hit a tight spot that is painful or uncomfortable, HOLD on that spot for 30-45 seconds. You should feel the tension release slowly",
    );
    possibilities.push(
      "Make sure to keep breathing, even when its painful. Holding your breath wont allow the muscles to release and relax.",
    );
    possibilities.push(
      "RELAX the muscle as best you can. If you are flexing or tensing the muscle group you are trying to roll out, you wont feel the trigger points you need to release",
    );

    return getRandomElement(possibilities);
  }
};

// ========================== 20 min warm up =========================== //

const warmUp2s2 = newSegment(
  9999,
  999,
  "90 RPM",
  300000,
  1,
  "Smooth pedaling - clear your " +
    "mind and mentally prepare for the upcoming session.",
);

const warmUp2s3 = newSegment(9998, 999, "95 RPM", 120000, 1, getTipByType("Biking"));
const warmUp2s4 = newSegment(9997, 999, "100 RPM", 120000, 2, getTipByType("Biking"));
const warmUp2s5 = newSegment(9996, 999, "105 RPM", 120000, 2, getTipByType("Biking"));
const warmUp2s6 = newSegment(9995, 999, "110 RPM", 90000, 3, getTipByType("Biking"));
const warmUp2s7 = newSegment(9994, 999, "120-130 RPM", 30000, 4, getTipByType("Biking"));
const warmUp2s8 = newSegment(9993, 999, "90 RPM", 120000, 1, getTipByType("Biking"));
const warmUp2s9 = newSegment(9992, 999, "MAX", 6000, 5, getTipByType("Biking"));
const warmUp2s10 = newSegment(9991, 999, "90 RPM", 60000, 1, getTipByType("Biking"));
const warmUp2s11 = newSegment(9990, 999, "90 RPM", 162000, 1, getTipByType("Biking"));

const warmUp2 = [
  warmUp2s2,
  warmUp2s3,
  warmUp2s4,
  warmUp2s5,
  warmUp2s6,
  warmUp2s7,
  warmUp2s8,
  warmUp2s9,
  warmUp2s10,
  warmUp2s9,
  warmUp2s10,
  warmUp2s9,
  warmUp2s11,
];

// ===================================================================== //

// ======================= Sweet-Spot Intervals ======================== //

// Segments
const w3s1 = newSegment(
  9989, 
  999, 
  "Sweet-Spot",
  300000,
  4,
  "Maintain a smooth pedal " +
    "stroke. Don't stromp on the pedals when you get tired. Pace your " +
    "effort evenly and avoid major fluctuations in heart rate.",
);

const w3s2 = newSegment(
  9988, 
  999, 
  "Recovery",
  60000,
  1,
  "Maintain a smooth pedal " +
    "stroke. Reduce resistance and keep your legs turning over.",
);

const w3s3 = newSegment(
  9987, 
  999, 
  "Sweet-Spot",
  180000,
  4,
  "Maintain a smooth pedal " +
    "stroke. Don't stromp on the pedals when you get tired. Pace your " +
    "effort evenly and avoid major fluctuations in heart rate.",
);

const w3s4 = newSegment(
  9986, 
  999, 
  "Cool Down",
  600000,
  1,
  "Maintain a smooth pedal " +
    "stroke. Reduce resistance and keep your legs turning over.",
);

// Workout
export const w2 = newWorkout(
  "Sweet-Spot Intervals",
  warmUp2.concat([
    w3s1,
    w3s2,
    w3s1,
    w3s2,
    w3s3,
    w3s2,
    w3s3,
    w3s2,
    w3s3,
    w3s2,
    w3s3,
    w3s2,
    w3s3,
    w3s2,
    w3s4,
  ]),
  0,
  true,
);

// ===================================================================== //
