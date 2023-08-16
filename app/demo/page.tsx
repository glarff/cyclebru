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

    const [mainTimer, setMainTimer] = useState("1:02:30");
    const [segmentTimer, setSegmentTimer] = useState(":30");
    const [segmentTitle, setSegmentTitle] = useState("Get on the bike");
    const [segmentTip, setSegmentTip] = useState("Get on the bike and get ready to go.");
    const [panelColor, setPanelColor] = useState(getPanelColor(1));

    const startTimer = () => {

        // Calculate total time and time left after semgment 1
        const totalTime = calculateTotalTime(w1);
        let timeRemainingAfterCurrentSegment = totalTime - w1.segments[0].duration;
        w1.timeLeft = totalTime;
    
        w1.paused = false;
        const currentTimeAsMs = Date.now();
        const adjustedTimeAsMs = currentTimeAsMs + totalTime;
        const finishTime = new Date(adjustedTimeAsMs);

        let currentSegment = 0;
    
        // Start loop - iterate every .1 seconds
        let x = setInterval(function () {
    
            // Get todays date and time
            const now = new Date().getTime();
    
            // Find the distance between now and the count down date
            const distance = finishTime.getTime() - now;
            const distance2 = distance - timeRemainingAfterCurrentSegment;
    
            const mainTimerDivs = getTimeDivisions(distance);
            const segTimerDivs = getTimeDivisions2(distance2);
    
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
    
            // Set component backgrounds based on intensity
            //if (currentSegment < w1.segments.length) {
            //    changeBorder(w1.segments[currentSegment].intensity);
            //}
    
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
                        <BigTitle text="Workout: Pyramid Intervals" />
                        <button
                            className="border border-black bg-indigo-800 h-10 ml-8 mt-5 px-6 py-2 text-md text-white transition-colors hover:bg-white hover:text-black"
                            onClick={() => startTimer()}
                            >
                            <p>Start</p>
                        </button>
                    </div>

                    <Timer 
                        title = "Time Remaining in Workout"
                        description = "Total time remaining in the workout session"
                        timerTxt = {mainTimer}
                        panelColor = {panelColor}
                    />

                    <MediumTitle text = {`Current Segment: ${segmentTitle}`} />

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

const getPanelColor = (intensity:number) => {

    if (intensity < 2) { return "bg-gradient-to-br from-green-900 via-emarald-700 to-teal-900"; } // 1 - dark green   
    else if (intensity < 3) { return "bg-gradient-to-br from-lime-900 via-lime-800 to-lime-900"; } // 2 - lime green   
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

    const divs = { 
      hrs: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((ms % (1000 * 60)) / 1000)
    };
  
    return divs;
  }
  
  const addZeroPadding = (num:number) => {
    if (num < 10) return "0" + num;
    return num;
  }
  
  /*
    Get Time Divisions 2
    Inputs: a value in miliseconds
    Returns: an object with properties containing the minutes and seconds 
       divisions of the provided value.
  */
  const getTimeDivisions2 = (ms:number) => {
  
    const divs = { 
      mins: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((ms % (1000 * 60)) / 1000)
    };
  
    return divs;
  }
  
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

    // ========================== 20 min warm up =========================== //
    const warmUp2s1 = newSegment("Get on the bike", 30000, 1, "Get on the bike " +
        "and get ready to go.");

    const warmUp2s2 = newSegment("90 RPM", 300000, 1, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s3 = newSegment("95 RPM", 120000, 1, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s4 = newSegment("100 RPM", 120000, 2, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s5 = newSegment("105 RPM", 120000, 2, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s6 = newSegment("110 RPM", 90000, 3, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s7 = newSegment("120-130 RPM", 30000, 4, "Smooth pedaling - " +
        "clear your mind and mentally prepare for the upcoming session.");

    const warmUp2s8 = newSegment("90 RPM", 120000, 1, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s9 = newSegment("MAX", 6000, 5, "Smooth pedaling - clear your " +
        "mind and mentally prepare for the upcoming session.");

    const warmUp2s10 = newSegment("90 RPM", 60000, 1, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2s11 = newSegment("90 RPM", 192000, 1, "Smooth pedaling - clear " +
        "your mind and mentally prepare for the upcoming session.");

    const warmUp2 = [warmUp2s1, warmUp2s2, warmUp2s3, warmUp2s4, warmUp2s5,
        warmUp2s6, warmUp2s7, warmUp2s8, warmUp2s9, warmUp2s10, warmUp2s9,
        warmUp2s10, warmUp2s9, warmUp2s11];

    // ===================================================================== //

    // ======================= Sweet-Spot Intervals ======================== //

    // Segments 
    const w3s1 = newSegment("Sweet-Spot", 300000, 4, "Maintain a smooth pedal " +
        "stroke. Don't stromp on the pedals when you get tired. Pace your " +
        "effort evenly and avoid major fluctuations in heart rate.");

    const w3s2 = newSegment("Recovery", 60000, 1, "Maintain a smooth pedal " +
        "stroke. Reduce resistance and keep your legs turning over.");

    const w3s3 = newSegment("Sweet-Spot", 180000, 4, "Maintain a smooth pedal " +
        "stroke. Don't stromp on the pedals when you get tired. Pace your " +
        "effort evenly and avoid major fluctuations in heart rate.");

    const w3s4 = newSegment("Cool Down", 600000, 1, "Maintain a smooth pedal " +
        "stroke. Reduce resistance and keep your legs turning over.");

    // Workout
    const w1 = newWorkout("Sweet-Spot Intervals", "Use a medium " +
        "resistance/gear that allows you to maintain 90+ rpm during the " +
        "efforts. Efforts should be in Sweet-Spot HRZ high 3 - low 4 / PZ " +
        "88-93% FTP. Just spin easy against minimal resistance for the " +
        "recoveries.", "Pace the efforts evenly aiming to finish each " +
        "strongly. Start at the lower end of the zone and build through. " +
        "Maintain an even pedal stroke, don’t stamp on the pedals. " +
        "Hold your upper body still, don’t rock and keep your grip on your " +
        "bars relaxed.", warmUp2.concat([w3s1, w3s2, w3s1, w3s2, w3s3, w3s2,
            w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s4]), 0, true);

    // ===================================================================== //

        // ======================= Testing ======================== //

    // Segments 
    const tsts1 = newSegment("Z1", 30000, 1, "Maintain a smooth pedal " +
        "stroke. Don't stromp on the pedals when you get tired. Pace your " +
        "effort evenly and avoid major fluctuations in heart rate.");

    const tsts2 = newSegment("Z2", 30000, 2, "Maintain a smooth pedal " +
        "stroke. Reduce resistance and keep your legs turning over.");

    const tsts3 = newSegment("Z3", 30000, 3, "Maintain a smooth pedal " +
        "stroke. Don't stromp on the pedals when you get tired. Pace your " +
        "effort evenly and avoid major fluctuations in heart rate.");

    const tst4 = newSegment("Z4", 30000, 4, "Maintain a smooth pedal " +
        "stroke. Reduce resistance and keep your legs turning over.");

    const tst5 = newSegment("Z5", 30000, 5, "Maintain a smooth pedal " +
        "stroke. Reduce resistance and keep your legs turning over.");

    // Workout
    const xw1 = newWorkout("Sweet-Spot Intervals", "Use a medium " +
        "resistance/gear that allows you to maintain 90+ rpm during the " +
        "efforts. Efforts should be in Sweet-Spot HRZ high 3 - low 4 / PZ " +
        "88-93% FTP. Just spin easy against minimal resistance for the " +
        "recoveries.", "Pace the efforts evenly aiming to finish each " +
        "strongly. Start at the lower end of the zone and build through. " +
        "Maintain an even pedal stroke, don’t stamp on the pedals. " +
        "Hold your upper body still, don’t rock and keep your grip on your " +
        "bars relaxed.", [tsts1, tsts2, tsts3, tst4, tst5, tsts1, tsts2, tsts3, tst4, tst5, tsts1, tsts2, tsts3, tst4, tst5, w3s2,
            w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s3, w3s2, w3s4], 0, true);

    // ===================================================================== //


const calculateTotalTime = (wk:Workout) => {
 
    let ttl = 0;
 
    for ( let i = 0; i < wk.segments.length; i++) {
       ttl += wk.segments[i].duration;
    }
 
    return ttl;
 }

 const execute = () => {



    // Set the date/time we're counting down to
    //const currentTimeAsMs = Date.now();
    //const adjustedTimeAsMs = currentTimeAsMs + totalTime;
    //const finishTime = new Date(adjustedTimeAsMs);

    //let currentSegment = 0;
    //let elapsedDuration = 0;

    // Shift down in upcoming segments
    //updateUpcomingSegments(w1, totalTime, 0);

    
    //startTimer();
}