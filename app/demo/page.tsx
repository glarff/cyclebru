"use client";

import BigTitle from "@/components/shared/bigtitle"
import MediumTitle from "@/components/shared/mediumtitle"
import Timer from "@/components/shared/timer";
import Tip from "@/components/shared/tip";
import UpcomingSegments from "@/components/shared/upcomingsegments";
import Link from "next/link"
import Balancer from "react-wrap-balancer";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
  } from "react";

export default function Page() {

    const [workoutTitle, setWorkoutTitle] = useState(w1.title);
    const [segmentTitle, setSegmentTitle] = useState(w1.segments[0].title);
    const [segmentTip, setSegmentTip] = useState(w1.segments[0].tip);
    const [panelColor, setPanelColor] = useState(getPanelColor(w1.segments[0].intensity));
    const [buttonText, setButtonText] = useState("Start");

    const totalTime = calculateTotalTime(w1);

    // Initial population of elements
    const x1 = getTimeDivisions(totalTime);
    const x2 = formatForTimer(x1.hrs, x1.mins, x1.secs);
    const x3 = getTimeDivisions(w1.segments[0].duration);
    const x4 = formatForTimer(0, x3.mins, x3.secs);
    
    // Main Title
    const [mainTimer, setMainTimer] = useState(x2);
    const [segmentTimer, setSegmentTimer] = useState(x4);

    w1.timeLeft = totalTime;
    let currentSegment = 0;
    let timeRemainingAfterCurrentSegment = totalTime - w1.segments[0].duration;

    // Click handling for start/pause/resume button
    const buttonClickAction = () => {

        if(w1.paused) {
            w1.paused = false;
            setButtonText("Pause");
            startTimer();
        }
        else {
            w1.paused = true;
            setButtonText("Resume");
        }
    }

    const startTimer = () => {

        // Calculate total time and time left after semgment 1
        w1.paused = false;
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
    
            const mainTimerHours = mainTimerDivs.hrs;
            const mainTimerMinutes = mainTimerDivs.mins;
            const mainTimerSeconds = mainTimerDivs.secs;
    
            const segTimerMinutes = segTimerDivs.mins;
            const segTimerSeconds = segTimerDivs.secs;
    
            // Display the main timer
            setMainTimer(formatForTimer(mainTimerHours, mainTimerMinutes,
                mainTimerSeconds));
    
            // Display segment timer - use00 if negative
            if (segTimerSeconds < 0) {
                setSegmentTimer(formatForTimer(0, 0, 0));
            }
    
            else {
                setSegmentTimer(formatForTimer(0, segTimerMinutes,
                    segTimerSeconds));
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
            //    updateUpcomingSegments(w1, totalTime, currentSegment);
            }
    
        }, 100);
    }

    return (
        <div className="z-10 w-full px-5 xl:px-0">

            <div className="flex flex-nowrap">

                <div>
                    <div className="flex flex-nowrap">
                        <MediumTitle text={workoutTitle} />
                        <button
                            className="border border-black bg-indigo-800 h-10 ml-8 mt-5 px-6 py-2 text-md text-white transition-colors hover:bg-white hover:text-black"
                            onClick={() => buttonClickAction()}
                            >
                            <p>{buttonText}</p>
                        </button>
                    </div>

                    <Timer 
                        title = "Time Remaining in Workout"
                        description = "Total time remaining in the workout session"
                        timerTxt = {mainTimer}
                        panelColor = {panelColor}
                    />

                    <MediumTitle text = {segmentTitle} />

                    <Timer 
                        title = "Time Remaining in Segment"
                        description = "Total time remaining in the current segment"
                        timerTxt = {segmentTimer}
                        panelColor = {panelColor}
                    />

                    <Tip text = {segmentTip} panelColor = {panelColor}/>
                </div>

            </div>  
        </div>
    )
}

/* ============================ UTIL FUNCTIONS ============================= */

/* ========================================================================= */

/* =========================== HELPER FUNCTIONS ============================ */

/*
   Get Panel Color
   Inputs: a value (1-5) indicating intensity
   Returns: Tailwind CSS classes to use for panel style
*/
const getPanelColor = (intensity:number) => {
    if (intensity < 2) { return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900"; } // 1 - dark green   
    else if (intensity < 3) { return "bg-gradient-to-br from-emerald-600 via-emerald-800 to-green-600"; } // 2 - lime green   
    else if (intensity < 4) { return "bg-gradient-to-br from-orange-900 via-amber-700 to-yellow-900"; }  // 3 - dark orange
    else if (intensity < 5) { return "bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900"; }  // 4 - salmon
    else { return "bg-gradient-to-br from-red-900 via-rose-700 to-red-900"; }  // 5 - firebrick
}

/*
   Get Time Divisions
   Inputs: a value in miliseconds
   Returns: an object with properties containing the hours, minutes,
      and seconds divisions of the provided value.
*/
const getTimeDivisions = (ms:number) => {
    return { 
      hrs: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((ms % (1000 * 60)) / 1000)
    };
}

/*
   Add Zero Padding
   Inputs: a number between 0 and 60
   Returns: a string with the number and a preding zero if less than 10
*/
const addZeroPadding = (num:number) => {
    if (num < 10) return "0" + num;
    return num;
}

/*
    Format For Timer
    Inputs: 3 numbers indicating hours, numbers, and minutes of a timer
    Returns: a string to be displayed on the timer
*/
const formatForTimer = (hrs:number, mins: number, secs:number) => {
  
    let timerStr = "";
  
    // Hours
    if (hrs > 0) {
        timerStr += hrs;
        timerStr += ":";
    }
  
    // Minutes
    if (hrs > 0) {
       timerStr += addZeroPadding(mins);
    }
    else {
       if (mins > 0) {
          timerStr+=mins;
       }
    }
  
    // Seconds
    timerStr += ":";
    timerStr += addZeroPadding(secs);
  
    return timerStr;
}

/*
    Calculate Total Time
    Input: a workout object
    Returns: a number indicating total time (in ms) of workout
*/
const calculateTotalTime = (wk:Workout) => {
 
    let ttl = 0;
 
    for ( let i = 0; i < wk.segments.length; i++) {
       ttl += wk.segments[i].duration;
    }
 
    return ttl;
}

/*
   Update Upcoming Segments
   Inputs: workout object, current segment
   Action: updates the upcoming segments graphic
*/

/*
const updateUpcomingSegments = (wk:Workout, ttl:string, seg:number) => {

    let segmentsRemaining = (wk.segments.length - seg - 1);
 
    // If there's more than 4 segments remaining, shift the elements 2-5 up
    if (wk.segments.length - seg >= 6) {

        setSegment1Window()
 
       for (let i = 0; i < 4; i++) {
 
          // Update Segment Window
          let text1 = "upcomingSegment" + (i+1) + "window";
          let text2 = "upcomingSegment" + (i+2) + "window";

          changeText(text1, getText(text2));
 
          // Update Segment Title
          text1 = text1.replace("window", "title");
          text2 = text2.replace("window", "title");
          changeText(text1, getText(text2));
 
          // Update Segment Intensity
          text1 = text1.replace("title", "intensity");
          text2 = text2.replace("title", "intensity");
          changeText(text1, getText(text2));
          changeColor(text1, getColor(text2));
 
       }
 
       // Calculate 5th segment
       elapsedDuration = 0;
       for (i = 0; i < seg + 5; i++) {
          elapsedDuration += wk.segments[i].duration;
       }
 
       nextSegmentWindow = "";
       nextSegmentWindow = calculateSegmentWindow(ttl, elapsedDuration, 
          wk.segments[seg + 5].duration);
 
       // Update 5th segment components
       text1 = "upcomingSegment5"
       changeText(text1 + "window", nextSegmentWindow);
       changeText(text1 + "title", wk.segments[seg + 5].title);
       changeText(text1 + "intensity", wk.segments[seg + 5].intensity);
       changeColor(text1 + "intensity", 
          getColorByIntensity(wk.segments[seg + 5].intensity));
       
    }
 
    // if <5 segments remaining, blank out the last one and shift up
    else {  
 
       for (i = 0; i < 4; i++) {
 
          changeText("upcomingSegment" + (i+1) + "window", 
             getText("upcomingSegment" + (i+2) + "window"));
 
          changeText("upcomingSegment" + (i+1) + "title", 
             getText("upcomingSegment" + (i+2) + "title"));
 
          changeText("upcomingSegment" + (i+1) + "intensity", 
             getText("upcomingSegment" + (i+2) + "intensity"));
 
          changeColor("upcomingSegment" + (i+1) + "intensity", 
             getColor("upcomingSegment" + (i+2) + "intensity"));
       }
 
       changeText("upcomingSegment5window", "");
       changeText("upcomingSegment5title", "");
       changeText("upcomingSegment5intensity", "");
       changeColor("upcomingSegment5intensity", "black");
       
    }
 
 }
 */

/* ========================================================================= */

// ============================== INTERFACES =============================== //

interface Segment {
    duration: number
    intensity: number
    tip: string
    title: string
}

interface Workout {
    segments: Segment[]
    timeLeft: number
    paused: boolean
}

/* ========================================================================= */

// ============================= Constructors ============================== //

const newSegment = (ttl:string, dur:number, int:number, tps:string) => {
    return { title: ttl, duration: dur, intensity: int, tip: tps }
} 

const newWorkout = (ttl:string, dsc:string, tps:string, segs:Segment[], tml:number, paus:boolean) => {
    return { title: ttl, description: dsc, tips: tps, segments: segs, timeLeft: tml, paused:paus};
}

// ========================================================================= //

/* ============================== Statc Data =============================== */

    // =========================== Wu-Ti warm up =========================== //

    const warmUp1s1 = newSegment("Get on the bike", 30000, 1, "Get on the bike " +
        "and get ready to go.");

    const warmUp1s2 = newSegment("Warm Up: Z1", 300000, 1, "Spend the first 5 " +
    "minutes of your session in Z1. Gradually increase cadence to 90+.");

    const warmUp1s3 = newSegment("Warm Up: Z2-Z3", 300000, 2, "Spend the next " +
    "5 minutes progressing through Z2. End at a low Z3.");

    const warmUp1s4 = newSegment("Warm Up: Max Spin / Easy Spin", 120000, 2,
    "Now increase the cadence to your maximum, hold for 5 seconds, " +
    "followed by 25 seconds easy spin. Repeat maximum cadence / easy " +
    "spin 3 more times.");

    const warmUp1s5 = newSegment("Warm Up: Easy Spin", 120000, 1, "Finish with " +
    " 2 minute easy spin before starting main content of session.");

    const warmUp1 = [warmUp1s1, warmUp1s2, warmUp1s3, warmUp1s4, warmUp1s5];

    // ===================================================================== //

    // ========================== Tempo Intervals ========================== //
     
    // Segments 
    const w2s1 = newSegment("HRZ 3", 600000, 3, "Maintain a smooth pedal stroke, especially during the HRZ3 effort.");

    const w2s2 = newSegment("Easy Spin", 300000, 1, "Don't stomp on the pedals when you get tired.");
 
    const w2s3 = newSegment("Easy Spin", 600000, 1, "Place the tempo effors evenly and avoid major fluctuations in heart rate.");
 
     // Workout
     const w1 = newWorkout("Tempo Intervals", "Tempo Intervals Description",
         "w2 Tip 1\nw2 Tip 2\nw2 Tip 3", warmUp1.concat([w2s1, w2s2, w2s1, w2s2,
             w2s1, w2s3]), 0, true);

    // ===================================================================== //
