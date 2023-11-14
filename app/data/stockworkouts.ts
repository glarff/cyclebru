// ========================= Segment Generation ============================ //

const newSegment = (ttl: string, dur: number, int: number, tps: string) => {
  return { name: ttl, duration: dur, intensity: int, tip: tps };
};

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
   
   
// =========================== Wu-T1 warm up =========================== //

var warmUp1s1 = newSegment("Warm Up: Z1", 300000, 2, "Spend the first 5 " +
    "minutes of your session in Z1. Gradually increase cadence to 90+.");

var warmUp1s2 = newSegment("Warm Up: Z2-Z3", 300000, 4, "Spend the next " +
    "5 minutes progressing through Z2. End at a low Z3.");

var warmUp1s3 = newSegment("Warm Up: Max Spin / Easy Spin", 120000, 5,
    "Now increase the cadence to your maximum, hold for 5 seconds, " +
    "followed by 25 seconds easy spin. Repeat maximum cadence / easy " +
    "spin 3 more times.");

var warmUp1s4 = newSegment("Warm Up: Easy Spin", 120000, 2, "Finish with " +
    " 2 minute easy spin before starting main content of session.");

var warmUp1 = [warmUp1s1, warmUp1s2, warmUp1s3, warmUp1s4];

// ===================================================================== //

// ========================== 20 min warm up =========================== //

const warmUp2s1 = newSegment("90 RPM", 5 * 60 * 1000, 2, "Smooth pedaling - clear your " +
    "mind and mentally prepare for the upcoming session.",);

const warmUp2s2 = newSegment("95 RPM", 2 * 60 * 1000, 2, getTipByType("Biking"));

const warmUp2s3 = newSegment("100 RPM", 2 * 60 * 1000, 3, getTipByType("Biking"));

const warmUp2s4 = newSegment("105 RPM", 2 * 60 * 1000, 3, getTipByType("Biking"));

const warmUp2s5 = newSegment("110 RPM", 1.5 * 60 * 1000, 4, getTipByType("Biking"));

const warmUp2s6 = newSegment("120-130 RPM", 30 * 1000, 4, getTipByType("Biking"));

const warmUp2s7 = newSegment("90 RPM", 2 * 60 * 1000, 2, getTipByType("Biking"));

const warmUp2s8 = newSegment("Max Spin!", 6 * 1000, 5, getTipByType("Biking"));

const warmUp2s9 = newSegment("Easy Spin", 60 * 1000, 1, getTipByType("Biking"));

const warmUp2s10 = newSegment("90 RPM", 162 * 1000, 2, getTipByType("Biking"));

const warmUp2 = [
  warmUp2s1,
  warmUp2s2,
  warmUp2s3,
  warmUp2s4,
  warmUp2s5,
  warmUp2s6,
  warmUp2s7,
  warmUp2s8,
  warmUp2s9,
  warmUp2s8,
  warmUp2s9,
  warmUp2s8,
  warmUp2s10,
];

// ====================== Tempo Intervals Workout ====================== //

// Segments 
const w2s1 = newSegment("HRZ 3", 600000, 5, getTipByType("Biking"));
const w2s2 = newSegment("Easy Spin", 300000, 2, getTipByType("Biking"));
const w2s3 = newSegment("Easy Spin", 600000, 2, getTipByType("Biking"));

// Workout
export const w1segs = (warmUp1.concat([w2s1, w2s2, w2s1, w2s2, w2s1, w2s3]));

// ===================================================================== //

// ======================= Sweet-Spot Intervals ======================== //

// Segments 
const w3s1 = newSegment("Sweet-Spot", 300000, 6, getTipByType("Biking"));

const w3s2 = newSegment("Recovery", 60000, 1, "Maintain a smooth pedal " +
    "stroke. Reduce resistance and keep your legs turning over.");

const w3s3 = newSegment("Sweet-Spot", 180000, 6, "Maintain a smooth pedal " +
    "stroke. Don't stromp on the pedals when you get tired. Pace your " +
    "effort evenly and avoid major fluctuations in heart rate.");

const w3s4 = newSegment("Cool Down", 600000, 1, "Maintain a smooth pedal " +
    "stroke. Reduce resistance and keep your legs turning over.");

// Workout
export const w2segs = warmUp2.concat([w3s1, w3s2, w3s1, w3s2, w3s3, w3s2,
        w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s4]);

// ===================================================================== //

// ======================== Pyramid Intervals ========================== //

// Segments
const w4s1 = newSegment("Threshold", 1 * 60 * 1000, 7, getTipByType("Biking"));
const w4s2 = newSegment("Recovery", 1 * 60 * 1000, 1, getTipByType("Biking"));
const w4s3 = newSegment("Threshold", 2 * 60 * 1000, 7, getTipByType("Biking"));
const w4s4 = newSegment("Recovery", 2 * 60 * 1000, 1, getTipByType("Biking"));
const w4s5 = newSegment("Threshold", 3 * 60 * 1000, 7, getTipByType("Biking"));
const w4s6 = newSegment("Recovery", 3 * 60 * 1000, 1, getTipByType("Biking"));
const w4s7 = newSegment("Threshold", 4 * 60 * 1000, 7, getTipByType("Biking"));
const w4s8 = newSegment("Recovery", 4 * 60 * 1000, 1, getTipByType("Biking"));
const w4s9 = newSegment("Threshold", 5 * 60 * 1000, 7, getTipByType("Biking"));
const w4s10 = newSegment("Cool Down", 10 * 60 * 1000, 1, getTipByType("Productivity"));

// Workout
export const w3segs = warmUp2.concat([w4s1, w4s2, w4s3, w4s4, w4s5,
  w4s6, w4s7, w4s8, w4s9, w4s8, w4s7, w4s6, w4s5, w4s4, w4s3, w4s2,
  w4s1, w4s10]);

// ====================================================================== //

// =========================== 3x10 Minutes ============================= //

// Segments
const w5s1 = newSegment("HRZ/PZ 3/4", 10 * 60 * 1000, 6, getTipByType("Biking"));
const w5s2 = newSegment("Recovery", 10 * 60 * 1000, 2, getTipByType("Biking"));
const w5s3 = newSegment("Cool Down", 10 * 60 * 1000, 1, getTipByType("Productivity"));

// Workout
export const w4segs = warmUp2.concat([w5s1, w5s2, w5s1, w5s2, w5s1, w5s3]);

// ====================================================================== //

// =========================== 2x20 Minutes ============================= //

// Segments
const w6s1 = newSegment("Sweet Sport / Threshold", 20 * 60 * 1000, 6, getTipByType("Biking"));
const w6s2 = newSegment("Recovery", 10 * 60 * 1000, 2, getTipByType("Biking"));
const w6s3 = newSegment("Cool Down", 10 * 60 * 1000, 1, getTipByType("Productivity"));

// Workout
export const w5segs = warmUp2.concat([w6s1, w5s2, w6s1, w5s3]);

// ====================================================================== //

