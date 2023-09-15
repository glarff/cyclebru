/* =========================== HELPER FUNCTIONS ============================ */

/*
   Get Panel Color
   Inputs: a value (1-5) indicating intensity
   Returns: Tailwind CSS classes to use for panel style
*/
export function getPanelColor(intensity: number) {
  if (intensity < 2) {
    return "transparent text-green-200";
  } // 1 - dark green
  else if (intensity < 3) {
    return "transparent text-lime-200";
  } // 2 - lime green
  else if (intensity < 4) {
    return "transparent text-orange-200";
  } // 3 - dark orange
  else if (intensity < 5) {
    return "transparent text-rose-200";
  } // 4 - salmon
  else {
    return "transparent text-red-400";
  } // 5 - firebrick
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

/* ========================================================================= */

// ============================== INTERFACES =============================== //

interface Segment {
  duration: number;
  intensity: number;
  tip: string;
  title: string;
}

interface Workout {
  segments: Segment[];
  timeLeft: number;
  paused: boolean;
}

/* ========================================================================= */