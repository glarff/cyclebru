// ========================= Segment Generation ============================ //

const newSegment = (ttl: string, dur: number, int: number) => {
  return { name: ttl, duration: dur, intensity: int};
};

// ======================== Random Tip Generation ========================== //

const getRandomElement = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

/* const getTipByType = (typ: string) => { 
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
  } 

    return getRandomElement(possibilities);
  }
}; */
   
// =========================== Wu-T1 warm up =========================== //

const warmUp1s1 = newSegment("Warm Up: Z1", 300000, 2);
const warmUp1s2 = newSegment("Warm Up: Z2-Z3", 300000, 4);
const warmUp1s3 = newSegment("Warm Up: Max Spin / Easy Spin", 120000, 5);
const warmUp1s4 = newSegment("Warm Up: Easy Spin", 120000, 2);
const warmUp1 = [warmUp1s1, warmUp1s2, warmUp1s3, warmUp1s4];

// ===================================================================== //

// ========================== 20 min warm up =========================== //

const warmUp2s1 = newSegment("90 RPM", 5 * 60 * 1000, 2);
const warmUp2s2 = newSegment("95 RPM", 2 * 60 * 1000, 2);
const warmUp2s3 = newSegment("100 RPM", 2 * 60 * 1000, 3);
const warmUp2s4 = newSegment("105 RPM", 2 * 60 * 1000, 3);
const warmUp2s5 = newSegment("110 RPM", 1.5 * 60 * 1000, 4);
const warmUp2s6 = newSegment("120-130 RPM", 30 * 1000, 4);
const warmUp2s7 = newSegment("90 RPM", 2 * 60 * 1000, 2);
const warmUp2s8 = newSegment("Max Spin!", 6 * 1000, 5);
const warmUp2s9 = newSegment("Easy Spin", 60 * 1000, 1);
const warmUp2s10 = newSegment("90 RPM", 162 * 1000, 2);

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

// ===================================================================== //

// ====================== Tempo Intervals Workout ====================== //

// Segments 
const w1s1 = newSegment("HRZ 3", 600000, 5);
const w1s2 = newSegment("Easy Spin", 300000, 2);
const w1s3 = newSegment("Easy Spin", 600000, 2);

// Workout
export const w1segs = (warmUp1.concat([w1s1, w1s2, w1s1, w1s2, w1s1, w1s3]));

// ===================================================================== //

// ============================ Zone Build ============================= //

// Segments 
const w2s1 = newSegment("HRZ 1", 10 * 60 * 1000, 2);
const w2s2 = newSegment("HRZ 2", 20 * 60 * 1000, 3);
const w2s3 = newSegment("HRZ 3", 5 * 60 * 1000, 5);
const w2s4 = newSegment("HRZ 1", 5 * 60 * 1000, 2);
const w2s5 = newSegment("HRZ 2", 5 * 60 * 1000, 3);
const w2s6 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
export const w2segs = [w2s1, w2s2, w2s3, w2s4, w2s5, w2s3, w2s6];

// ===================================================================== //

// ======================== Pyramid Intervals ========================== //

// Segments
const w4s1 = newSegment("Threshold", 1 * 60 * 1000, 7);
const w4s2 = newSegment("Recovery", 1 * 60 * 1000, 1);
const w4s3 = newSegment("Threshold", 2 * 60 * 1000, 7);
const w4s4 = newSegment("Recovery", 2 * 60 * 1000, 1);
const w4s5 = newSegment("Threshold", 3 * 60 * 1000, 7);
const w4s6 = newSegment("Recovery", 3 * 60 * 1000, 1);
const w4s7 = newSegment("Threshold", 4 * 60 * 1000, 7);
const w4s8 = newSegment("Recovery", 4 * 60 * 1000, 1);
const w4s9 = newSegment("Threshold", 5 * 60 * 1000, 7);
const w4s10 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
export const w3segs = warmUp2.concat([w4s1, w4s2, w4s3, w4s4, w4s5,
  w4s6, w4s7, w4s8, w4s9, w4s8, w4s7, w4s6, w4s5, w4s4, w4s3, w4s2,
  w4s1, w4s10]);

// ====================================================================== //

// =========================== 3x10 Minutes ============================= //

// Segments
const w5s1 = newSegment("HRZ/PZ 3/4", 10 * 60 * 1000, 6);
const w5s2 = newSegment("Recovery", 10 * 60 * 1000, 2);
const w5s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
export const w4segs = warmUp2.concat([w5s1, w5s2, w5s1, w5s2, w5s1, w5s3]);

// ====================================================================== //

// =========================== 2x20 Minutes ============================= //

// Segments
const w6s1 = newSegment("Sweet Sport / Threshold", 20 * 60 * 1000, 6);
const w6s2 = newSegment("Recovery", 10 * 60 * 1000, 2);
const w6s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
export const w5segs = warmUp2.concat([w6s1, w5s2, w6s1, w5s3]);

// ====================================================================== //

// ============================== 20/40s ================================ //

// Segments
const w7s1 = newSegment("Sprint 95 RPM+", 20 * 1000, 8);
const w7s2 = newSegment("Recovery", 40 * 1000, 1);
const w7s3 = newSegment("Recovery", 340 * 1000, 1);
const w7s4 = newSegment("Cool Down", 640 * 1000, 1);

// Workout
let w6x = []; 
let lastSet = false;

// 5 sets of 20/40s
for (let i = 0; i < 5; i++) {
  if (i === 4) {
    lastSet = true;
  }

  for (let j = 0; j < 4; j++) {
    w6x.push(w7s1);
    w6x.push(w7s2);
  }
  
  w6x.push(w7s1);

  if(!lastSet) {
    w6x.push(w7s3);
  }
}

w6x.push(w7s4);

export const w6segs = warmUp2.concat(w6x);


// ====================================================================== //

// ======================= Ramped VO2 intervals ========================= //

// Segments
const w8s1 = newSegment("VO2 MAX", 5* 60 * 1000, 9);
const w8s2 = newSegment("Recovery", 5 * 60 * 1000, 1);
const w8s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w8x = []; 

// 4 sets of VO2 max / recovery
for (let i = 0; i < 4; i++) {
  w8x.push(w8s1);
  w8x.push(w8s2);
}

// One last VO2 max then cooldown
w8x.push(w8s1);
w8x.push(w8s3);

export const w8segs = warmUp2.concat(w8x);

// ====================================================================== //

// ====================== Under/Over with surges ======================== //

// Segments
const w9s1 = newSegment("HRZ/PZ3.5", 90 * 1000, 5);
const w9s2 = newSegment("HRZ/PZ5", 20 * 1000, 8);
const w9s3 = newSegment("MAX", 10 * 1000, 9);
const w9s4 = newSegment("Recovery", 5 * 60 * 1000, 1);
const w9s5 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w9x = []; 
let w9lastSet = false;

for (let i = 0; i < 3; i++) {
  for (let j=0; j < 5; j++) {
    w9x.push(w9s1);
    w9x.push(w9s2);
    w9x.push(w9s3);
  }

  if (i === 2) {
    w9lastSet = true;
  }

  if (!w9lastSet) {
    w9x.push(w9s4);
  }
}

w9x.push(w9s5);

export const w9segs = warmUp2.concat(w9x);

// ====================================================================== //

// ======================= Big gear/low cadence ========================= //

// Segments
const w10s1 = newSegment("50-60 RPM", 5 * 60 * 1000, 7);
const w10s2 = newSegment("Recovery", 3 * 60 * 1000, 1);
const w10s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w10x = []; 
let w10lastSet = false;

// 6 sets of Big Gear / Recovery
// Skip recovery on last set and go to cooldown
for (let i = 0; i < 6; i++) {
  w10x.push(w10s1);

  if (i===5) {
    w10lastSet = true;
  }

  if (!w10lastSet) {
    w10x.push(w10s2);
  }
}

w10x.push(w10s3);

export const w10segs = warmUp2.concat(w10x);

// ====================================================================== //

// ============================= Leg speed ============================== //

// Segments
const w11s1 = newSegment("90 RPM", 3 * 60 * 1000, 2);
const w11s2 = newSegment("100 RPM", 2 * 60 * 1000, 3);
const w11s3 = newSegment("110 RPM", 1 * 60 * 1000, 4);
const w11s4 = newSegment("115 RPM", 30 * 1000, 5);
const w11s5 = newSegment("120 RPM", 15 * 1000, 6);
const w11s6 = newSegment("MAX", 15 * 1000, 7);
const w11s7 = newSegment("Recovery", 2 * 60 * 1000, 1);
const w11s8 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w11x = []; 
let w11lastSet = false;

//Run through this twice and after the final effort 
//miss the recovery and go straight into cool-down
for (let i = 0; i < 2; i++) {
  w11x.push(w11s1);
  w11x.push(w11s2);
  w11x.push(w11s3);
  w11x.push(w11s4);
  w11x.push(w11s5);
  w11x.push(w11s6);
  w11x.push(w11s7);
  w11x.push(w11s6);
  w11x.push(w11s5);
  w11x.push(w11s4);
  w11x.push(w11s3);
  w11x.push(w11s2);

  if (i===1) {
    w11lastSet = true;
  }

  if (!w11lastSet) {
    w11x.push(w11s7);
  }
}

w11x.push(w11s8);

export const w11segs = warmUp2.concat(w11x);

// ====================================================================== //

// ============================= Spin out =============================== //

// Segments
const w12s1 = newSegment("INCREASE TO NEAR MAX", 30 * 1000, 4);
const w12s2 = newSegment("130 RPM+ HOLD AT MAX", 60 * 1000, 6);
const w12s3 = newSegment("Recovery", 4 * 60 * 1000, 1);
const w12s4 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w12x = []; 
let w12lastSet = false;

//Repeat set four times. After fourth spin out, don’t 
//  do the active recovery, go straight into your cool-down.
for (let i = 0; i < 4; i++) {
  w12x.push(w12s1);
  w12x.push(w12s2);

  if (i===3) {
    w12lastSet = true;
  }

  if (!w12lastSet) {
    w12x.push(w12s3);
  }
}

w12x.push(w12s4);

export const w12segs = warmUp1.concat(w12x);

// ====================================================================== //

// ======================= Pyramid Intervals 2 ========================== //

// Segments
const w13s1 = newSegment("MAX", 10 * 1000, 8);
const w13s2 = newSegment("Recovery", 10 * 1000, 1);
const w13s3 = newSegment("MAX", 20 * 1000, 8);
const w13s4 = newSegment("Recovery", 20 * 1000, 1);
const w13s5 = newSegment("MAX", 30 * 1000, 8);
const w13s6 = newSegment("Recovery", 30 * 1000, 1);
const w13s7 = newSegment("MAX", 40 * 1000, 8);
const w13s8 = newSegment("Recovery", 40 * 1000, 1);
const w13s9 = newSegment("MAX", 50 * 1000, 8);
const w13s10 = newSegment("Recovery", 50 * 1000, 1);
const w13s11 = newSegment("Easy Spin", 3 * 60 * 1000, 1);
const w13s12 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w13x = []; 
let w13lastSet = false;

// Repeat for a total of three repetitions. After your final 10-second 
//   effort of the third set, don’t do the 3-minute recovery, go 
//   straight into your cool-down.
for (let i = 0; i < 3; i++) {
  w13x.push(w13s1);
  w13x.push(w13s2);
  w13x.push(w13s3);
  w13x.push(w13s4);
  w13x.push(w13s5);
  w13x.push(w13s6);
  w13x.push(w13s7);
  w13x.push(w13s8);
  w13x.push(w13s9);
  w13x.push(w13s10);
  w13x.push(w13s7);
  w13x.push(w13s8);
  w13x.push(w13s5);
  w13x.push(w13s6);
  w13x.push(w13s3);
  w13x.push(w13s4);
  w13x.push(w13s1);
  w13x.push(w13s2);

  if (i===2) {
    w13lastSet = true;
  }

  if (!w13lastSet) {
    w13x.push(w13s11);
  }
}

w12x.push(w13s12);

export const w13segs = warmUp2.concat(w13x);

// ====================================================================== //

// ========================= Russian steps ============================== //

// Segments
const w14s1 = newSegment("MAX", 15 * 1000, 8);
const w14s2 = newSegment("Recovery", 45 * 1000, 1);
const w14s3 = newSegment("MAX", 30 * 1000, 8);
const w14s4 = newSegment("Recovery", 30 * 1000, 1);
const w14s5 = newSegment("MAX", 45 * 1000, 8);
const w14s6 = newSegment("Recovery", 15 * 1000, 1);
const w14s7 = newSegment("MAX", 60 * 1000, 8);
const w14s8 = newSegment("Recovery", 60 * 1000, 1);
const w14s9 = newSegment("Recovery", 345 * 1000, 1);
const w14s10 = newSegment("Cool Down", 585 * 1000, 1);

// Workout
let w14x = []; 
let w14lastSet = false;

// Repeat sets times three in total. After the final 15-second effort of
//   the third set, go straight into your cool-down
for (let i = 0; i < 3; i++) {
  w14x.push(w14s1);
  w14x.push(w14s2);
  w14x.push(w14s3);
  w14x.push(w14s4);
  w14x.push(w14s5);
  w14x.push(w14s6);
  w14x.push(w14s7);
  w14x.push(w14s8);
  w14x.push(w14s5);
  w14x.push(w14s6);
  w14x.push(w14s3);
  w14x.push(w14s4);
  w14x.push(w14s1);

  if (i===2) {
    w14lastSet = true;
  }

  if (!w14lastSet) {
    w14x.push(w14s9);
  }
}

w14x.push(w14s10);

export const w14segs = warmUp2.concat(w14x);

// ====================================================================== //

// ======================= 2 x 20-Min Warmup ============================ //
export const w15segs = warmUp2.concat(warmUp2);
// ====================================================================== //

// ====================== One-Minute Intervals ========================== //

// Segments
const w16s1 = newSegment("Max Effort", 60 * 1000, 8);
const w16s2 = newSegment("Recovery", 3 * 60 * 1000, 1);
const w16s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w16x = []; 
let w16lastSet = false;

for (let i = 0; i < 8; i++) {
  w16x.push(w16s1);

  if (i===7) {
    w16lastSet = true;
  }

  if (!w16lastSet) {
    w16x.push(w16s2);
  }
}

w16x.push(w16s3);

export const w16segs = warmUp2.concat(w16x);

// ====================================================================== //

// ============================ Under/Over ============================== //

// Segments
const w17s1 = newSegment("UNDER", 60 * 1000, 4);
const w17s2 = newSegment("OVER", 60 * 1000, 6);
const w17s3 = newSegment("Recovery", 5 * 60 * 1000, 1);
const w17s4 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w17x = []; 
let w17lastSet = false;

// Repeat for a total of 4 sets. After the final set, go straight into your 
//   cool-down without the 5 minutes of Active Recovery.
for (let i = 0; i < 4; i++) {
  
  for (let j=0; j < 5; j++) {
    w17x.push(w17s1);
    w17x.push(w17s2);
  }

  if (i === 3) {
    w17lastSet = true;
  }

  if (!w17lastSet) {
    w17x.push(w17s3);
  }
}

w17x.push(w17s4);

export const w17segs = warmUp2.concat(w17x);

// ====================================================================== //

// ======================= Sweet-Spot Intervals ========================= //

// Segments
const w18s1 = newSegment("Sweet-Spot", 5 * 60 * 1000, 5);
const w18s2 = newSegment("Sweet-Spot", 3 * 60 * 1000, 5);
const w18s3 = newSegment("Recovery", 60 * 1000, 1);
const w18s4 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w18x = []; 

for (let i = 0; i < 2; i++) {
  w18x.push(w18s1);
  w18x.push(w18s3);
}

for (let i = 0; i < 5; i++) {
  w18x.push(w18s2);
  w18x.push(w18s3);
}

w18x.push(w18s4);

export const w18segs = warmUp2.concat(w18x);

// ====================================================================== //

// ===================== Improvers VO2 intervals ======================== //

// Segments
const w19s1 = newSegment("HRZ/PZ 5", 3 * 60 * 1000, 9);
const w19s2 = newSegment("Recovery", 5 * 60 * 1000, 1);
const w19s3 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w19x = []; 

for (let i = 0; i < 4; i++) {
  w19x.push(w19s1);
  w19x.push(w19s2);
}

w19x.push(w19s1);
w19x.push(w19s3);

export const w19segs = warmUp2.concat(w19x);

// ====================================================================== //

// ========================== Geared Sprint ============================= //

// Segments
const w20s1 = newSegment("39x21", 30 * 1000, 8);
const w20s2 = newSegment("39x18", 30 * 1000, 8);
const w20s3 = newSegment("39x15", 30 * 1000, 8);
const w20s4 = newSegment("39x12", 30 * 1000, 8);
const w20s5 = newSegment("Recovery", 3 * 60 * 1000, 1);
const w20s6 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w20x = []; 
let w20y = [];
let w20z = [];

w20x.push(w20s1, w20s2, w20s1, w20s2, w20s3, w20s4);
for (let i = 0; i < w20x.length; i++) {
  w20y.push(w20x[i], w20s5);
}
for (let i = 1; i < w20y.length; i++) {
  w20z.push(w20y[w20y.length-(i+1)]);
}

const w20g = w20y.concat(w20z);
w20g.push(w20s6)

export const w20segs = warmUp2.concat(w20g);

// ====================================================================== //

// ========================= Intensity Slide ============================ //

// Segments
const w21s1 = newSegment("Max", 15 * 1000, 6);
const w21s2 = newSegment("Recovery", 45 * 1000, 1);
const w21s3 = newSegment("Recovery", 10 * 60 * 1000, 1);
const w21s4 = newSegment("HRZ/PZ6", 60 * 1000, 9);
const w21s5 = newSegment("Recovery", 2 * 60 * 1000, 1);
const w21s6 = newSegment("HRZ/PZ 4-5", 5 * 60 * 1000, 7);
const w21s7 = newSegment("Recovery", 6 * 60 * 1000, 1);
const w21s8 = newSegment("Cool Down", 10 * 60 * 1000, 1);

// Workout
let w21x = []; 

for (let i = 0; i < 7; i++) {
  w21x.push(w21s1, w21s2);
}
w21x.push(w21s1, w21s3);

for (let i = 0; i < 5; i++) {
  w21x.push(w21s4, w21s5);
}
w21x.push(w21s4, w21s3);

for (let i = 0; i < 2; i++) {
  w21x.push(w21s6, w21s7);
}
w21x.push(w21s6, w21s8);

export const w21segs = warmUp2.concat(w21x);

// ====================================================================== //


// =========================== Test Workout ============================= //

// Segments
const tstw1s1 = newSegment("Level 1", 10 * 1000, 1);
const tstw1s2 = newSegment("Level 2", 10 * 1000, 2);
const tstw1s3 = newSegment("Level 3", 10 * 1000, 3);
const tstw1s4 = newSegment("Level 4", 10 * 1000, 4);
const tstw1s5 = newSegment("Level 5", 10 * 1000, 5);
const tstw1s6 = newSegment("Level 6", 10 * 1000, 6);
const tstw1s7 = newSegment("Level 7", 10 * 1000, 7);
const tstw1s8 = newSegment("Level 8", 10 * 1000, 8);
const tstw1s9 = newSegment("Level 9", 10 * 1000, 9);

// Workout
export const tstw1segs = [tstw1s1, tstw1s2, tstw1s3, tstw1s4, tstw1s5, tstw1s6, tstw1s7,
  tstw1s8, tstw1s9, tstw1s1, tstw1s2, tstw1s3, tstw1s4, tstw1s5, tstw1s6, tstw1s7,
  tstw1s8, tstw1s9, tstw1s1, tstw1s2, tstw1s3, tstw1s4, tstw1s5, tstw1s6, tstw1s7,
  tstw1s8, tstw1s9, tstw1s1];

// ====================================================================== //

