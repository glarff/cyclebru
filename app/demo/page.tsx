"use client";

import MediumTitle from "@/components/shared/mediumtitle";
import Timer from "@/components/shared/timer";
import Tip from "@/components/shared/tip";
import UpcomingSegments from "@/components/shared/upcomingsegments";
import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { w2 } from "@/app/demo/workouts/workouts"

import {
  getTextColor,
  getBorderColor,
  calculateTotalTime,
  getTimeDivisions,
  formatForTimer,
  calculateSegmentWindow,
  getCyclingTip,
} from "./helperfunctions";
import React from "react";

const w1: Workout = {
  name: "",
  segments: [],
  timeLeft: 0,
  paused: true,
  focus: []
};

let currentSegment = 0;
let timeRemainingAfterCurrentSegment = 0;
let totalTime = 0;

export default function Page() {

  // useState initialization
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [segmentTitle, setSegmentTitle] = useState("");
  const [segmentTip, setSegmentTip] = useState("");
  const [panelColor, setPanelColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [showPlayButton, setShowPlayButton] = useState("block");
  const [showPauseButton, setShowPauseButton] = useState("hidden");
  const [mainTimer, setMainTimer] = useState("");
  const [segmentTimer, setSegmentTimer] = useState("");

  let [segWin1Txt, setWin1Txt] = useState("");
  let [segWin2Txt, setWin2Txt] = useState("");
  let [segWin3Txt, setWin3Txt] = useState("");
  let [segWin4Txt, setWin4Txt] = useState("");
  let [segWin5Txt, setWin5Txt] = useState("");
  let [segWin1Intensity, setWin1Intensity] = useState(0);
  let [segWin2Intensity, setWin2Intensity] = useState(0);
  let [segWin3Intensity, setWin3Intensity] = useState(0);
  let [segWin4Intensity, setWin4Intensity] = useState(0);
  let [segWin5Intensity, setWin5Intensity] = useState(0);
  let [segWin1Window, setWin1Window] = useState("");
  let [segWin2Window, setWin2Window] = useState("");
  let [segWin3Window, setWin3Window] = useState("");
  let [segWin4Window, setWin4Window] = useState("");
  let [segWin5Window, setWin5Window] = useState("");

  // Page onLoad initialization logic
  useEffect(() => {
    
    // Use localStorage to retrieve the cached JSON string
    const storedWorkout = localStorage.getItem("selectedWorkout");

    // If cached string was found, initialize segments using the parsed JSON object
    // If no cached string was found, initialize using the stock demo workout
    if (storedWorkout) {
      let sw1: WorkoutProperties = JSON.parse(storedWorkout);
      w1.name = sw1.name;
      w1.segments = sw1.segments;
      w1.focus = sw1.focus;
    } else {
      w1.name = w2.name;
      w1.segments = w2.segments;
    }

    // Call initialization function
    initializeWorkoutStates();
  }, []);

  // Handles the initial page state initializtion
  const initializeWorkoutStates = () => {
    setWorkoutTitle(w1.name);
    setSegmentTitle(w1.segments[0].name);
    setSegmentTip(generateSegementTip(w1, 0));
    setPanelColor(getTextColor(w1.segments[0].intensity));
    setBorderColor(getBorderColor(w1.segments[0].intensity));

    totalTime = calculateTotalTime(w1);
    w1.timeLeft = totalTime;

    const x1 = getTimeDivisions(totalTime);
    const x2 = formatForTimer(x1.hrs, x1.mins, x1.secs);
    const x3 = getTimeDivisions(w1.segments[0].duration);
    const x4 = formatForTimer(0, x3.mins, x3.secs);

    setMainTimer(x2);
    setSegmentTimer(x4);

    timeRemainingAfterCurrentSegment = totalTime - w1.segments[0].duration;

    // Segment Window population
    setWin1Txt(w1.segments[1].name);
    setWin2Txt(w1.segments.length > 1 ? w1.segments[2].name : "");
    setWin3Txt(w1.segments.length > 2 ? w1.segments[3].name : "");
    setWin4Txt(w1.segments.length > 3 ? w1.segments[4].name : "");
    setWin5Txt(w1.segments.length > 4 ? w1.segments[5].name : "");

    setWin1Intensity(w1.segments[1].intensity);
    setWin2Intensity(w1.segments.length > 1 ? w1.segments[2].intensity : 1);
    setWin3Intensity(w1.segments.length > 2 ? w1.segments[3].intensity : 1);
    setWin4Intensity(w1.segments.length > 3 ? w1.segments[4].intensity : 1);
    setWin5Intensity(w1.segments.length > 4 ? w1.segments[5].intensity : 1);

    setWin1Window(
      calculateSegmentWindow(
        totalTime,
        w1.segments[0].duration,
        w1.segments[1].duration,
      ),
    );

    setWin2Window(
      w1.segments.length > 1
        ? calculateSegmentWindow(
            totalTime,
            w1.segments[0].duration + w1.segments[1].duration,
            w1.segments[2].duration,
          )
        : "",
    );

    setWin3Window(
      w1.segments.length > 2
        ? calculateSegmentWindow(
            totalTime,
            w1.segments[0].duration +
              w1.segments[1].duration +
              w1.segments[2].duration,
            w1.segments[3].duration,
          )
        : "",
    );

    setWin4Window(
      w1.segments.length > 3
        ? calculateSegmentWindow(
            totalTime,
            w1.segments[0].duration +
              w1.segments[1].duration +
              w1.segments[2].duration +
              w1.segments[3].duration,
            w1.segments[4].duration,
          )
        : "",
    );

    setWin5Window(
      w1.segments.length > 4
        ? calculateSegmentWindow(
            totalTime,
            w1.segments[0].duration +
              w1.segments[1].duration +
              w1.segments[2].duration +
              w1.segments[3].duration +
              w1.segments[4].duration,
            w1.segments[5].duration,
          )
        : "",
    );
  }

  // Click handling for start/pause/resume button
  const buttonClickAction = () => {
    if (w1.paused) {
      w1.paused = false;
      setShowPauseButton("block");
      setShowPlayButton("hidden");
      startTimer();
    } else {
      w1.paused = true;
      setShowPauseButton("hidden");
      setShowPlayButton("block");
    }
  };

  // Handles shifting segments in upcoming segments window
  const shiftUpcomingSegments = () => {
    segWin1Txt = segWin2Txt;
    segWin2Txt = segWin3Txt;
    segWin3Txt = segWin4Txt;
    segWin4Txt = segWin5Txt;

    setWin1Txt(segWin1Txt);
    setWin2Txt(segWin2Txt);
    setWin3Txt(segWin3Txt);
    setWin4Txt(segWin4Txt);

    segWin1Intensity = segWin2Intensity;
    segWin2Intensity = segWin3Intensity;
    segWin3Intensity = segWin4Intensity;
    segWin4Intensity = segWin5Intensity;

    setWin1Intensity(segWin1Intensity);
    setWin2Intensity(segWin2Intensity);
    setWin3Intensity(segWin3Intensity);
    setWin4Intensity(segWin4Intensity);

    segWin1Window = segWin2Window;
    segWin2Window = segWin3Window;
    segWin3Window = segWin4Window;
    segWin4Window = segWin5Window;

    setWin1Window(segWin1Window);
    setWin2Window(segWin2Window);
    setWin3Window(segWin3Window);
    setWin4Window(segWin4Window);
  };

  // Handles generation of segment tip
  const generateSegementTip = (wk: Workout, seg: number) => {
    // Display that Workout Focus tips on the first segments
    if (seg < wk.focus.length) {
      return wk.focus[seg].focus_text;
    }
    else {
      // Use a generic cycling tip after focus tips have been displayed
      return getCyclingTip();
    }
  }

  // Handles state updates upon reaching end of segment
  const updateUpcomingSegments = (wk: Workout, ttl: number, seg: number) => {
    // If there's more than 4 segments remaining, shift the elements 2-5 up
    if (wk.segments.length - seg >= 6) {
      shiftUpcomingSegments();

      // Calculate 5th segment
      let elapsedDuration = 0;
      for (let i = 0; i < seg + 5; i++) {
        elapsedDuration += wk.segments[i].duration;
      }

      let nextSegmentWindow = "";
      nextSegmentWindow = calculateSegmentWindow(
        ttl,
        elapsedDuration,
        wk.segments[seg + 5].duration,
      );

      segWin5Window = nextSegmentWindow;
      setWin5Window(segWin5Window);
      segWin5Txt = wk.segments[seg + 5].name;
      setWin5Txt(segWin5Txt);
      segWin5Intensity = wk.segments[seg + 5].intensity;
      setWin5Intensity(segWin5Intensity);
    }

    // if <5 segments remaining, blank out the last one and shift up
    else {
      shiftUpcomingSegments();
      segWin5Window = "";
      setWin5Window(segWin5Window);
      segWin5Txt = "";
      setWin5Txt(segWin5Txt);
      segWin5Intensity = 0;
      setWin5Intensity(segWin5Intensity);
    }
  };

  // Handles starting the timer
  const startTimer = () => {
    // Calculate total time and time left after semgment 1
    const currentTimeAsMs = Date.now();
    const adjustedTimeAsMs = currentTimeAsMs + w1.timeLeft;
    const finishTime = new Date(adjustedTimeAsMs);

    // Start loop - iterate every .1 seconds
    let x = setInterval(function () {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = finishTime.getTime() - now;
      const distance2 = distance - timeRemainingAfterCurrentSegment;

      const mainTimerDivs = getTimeDivisions(distance);
      const segTimerDivs = getTimeDivisions(distance2);

      // Display the main timer
      setMainTimer(
        formatForTimer(
          mainTimerDivs.hrs,
          mainTimerDivs.mins,
          mainTimerDivs.secs,
        ),
      );

      // Display segment timer - use00 if negative
      if (segTimerDivs.secs < 0) {
        setSegmentTimer(formatForTimer(0, 0, 0));
      } else {
        setSegmentTimer(
          formatForTimer(
            segTimerDivs.hrs,
            segTimerDivs.mins,
            segTimerDivs.secs,
          ),
        );
      }

      if (w1.paused) {
        clearInterval(x);

        // Save time left
        w1.timeLeft = distance;
      }

      // When reaching end of the timer
      if (distance < 0) {
        clearInterval(x);
        setMainTimer("Done!");
        setSegmentTimer("Done!");
      }

      // When rearching the end of a segment
      else if (distance2 < 0) {
        currentSegment++;

        // Recalculate time remaining after this segment
        timeRemainingAfterCurrentSegment = totalTime;

        for (let i = 0; i < currentSegment + 1; i++) {
          timeRemainingAfterCurrentSegment -= w1.segments[i].duration;
        }

        // Update the labels on the screen
        setSegmentTitle(w1.segments[currentSegment].name);
        setSegmentTip(generateSegementTip(w1, currentSegment));
        setPanelColor(getTextColor(w1.segments[currentSegment].intensity));
        setBorderColor(getBorderColor(w1.segments[currentSegment].intensity));

        // Update the next segments list
        updateUpcomingSegments(w1, totalTime, currentSegment);
      }
    }, 100);
  };

  return (
    <div className="md:content-center md:items-center md:justify-center md:align-middle">
      <div className={`relative max-w-7xl`}>
        <div className="md:flex">
          <div>
            <div className="text-center md:h-96 md:text-left">
              <MediumTitle text={segmentTitle} />
              <Timer timerTxt={segmentTimer} panelColor={panelColor} />
            </div>

            <div className="mb-20 mt-16 md:mb-2 md:mt-24">
              <div className="md:inline-flex md:flex-nowrap md:items-center md:divide-x md:align-middle">
                <div className="text-center md:w-96 md:text-left">
                  <MediumTitle text={workoutTitle} />
                </div>
                <div className="text-center align-middle md:inline-block md:w-96 md:text-left">
                  <Timer timerTxt={mainTimer} panelColor={panelColor} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative hidden opacity-80 md:block">
              <UpcomingSegments
                segwin1txt={segWin1Txt}
                segwin2txt={segWin2Txt}
                segwin3txt={segWin3Txt}
                segwin4txt={segWin4Txt}
                segwin5txt={segWin5Txt}
                segwin1intensity={segWin1Intensity}
                segwin2intensity={segWin2Intensity}
                segwin3intensity={segWin3Intensity}
                segwin4intensity={segWin4Intensity}
                segwin5intensity={segWin5Intensity}
                segwin1window={segWin1Window}
                segwin2window={segWin2Window}
                segwin3window={segWin3Window}
                segwin4window={segWin4Window}
                segwin5window={segWin5Window}
              />
            </div>
            <div className="relative opacity-80">
              <Tip text={segmentTip} panelColor={borderColor} />
            </div>
          </div>
        </div>

        <div className="absolute top-16 w-full text-center md:top-1/3">
          <button
            className="relative z-10 scale-50 px-4 py-4 text-xl text-stone-200 transition-colors hover:bg-white hover:text-black md:mb-52 md:scale-100 md:text-4xl"
            onClick={() => buttonClickAction()}
          >
            <Play className={`${showPlayButton}`} size={96} />
            <Pause className={`${showPauseButton}`} size={96} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================== INTERFACES =============================== //
interface Workout {
  name: string;
  segments: WorkoutSegment[];
  timeLeft: number;
  paused: boolean;
  focus: WorkoutFocus[];
}

interface WorkoutSegment {
  id: number;
  workoutId: number;
  name: string;
  duration: number;
  intensity: number;
}

interface WorkoutFocus {
  id: number;
  workoutId: number;
  focus_text: string;
}

interface WorkoutProperties {
  id: number;
  workout_key: string;
  name: string;
  overview: string;
  objective: string;
  training_phase: string;
  focus: WorkoutFocus[];
  segments: WorkoutSegment[];
}
/* ========================================================================= */
