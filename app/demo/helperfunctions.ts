/* =========================== HELPER FUNCTIONS ============================ */

/*
   Get Panel Color
   Inputs: a value (1-9) indicating intensity
   Returns: Tailwind CSS classes to use for panel style
*/
export const getTextColor = (intensity: number) => {
  if (intensity < 2) {
    return "text-emerald-300";
  } 
  else if (intensity < 3) {
    return "text-green-300";
  } 
  else if (intensity < 4) {
    return "text-lime-200";
  } 
  else if (intensity < 5) {
    return "text-yellow-200";
  } 
  else if (intensity < 6) {
    return "text-amber-300";
  } 
  else if (intensity < 7) {
    return "text-orange-400";
  } 
  else if (intensity < 8) {
    return "text-red-400";
  } 
  else if (intensity < 9) {
    return "text-rose-400";
  } 
  else {
    return "text-rose-500";
  } 
}

export const getBorderColor = (intensity: number) => {
  if (intensity < 2) {
    return "border-emerald-300";
  } 
  else if (intensity < 3) {
    return "border-green-300";
  } 
  else if (intensity < 4) {
    return "border-lime-200";
  } 
  else if (intensity < 5) {
    return "border-yellow-200";
  } 
  else if (intensity < 6) {
    return "border-amber-300";
  } 
  else if (intensity < 7) {
    return "border-orange-400";
  } 
  else if (intensity < 8) {
    return "border-red-400";
  } 
  else if (intensity < 9) {
    return "border-rose-400";
  } 
  else {
    return "border-rose-500";
  }
}

/*
     Get Time Divisions
     Inputs: a value in miliseconds
     Returns: an object with properties containing the hours, minutes,
        and seconds divisions of the provided value.
  */
export const getTimeDivisions = (ms: number) => {
  return {
    hrs: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((ms % (1000 * 60)) / 1000),
  };
};

/*
     Add Zero Padding
     Inputs: a number between 0 and 60
     Returns: a string with the number and a preding zero if less than 10
  */
const addZeroPadding = (num: number) => {
  if (num < 10) return "0" + num;
  return num;
};

/*
      Format For Timer
      Inputs: 3 numbers indicating hours, numbers, and minutes of a timer
      Returns: a string to be displayed on the timer
  */
export const formatForTimer = (hrs: number, mins: number, secs: number) => {
  let timerStr = "";

  // Hours
  if (hrs > 0) {
    timerStr += hrs;
    timerStr += ":";
  }

  // Minutes
  if (hrs > 0) {
    timerStr += addZeroPadding(mins);
  } else {
    if (mins > 0) {
      timerStr += mins;
    }
  }

  // Seconds
  timerStr += ":";
  timerStr += addZeroPadding(secs);

  return timerStr;
};

/*
      Calculate Total Time
      Input: a workout object
      Returns: a number indicating total time (in ms) of workout
  */
export const calculateTotalTime = (wk: Workout) => {
  let ttl = 0;

  for (let i = 0; i < wk.segments.length; i++) {
    ttl += wk.segments[i].duration;
  }

  return ttl;
};

/*
     Calculate Next Segment Times
     Inputs: Total time, start time of segment, duration of segment 
     Returns: An object containing the hrs, mins, and secs 
        broken up into properties for the start and end times of the
        provided segment.
  */
const calculateNextSegmentTimes = (ttl: number, strt: number, dur: number) => {
  const strtDivs = getTimeDivisions(ttl - strt);
  const endDivs = getTimeDivisions(ttl - (strt + dur));

  return {
    hrs1: strtDivs.hrs,
    mins1: strtDivs.mins,
    secs1: strtDivs.secs,
    hrs2: endDivs.hrs,
    mins2: endDivs.mins,
    secs2: endDivs.secs,
  };
};

/*
     Calculate Next Segment Window
     Inputs: Total time of workout, elapsedDuration, and duration of the segment 
     Returns: A formatted string showing the timing of the segment window
  */
export const calculateSegmentWindow = (
  ttl: number,
  strt: number,
  dur: number,
) => {
  const win = calculateNextSegmentTimes(ttl, strt, dur);
  let segWin = "";

  // Window Start Time
  if (win.hrs1 > 0) {
    segWin += win.hrs1;
    segWin += ":";
    segWin += addZeroPadding(win.mins1);
  } else {
    segWin += win.mins1;
  }

  segWin += ":";
  segWin += addZeroPadding(win.secs1);

  segWin += " - ";

  // Window End Time
  if (win.hrs2 > 0) {
    segWin += win.hrs2;
    segWin += ":";
    segWin += addZeroPadding(win.mins2);
  } else {
    segWin += win.mins2;
  }

  segWin += ":";
  segWin += addZeroPadding(win.secs2);

  return segWin;
};


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
/*
  Get Cycling Tip
  Inputs: nothing 
  Returns: a generic cycling form tip
*/
export const getCyclingTip = () => {
  let possibilities = [];
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
  possibilities.push(
    "Maintain a straight and neutral spine. Avoid excessive arching or rounding of your back.",
  );
  possibilities.push(
    "Keep a relaxed grip on the handlebars. Gripping too tightly can lead to fatigue and discomfort.",
  );
  possibilities.push(
    "Relax your shoulders and keep them down. Tension in the shoulders can lead to discomfort and fatigue.",
  );
  possibilities.push(
    "Engage your core muscles to stabilize your body and support your lower back.",
  );
  possibilities.push(
    "Ensure that your knees are in line with your feet while pedaling. This helps prevent stress on the knees.",
  );
  possibilities.push(
    "Aim for a smooth and consistent pedaling cadence. Avoid mashing the pedals in a high gear, as this can strain your muscles.",
  );
  possibilities.push(
    "Keep your heels down, especially when applying force to the pedals. This engages more muscles and improves efficiency.",
  );
  possibilities.push(
    "Engage your hips by rocking them slightly side to side. This can help relieve pressure on your lower back.",
  );
  possibilities.push(
    "Ensure that the balls of your feet are over the pedal axles. This optimizes power transfer and reduces strain on your ankles.",
  );
  possibilities.push(
    "Periodically stand up on the pedals and stretch your legs to alleviate any stiffness.",
  );
  possibilities.push(
    "Focus on steady and controlled breathing. This helps oxygenate your muscles and improves endurance.",
  );
  possibilities.push(
    "Concentrate on pedaling in smooth, circular motions. Pay attention to both the downstroke and upstroke to engage different muscle groups.",
  );
  possibilities.push(
    "Periodically check your posture to ensure you're not slouching. Engage your core to maintain stability.",
  );

  return getRandomElement(possibilities);
}
/* ========================================================================= */

// ============================== INTERFACES =============================== //

interface WorkoutSegment {
  id: number;
  workoutId: number;
  name: string;
  duration: number;
  intensity: number;
}

interface Workout {
  name: string;
  segments: WorkoutSegment[];
  timeLeft: number;
  paused: boolean;
}

/* ========================================================================= */
