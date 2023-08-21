"use client";

import BigTitle from "@/components/shared/bigtitle"
import MediumTitle from "@/components/shared/mediumtitle"
import Timer from "@/components/shared/timer";
import Tip from "@/components/shared/tip";
import UpcomingSegments from "@/components/shared/upcomingsegments";
import Link from "next/link"
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
  } from "react";

  import { Pause, Play } from "lucide-react";

export default function Page() {

    const [workoutTitle, setWorkoutTitle] = useState(w1.title);
    const [segmentTitle, setSegmentTitle] = useState(w1.segments[0].title);
    const [segmentTip, setSegmentTip] = useState(w1.segments[0].tip);
    const [panelColor, setPanelColor] = useState(getPanelColor(w1.segments[0].intensity));
    const [showPlayButton, setShowPlayButton] = useState("block");
    const [showPauseButton, setShowPauseButton] = useState("hidden");

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

    // Segment Window population
    const [segWin1Txt, setWin1Txt] = useState(w1.segments[1].title);
    const [segWin2Txt, setWin2Txt] = useState(w1.segments.length > 1 ? w1.segments[2].title : "");
    const [segWin3Txt, setWin3Txt] = useState(w1.segments.length > 2 ? w1.segments[3].title : "");
    const [segWin4Txt, setWin4Txt] = useState(w1.segments.length > 3 ? w1.segments[4].title : "");
    const [segWin5Txt, setWin5Txt] = useState(w1.segments.length > 4 ? w1.segments[5].title : "");

    const [segWin1Intensity, setWin1Intensity] = useState(w1.segments[1].intensity);
    const [segWin2Intensity, setWin2Intensity] = useState(w1.segments.length > 1 ? w1.segments[2].intensity : 1);
    const [segWin3Intensity, setWin3Intensity] = useState(w1.segments.length > 2 ? w1.segments[3].intensity : 1);
    const [segWin4Intensity, setWin4Intensity] = useState(w1.segments.length > 3 ? w1.segments[4].intensity : 1);
    const [segWin5Intensity, setWin5Intensity] = useState(w1.segments.length > 4 ? w1.segments[5].intensity : 1);

    // Initial population of next segments list
    let elapsedDuration = 0;

    // Use 5 if there are more than 5 segments, otherwise use the length
    const [segWin1Window, setWin1Window] = useState(
        calculateSegmentWindow(
            totalTime, 
            w1.segments[0].duration, 
            w1.segments[1].duration
        ));
    const [segWin2Window, setWin2Window] = useState(w1.segments.length > 1 ?
        calculateSegmentWindow(
            totalTime, 
            w1.segments[0].duration + w1.segments[1].duration, 
            w1.segments[2].duration
        ) :"");
    const [segWin3Window, setWin3Window] = useState(w1.segments.length > 2 ?
        calculateSegmentWindow(
            totalTime, 
            w1.segments[0].duration + w1.segments[1].duration + w1.segments[2].duration, 
            w1.segments[3].duration
        ) :"");
    const [segWin4Window, setWin4Window] = useState(w1.segments.length > 3 ?
        calculateSegmentWindow(
            totalTime, 
            w1.segments[0].duration + w1.segments[1].duration + w1.segments[2].duration + w1.segments[3].duration,
            w1.segments[4].duration
        ) :"");
    const [segWin5Window, setWin5Window] = useState(w1.segments.length > 4 ?
        calculateSegmentWindow(
            totalTime, 
            w1.segments[0].duration + w1.segments[1].duration + w1.segments[2].duration + w1.segments[3].duration + w1.segments[4].duration, 
            w1.segments[5].duration
    ) :"");
        
    // Click handling for start/pause/resume button
    const buttonClickAction = () => {

        if(w1.paused) {
            w1.paused = false;
            setShowPauseButton("block");
            setShowPlayButton("hidden");
            startTimer();
        }
        else {
            w1.paused = true;
            setShowPauseButton("hidden");
            setShowPlayButton("block");
        }
    }

    /*
        Update Upcoming Segments
        Inputs: workout object, current segment
        Action: updates the upcoming segments graphic
    */
    const updateUpcomingSegments = (wk:Workout, ttl:number, seg:number) => {
    
        // If there's more than 4 segments remaining, shift the elements 2-5 up
        if (wk.segments.length - seg >= 6) {
    
            setWin1Txt(segWin2Txt);
            setWin2Txt(segWin3Txt);
            setWin3Txt(segWin4Txt);
            setWin4Txt(segWin5Txt);
            setWin1Intensity(segWin2Intensity);
            setWin2Intensity(segWin3Intensity);
            setWin3Intensity(segWin4Intensity);
            setWin4Intensity(segWin5Intensity);
            setWin1Window(segWin2Window);
            setWin2Window(segWin3Window);
            setWin3Window(segWin4Window);
            setWin4Window(segWin5Window);
    
            // Calculate 5th segment
            elapsedDuration = 0;
            for (let i = 0; i < seg + 5; i++) {
                elapsedDuration += wk.segments[i].duration;
            }
        
            let nextSegmentWindow = "";
            nextSegmentWindow = calculateSegmentWindow(ttl, elapsedDuration, 
                wk.segments[seg + 5].duration);
        
            setWin5Window(nextSegmentWindow);
            setWin5Txt(wk.segments[seg + 5].title);
            setWin5Intensity(wk.segments[seg + 5].intensity);
        }
    
        // if <5 segments remaining, blank out the last one and shift up
        else {     
            setWin1Txt(segWin2Txt);
            setWin2Txt(segWin3Txt);
            setWin3Txt(segWin4Txt);
            setWin4Txt(segWin5Txt);
            setWin1Intensity(segWin2Intensity);
            setWin2Intensity(segWin3Intensity);
            setWin3Intensity(segWin4Intensity);
            setWin4Intensity(segWin5Intensity);
            setWin1Window(segWin2Window);
            setWin2Window(segWin3Window);
            setWin3Window(segWin4Window);
            setWin4Window(segWin5Window);
            setWin5Txt("");
            setWin5Intensity(0);
            setWin5Window("");
        }
    
    }

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
            setMainTimer(formatForTimer(mainTimerDivs.hrs, mainTimerDivs.mins, mainTimerDivs.secs));
    
            // Display segment timer - use00 if negative
            if (segTimerDivs.secs < 0) {
                setSegmentTimer(formatForTimer(0, 0, 0));
            } else {
                setSegmentTimer(formatForTimer(segTimerDivs.hrs, segTimerDivs.mins, segTimerDivs.secs));
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
    }

    return (
        <div>
            <div className="z-10 w-full px-5 xl:px-0 h-100vh">
                <div>
                    <div>
                        <div className="absolute">
                            <MediumTitle text = {segmentTitle} />
                            <Timer 
                                title = "Time Remaining in Segment"
                                description = "Total time remaining in the current segment"
                                timerTxt = {segmentTimer}
                                panelColor = {panelColor}
                            />
                        </div>
                        

                        <div className="absolute bottom-16">
                            <div className="flex flex-nowrap divide-x">
                                <MediumTitle text={workoutTitle} />
                                <Timer 
                                    title = "Time Remaining in Workout"
                                    description = "Total time remaining in the workout session"
                                    timerTxt = {mainTimer}
                                    panelColor = {panelColor}
                                />
                                
                            </div>

                        </div>


                    </div>

                    <div className="flex h-screen justify-center items-center align-middle">
                        <button
                            className="mb-52 px-4 py-4 text-4xl text-stone-200 transition-colors hover:bg-white hover:text-black z-10"
                            onClick={() => buttonClickAction()}
                            >
                            <Play className = {`${showPlayButton}`} size={96} />
                            <Pause className = {`${showPauseButton}`} size={96} />
                        </button>
                    </div>

                    <div className="absolute right-16 top-32 w-42 opacity-80">
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
                    <div className="absolute right-16 bottom-16 w-42 opacity-80">
                         <Tip text = {segmentTip} panelColor = {panelColor}/>
                    </div>
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
    if (intensity < 2) { return "transparent text-green-200"; } // 1 - dark green   
    else if (intensity < 3) { return "transparent text-lime-200"; } // 2 - lime green   
    else if (intensity < 4) { return "transparent text-orange-200"; }  // 3 - dark orange
    else if (intensity < 5) { return "transparent text-rose-200"; }  // 4 - salmon
    else { return "transparent text-red-200"; }  // 5 - firebrick
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
   Calculate Next Segment Times
   Inputs: Total time, start time of segment, duration of segment 
   Returns: An object containing the hrs, mins, and secs 
      broken up into properties for the start and end times of the
      provided segment.
*/
const calculateNextSegmentTimes = (ttl:number, strt:number, dur:number) => {

    const strtDivs = getTimeDivisions(ttl - strt);
    const endDivs = getTimeDivisions(ttl - (strt + dur));

    return {
        hrs1: strtDivs.hrs,
        mins1: strtDivs.mins,
        secs1: strtDivs.secs,
        hrs2: endDivs.hrs,
        mins2: endDivs.mins,
        secs2: endDivs.secs
     };
 }

/*
   Calculate Next Segment Window
   Inputs: Total time of workout, elapsedDuration, and duration of the segment 
   Returns: A formatted string showing the timing of the segment window
*/
const calculateSegmentWindow = (ttl:number, strt:number, dur:number) => {

    const win = calculateNextSegmentTimes(ttl,strt,dur);
    let segWin = "";
 
    // Window Start Time
    if (win.hrs1 > 0) {
       segWin += win.hrs1;
       segWin += ":";
       segWin += addZeroPadding(win.mins1);
    }
 
    else {
       segWin += win.mins1;
    }
 
    segWin += ":";
    segWin += addZeroPadding(win.secs1)
 
    segWin += " - ";
 
    // Window End Time
    if (win.hrs2 > 0) {
       segWin += win.hrs2;
       segWin += ":";
       segWin += addZeroPadding(win.mins2);
    }
 
    else {
       segWin += win.mins2;
    }
 
    segWin += ":";
    segWin += addZeroPadding(win.secs2)
 
    return segWin;
 }
 

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

/* ============================== Static Data =============================== */

// ======================== Random Tip Generation ========================== //

const getRandomElement = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)]

const getTipByType = (typ:string) => {

    let possibilities = [];

    if (typ == "Biking") {

        possibilities.push("Think about pedaling as if tracing a square.  Push forward along the top, down the frontside, scrape the bottom, then pull back up the backside.");
        possibilities.push("Avoid side to side movement in the knees by keeping core tight - no Gumby riding.");
        possibilities.push("Dont let your pelvis slouch. Rotate the hips forward and push the butt back, similar to plank.");
        possibilities.push("Keep the grip on the bars relaxed.  No white knuckles!  Change grips often if needed.");
        possibilities.push("Pay attention!  Are all parts of your form good?  Let go of unneeded thoughts and focus on finishing the effort.");
        possibilities.push("Get on the pedals early - start pushing forward before 12 oclock position.  Feet flat or toes slightly pointed up.");
        possibilities.push("Keep your head up, relax your elbows, shoulders, and hands slightly.");

        return getRandomElement(possibilities);
    }

    else if (typ == "Productivity") {

        possibilities.push("Focus on one goal at a time.  You have all this time to do this one task!");
        possibilities.push("If you get distracted by something, note down to do it later, rather than doing it now.");
        possibilities.push("Take short breaks if needed to clear your mind and rest, but dont start something else.");
        possibilities.push("Before starting something new, quickly think about what the most effecient way to execute it is, then go. Dont overthink it.");
        possibilities.push("Finish your task completely.  If theres time left, take a quick break and relax before the next segment.");

        return getRandomElement(possibilities);
    }

    else if (typ == "FoamRoll") {

        possibilities.push("Move up and down the roll for five to ten reps, holding at the end of each move for a few seconds, then switch sides and repeat.");
        possibilities.push("When you hit a tight spot that is painful or uncomfortable, HOLD on that spot for 30-45 seconds. You should feel the tension release slowly");
        possibilities.push("Make sure to keep breathing, even when its painful. Holding your breath wont allow the muscles to release and relax.");
        possibilities.push("RELAX the muscle as best you can. If you are flexing or tensing the muscle group you are trying to roll out, you wont feel the trigger points you need to release");

        return getRandomElement(possibilities);
    }

}

 // ========================== 20 min warm up =========================== //

const warmUp2s2 = newSegment("90 RPM", 300000, 1, getTipByType("Biking"));

const warmUp2s3 = newSegment("95 RPM", 120000, 1, getTipByType("Biking"));

const warmUp2s4 = newSegment("100 RPM", 120000, 2, getTipByType("Biking"));

const warmUp2s5 = newSegment("105 RPM", 120000, 2, getTipByType("Biking"));

const warmUp2s6 = newSegment("110 RPM", 90000, 3, getTipByType("Biking"));

const warmUp2s7 = newSegment("120-130 RPM", 30000, 4, getTipByType("Biking"));

const warmUp2s8 = newSegment("90 RPM", 120000, 1, getTipByType("Biking"));

const warmUp2s9 = newSegment("MAX", 6000, 5, getTipByType("Biking"));

const warmUp2s10 = newSegment("90 RPM", 60000, 1, getTipByType("Biking"));

const warmUp2s11 = newSegment("90 RPM", 162000, 1, getTipByType("Biking"));

const warmUp2 = [warmUp2s2, warmUp2s3, warmUp2s4, warmUp2s5,
 warmUp2s6, warmUp2s7, warmUp2s8, warmUp2s9, warmUp2s10, warmUp2s9,
 warmUp2s10, warmUp2s9, warmUp2s11];

// ===================================================================== //

const PRE1101 = newSegment("Threshold", 1 * 60 * 1000, 4, getTipByType("Biking"));
const PRE1101b = newSegment("Recovery", 1 * 60 * 1000, 1, getTipByType("Biking"));
const PRE1102 = newSegment("Threshold", 2 * 60 * 1000, 4, getTipByType("Biking"));
const PRE1102b = newSegment("Recovery", 2 * 60 * 1000, 1, getTipByType("Biking"));
const PRE1103 = newSegment("Threshold", 3 * 60 * 1000, 4, getTipByType("Biking"));
const PRE1103b = newSegment("Recovery", 3 * 60 * 1000, 1, getTipByType("Biking"));
const PRE1104 = newSegment("Threshold", 4 * 60 * 1000, 4, getTipByType("Biking"));
const PRE1104b = newSegment("Recovery", 4 * 60 * 1000, 1, getTipByType("Biking"));
const PRE1105 = newSegment("Threshold", 5 * 60 * 1000, 4, getTipByType("Biking"));
const PRE1106 = newSegment("Cool Down", 10 * 60 * 1000, 1, getTipByType("Productivity"));


const w1 = newWorkout("Pyramid Intervals 1", "Description", "tips",
    warmUp2.concat([PRE1101, PRE1101b, PRE1102, PRE1102b, PRE1103, PRE1103b, 
        PRE1104, PRE1104b, PRE1105, PRE1104b, PRE1104, PRE1103b, PRE1103,
        PRE1102b, PRE1102, PRE1101b, PRE1101, PRE1106]), 0, true);
