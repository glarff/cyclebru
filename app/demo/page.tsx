"use client";

import MediumTitle from "@/components/shared/mediumtitle";
import Timer from "@/components/shared/timer";
import Tip from "@/components/shared/tip";
import UpcomingSegments from "@/components/shared/upcomingsegments";
import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { w1 } from "./workouts/workouts";
import {
  getPanelColor,
  calculateTotalTime,
  getTimeDivisions,
  formatForTimer,
  calculateSegmentWindow,
} from "./helperfunctions";
import React from 'react';
import SelectForm from '@/components/shared/selectform';

export default function Page() {
  const [workoutTitle, setWorkoutTitle] = useState(w1.title);
  const [segmentTitle, setSegmentTitle] = useState(w1.segments[0].title);
  const [segmentTip, setSegmentTip] = useState(w1.segments[0].tip);
  const [panelColor, setPanelColor] = useState(
    getPanelColor(w1.segments[0].intensity),
  );
  const [showPlayButton, setShowPlayButton] = useState("block");
  const [showPauseButton, setShowPauseButton] = useState("hidden");
  const [showMainWorkout, setShowMainWorkout] = useState("visible");
  const [showSelectForm, setShowSelectForm] = useState("hidden");
  const totalTime = calculateTotalTime(w1);

  const x1 = getTimeDivisions(totalTime);
  const x2 = formatForTimer(x1.hrs, x1.mins, x1.secs);
  const x3 = getTimeDivisions(w1.segments[0].duration);
  const x4 = formatForTimer(0, x3.mins, x3.secs);

  const emptyoProps = {};

  // Main Title
  const [mainTimer, setMainTimer] = useState(x2);
  const [segmentTimer, setSegmentTimer] = useState(x4);

  w1.timeLeft = totalTime;
  let currentSegment = 0;
  let timeRemainingAfterCurrentSegment = totalTime - w1.segments[0].duration;

  // Segment Window population
  let [segWin1Txt, setWin1Txt] = useState(w1.segments[1].title);
  let [segWin2Txt, setWin2Txt] = useState(
    w1.segments.length > 1 ? w1.segments[2].title : "",
  );
  let [segWin3Txt, setWin3Txt] = useState(
    w1.segments.length > 2 ? w1.segments[3].title : "",
  );
  let [segWin4Txt, setWin4Txt] = useState(
    w1.segments.length > 3 ? w1.segments[4].title : "",
  );
  let [segWin5Txt, setWin5Txt] = useState(
    w1.segments.length > 4 ? w1.segments[5].title : "",
  );

  let [segWin1Intensity, setWin1Intensity] = useState(w1.segments[1].intensity);
  let [segWin2Intensity, setWin2Intensity] = useState(
    w1.segments.length > 1 ? w1.segments[2].intensity : 1,
  );
  let [segWin3Intensity, setWin3Intensity] = useState(
    w1.segments.length > 2 ? w1.segments[3].intensity : 1,
  );
  let [segWin4Intensity, setWin4Intensity] = useState(
    w1.segments.length > 3 ? w1.segments[4].intensity : 1,
  );
  let [segWin5Intensity, setWin5Intensity] = useState(
    w1.segments.length > 4 ? w1.segments[5].intensity : 1,
  );

  // Initial population of next segments list
  let elapsedDuration = 0;

  // Use 5 if there are more than 5 segments, otherwise use the length
  let [segWin1Window, setWin1Window] = useState(
    calculateSegmentWindow(
      totalTime,
      w1.segments[0].duration,
      w1.segments[1].duration,
    ),
  );
  let [segWin2Window, setWin2Window] = useState(
    w1.segments.length > 1
      ? calculateSegmentWindow(
          totalTime,
          w1.segments[0].duration + w1.segments[1].duration,
          w1.segments[2].duration,
        )
      : "",
  );
  let [segWin3Window, setWin3Window] = useState(
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
  let [segWin4Window, setWin4Window] = useState(
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
  let [segWin5Window, setWin5Window] = useState(
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

  /*
        Update Upcoming Segments
        Inputs: workout object, current segment
        Action: updates the upcoming segments graphic
    */
  const updateUpcomingSegments = (wk: Workout, ttl: number, seg: number) => {
    // If there's more than 4 segments remaining, shift the elements 2-5 up
    if (wk.segments.length - seg >= 6) {
      shiftUpcomingSegments();

      // Calculate 5th segment
      elapsedDuration = 0;
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
      segWin5Txt = wk.segments[seg + 5].title;
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
        setSegmentTitle(w1.segments[currentSegment].title);
        setSegmentTip(w1.segments[currentSegment].tip);
        setPanelColor(getPanelColor(w1.segments[currentSegment].intensity));

        // Update the next segments list
        updateUpcomingSegments(w1, totalTime, currentSegment);
      }
    }, 100);
  };

  return (
    <div className ="content-center justify-center align-middle items-center">
      <div className={`${showSelectForm}`}>
        <div className="z-10 w-full px-5 xl:px-0 ">
          <div className="absolute">
            <SelectForm />
          </div>
        </div>
      </div>
      <div className={`${showMainWorkout} relative max-w-7xl`}>
        
        <div className="md:flex">
          <div> 
            <div className="md:h-96 md:text-left text-center">
              <MediumTitle text={segmentTitle} />
              <Timer timerTxt={segmentTimer} panelColor={panelColor} />
            </div>

            <div className="md:mt-24 mt-16 mb-20 md:mb-2">
              <div className="md:inline-flex md:flex-nowrap md:items-center md:divide-x md:align-middle">
                <div className="md:w-96 md:text-left text-center">
                  <MediumTitle text={workoutTitle} />
                </div>
                <div className="md:inline-block align-middle md:w-96 md:text-left text-center">
                  <Timer timerTxt={mainTimer} panelColor={panelColor} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative opacity-80">
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
              <Tip text={segmentTip} panelColor={panelColor} />
            </div>
          </div>

        </div>

        <div className="absolute w-full text-center top-20 md:top-1/3">
            <button
              className="z-10 md:mb-52 px-4 py-4 text-4xl text-stone-200 transition-colors hover:bg-white hover:text-black relative"
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
