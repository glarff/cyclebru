import { PrismaClient } from '@prisma/client';
import { tstw1segs, w1segs, w2segs, w3segs, w4segs, w5segs } from "@/app/data/stockworkouts";

const prisma = new PrismaClient();

async function main() {
  const w1 = await prisma.workout.upsert({
    where: { workout_key: "WK01" },
    update: {},
    create: {
      workout_key: "WK01",
      name: "Tempo Intervals",
      overview:
        "Maintain a cadence of 90 rpm+ during the tempo efforts and look to ride low - mid HRZ 3 for the majority of each one. Just spin easily for the recoveries.",
      objective:
        "Developing your ability to ride at tempo and an introduction to interval training.",
      training_phase:
        "In the early stages of our Improvers Training Plan or as a light workout.",
      focus: {
        create: [
          {
            focus_text:
              "Keep your legs turning over during the recoveries and reduce your gear/resistance.",
          },
          {
            focus_text:
              "Maintain a smooth pedal stroke, especially during the HRZ 3 effort.",
          },
          {
            focus_text: "Don’t stomp on the pedals when you get tired.",
          },
          {
            focus_text:
              "Pace the tempo efforts evenly and avoid major fluctuations in heart rate.",
          },
        ],
      },
      segments: {
        create: w1segs,
      },
    },
  });

  const w2 = await prisma.workout.upsert({
    where: { workout_key: "WK02" },
    update: {},
    create: {
      workout_key: "WK02",
      name: "Zone Build",
      overview:
        "Aim to hit the heart rate zones described below. Build through the zone gradually and avoid sudden changes in effort, there will always be a time lag before your heart rate responds. Maintain a 90 rpm+ cadence throughout.",
      objective: "Developing a feel for your training zones.",
      training_phase:
        "In the early stages of our Improvers Training Plan or as a light workout.",
      focus: {
        create: [
          {
            focus_text:
              "Concentrate on a strong but even pedal stroke, don’t let your technique slip if you get tired.",
          },
          {
            focus_text:
              "Aim to hit the middle of the Zone midway through each effort and, if you feel good, push on a bit towards the top end.",
          },
          {
            focus_text:
              "Keep your cadence up during the Zone 1 blocks, back your gear and resistance right off to allow this.",
          },
        ],
      },
      segments: {
        create: w2segs,
      },
    },
  });

  const w3 = await prisma.workout.upsert({
    where: { workout_key: "WK03" },
    update: {},
    create: {
      workout_key: "WK03",
      name: "Pyramid Intervals 1",
      overview:
        "Efforts should be ridden in HRZ/PZ 4 and at 95 rpm+. Drop resistance and gearing and look to spin in HRZ/PZ 1 for the active recoveries.",
      objective:
        "A threshold boosting workout that is excellent for developing your ability to quickly find and maintain this key intensity.",
      training_phase: "Anytime, both in and out of season.",
      focus: {
        create: [
          {
            focus_text:
              "Having accurate and up to date training zones are key for this session so make sure you test for FTHR/FTP regularly.",
          },
          {
            focus_text:
              "Pace the efforts so there’s no drop off. Power, heart rate, speed or intensity should be consistent through the session.",
          },
          {
            focus_text:
              "If you’re training for a time trial, perform the efforts in race position.",
          },
        ],
      },
      segments: {
        create: w3segs,
      },
    },
  });

  const w4 = await prisma.workout.upsert({
    where: { workout_key: "WK04" },
    update: {},
    create: {
      workout_key: "WK04",
      name: "3 x 10 Minutes",
      overview:
        "Cadence 90 rpm + during the efforts and “Sweet-Spot” is HRZ/PZ high 3 - low 4. Allow both to drop to easy spinning during recovery.",
      objective:
        "A great stepping stone to the classic 2 x 20 minutes session.",
      training_phase:
        "Whenever you are looking to build up your ability to ride at “Sweet-Spot” and Threshold.",
      focus: {
        create: [
          {
            focus_text:
              "Pace the efforts as evenly as possible, don’t go off too hard and maintain a consistent cadence.",
          },
          {
            focus_text:
              "Try to hold a stable racing position without excessive movement of the upper body.",
          },
          {
            focus_text:
              "Make sure you have a bottle of water to hand as these are fairly long efforts.",
          },
          {
            focus_text:
              "As you get stronger and more confident with the session, try to ride predominately in HRZ/PZ 4.",
          },
        ],
      },
      segments: {
        create: w4segs,
      },
    },
  });

  const w5 = await prisma.workout.upsert({
    where: { workout_key: "WK05" },
    update: {},
    create: {
      workout_key: "WK05",
      name: "2 x 20 Minutes",
      overview:
        "Cadence should be 90 rpm + during the efforts but allow to drop during recovery. If aiming for “Sweet-spot”, work in HRZ/PZ high Zone 3 - mid Zone 4. If aiming for threshold, work as close to 100% FTHR/FTP as possible.",
      objective:
        "A classic indoor trainer session that is hard to beat for raising threshold and learning to stay focussed and pace long efforts at this key intensity.",
      training_phase:
        "Work through the session at “sweet-spot” intensity during the early off-season and then build up to completing it at FTP/FTHR as intensity goes up and volume comes down.",
      focus: {
        create: [
          {
            focus_text:
              "Pace the efforts as evenly as possible, don’t go off too hard and maintain a consistent cadence.",
          },
          {
            focus_text:
              "Try to hold a stable racing position without excessive movement of the upper body. If training for time trials, use your race position.",
          },
          {
            focus_text:
              "Make sure you have a bottle of water to hand as these are fairly long efforts.",
          },
        ],
      },
      segments: {
        create: w5segs,
      },
    },
  });

  const tstw1 = await prisma.workout.upsert({
    where: { workout_key: "TSTWK01" },
    update: {},
    create: {
      workout_key: "TSTWK01",
      name: "Test Workout",
      overview:
        "Cadence should be 90 rpm + during the efforts but allow to drop during recovery. If aiming for “Sweet-spot”, work in HRZ/PZ high Zone 3 - mid Zone 4. If aiming for threshold, work as close to 100% FTHR/FTP as possible.",
      objective:
        "A classic indoor trainer session that is hard to beat for raising threshold and learning to stay focussed and pace long efforts at this key intensity.",
      training_phase:
        "Work through the session at “sweet-spot” intensity during the early off-season and then build up to completing it at FTP/FTHR as intensity goes up and volume comes down.",
      focus: {
        create: [
          {
            focus_text:
              "Pace the efforts as evenly as possible, don’t go off too hard and maintain a consistent cadence.",
          },
          {
            focus_text:
              "Try to hold a stable racing position without excessive movement of the upper body. If training for time trials, use your race position.",
          },
          {
            focus_text:
              "Make sure you have a bottle of water to hand as these are fairly long efforts.",
          },
        ],
      },
      segments: {
        create: tstw1segs,
      },
    },
  });

  await prisma.user.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      name: "Glarffo",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
