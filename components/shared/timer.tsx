import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { NumberLiteralType } from "typescript";

export default function Timer({
  title,
  description,
  timerTxt,
  panelColor,
}: {
  title: string;
  description: string;
  timerTxt: string;
  panelColor: string;
}) {
  
  return (
    <div>
      <div className={`relative col-span-1 h-28 overflow-hidden rounded-xl border border-gray-200 ${panelColor} text-neutral-200 shadow-md`}>
        <div className="flex h-28 text-5xl items-center justify-center">{timerTxt}</div>
      </div>
      <div className="text-right text-lg py-2">{title}</div>
    </div>
  );
}

/* =========================== HELPER FUNCTIONS ============================ */

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
  Format For Timer 2
  Inputs: Total time, start time of segment, duration of segment 
  Returns: An object containing the hrs, mins, and secs 
     broken up into properties for the start and end times of the
     provided segment.
*/
/*
const formatForTimer2 = (ms:number) => {

  let timerStr = "";

  let divs = getTimeDivisions(ms);

  const tmrHrs = divs.hrs;
  const tmrMins = divs.mins;
  const tmrSecs = divs.secs;

  // Hours
  if (tmrHrs > 0) {
      timerStr += tmrHrs;
      timerStr += ":";
  }

  // Minutes
  if (tmrHrs > 0) {
     timerStr += addZeroPadding(tmrMins);
  }

  else {
     if (tmrMins > 0) {
        timerStr=tmrMins;
     }
  }

  // Seconds
  timerStr += ":";
  timerStr += addZeroPadding(tmrSecs);

  return timerStr;

}
*/

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
     
    const x = {
      hrs1: strtDivs.hrs,
      hrs2: endDivs.hrs,
      mins1: strtDivs.mins,
      mins2: endDivs.mins,
      secs1: strtDivs.secs,
      secs2: endDivs.secs,
    }

    return x;
  }

/*
  Calculate Next Segment Window
  Inputs: Total time of workout, elapsedDuration, and duration of the segment 
  Returns: A formatted string showing the timing of the segment window
*/
const calculateSegmentWindow = (ttl:number, strt:number, dur:number) => {

  var win = calculateNextSegmentTimes(ttl,strt,dur);

  const nextHours1 = win.hrs1;
  const nextMinutes1 = win.mins1;
  const nextSeconds1 = win.secs1;

  const nextHours2 = win.hrs2;
  const nextMinutes2 = win.mins2;
  const nextSeconds2 = win.secs2;

  let segWin = "";

  // Window Start Time
  if (nextHours1 > 0) {
     segWin += nextHours1;
     segWin += ":";
     segWin += addZeroPadding(nextMinutes1);
  }

  else {
     segWin += nextMinutes1;
  }

  segWin += ":";
  segWin += addZeroPadding(nextSeconds1)

  segWin += " - ";

  // Window End Time
  if (nextHours2 > 0) {
     segWin += nextHours2;
     segWin += ":";
     segWin += addZeroPadding(nextMinutes2);
  }

  else {
     segWin += nextMinutes2;
  }

  segWin += ":";
  segWin += addZeroPadding(nextSeconds2)

  return segWin;
}

/*
  Calculate Total Time
  Inputs: workout object
  Returns: the total duration of the workout
*/
/*
const calculateTotalTime(wk:object) {

  let ttl = 0;

  for (const i = 0; i < wk.segments.length; i++) {
     ttl += wk.segments[i].duration;
  }

  return ttl;
}
*/

/*
  Update Upcoming Segments
  Inputs: workout object, current segment
  Action: updates the upcoming segments graphic
*/
/*
function updateUpcomingSegments(wk, ttl, seg) {

  segmentsRemaining = (wk.segments.length - seg - 1);

  // If there's more than 4 segments remaining, shift the elements 2-5 up
  if (wk.segments.length - seg >= 6) {

     for (i = 0; i < 4; i++) {

        // Update Segment Window
        text1 = "upcomingSegment" + (i+1) + "window";
        text2 = "upcomingSegment" + (i+2) + "window";
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