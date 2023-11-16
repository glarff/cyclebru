import { PrismaClient } from '@prisma/client';
import { tstw1segs, w1segs, w2segs, w3segs, w4segs, w5segs, w6segs,
w8segs, w9segs, w10segs, w11segs, w12segs } from "@/app/data/stockworkouts";

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
      difficulty: 1,
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
      difficulty: 1,
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
      difficulty: 1,
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
      difficulty: 1,
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
      difficulty: 1,
    },
  });

  const w6 = await prisma.workout.upsert({
    where: { workout_key: "WK06" },
    update: {},
    create: {
      workout_key: "WK06",
      name: "20/40s",
      overview:
        "For the 20-second efforts cadence should be 95 rpm+ and, if using power, 120%+ of FTP. For heart-rate users, it’s a sustained sprint. For the 40-seconds recoveries and the longer recovery blocks, just spin easy",
      objective:
        "Develops your ability to sprint and recover from multiple hard efforts. This is important for all types of cycle sport, but is especially relevant to circuit racing, cyclo-cross and bunch races on the track.",
      training_phase:
        "In the final build up to competition.",
      focus: {
        create: [
          {
            focus_text:
              "Keep a firm grip on the handlebars.",
          },
          {
            focus_text:
              "Tighten core muscles and pull elbows back towards belly.",
          },
          {
            focus_text:
              "If you start to bob in the saddle, slow down your pedalling cadence and concentrate on engaging your abdominal muscles to stabilise your hips.",
          },
        ],
      },
      segments: {
        create: w6segs,
      },
      difficulty: 2,
    },
  });

  const w8 = await prisma.workout.upsert({
    where: { workout_key: "WK08" },
    update: {},
    create: {
      workout_key: "WK08",
      name: "Ramped Intervals",
      overview:
        "Hold 95rpm+ and HRZ/PZ 5 for the efforts, building the cadence forthe maximal last minute surge. Active recovery should be at 90rpmwith very low resistance.",
      objective:
        "Working on your ability to hold a sustained hard effort and then,when already tired, lift it again for a big finish.",
      training_phase:
        "During the late off-season and pre-season.",
      focus: {
        create: [
          {
            focus_text:
              "If using heart rate, don’t try and force it up too quickly or you’ll go off too hard. Build through HRZ 3/4 progressively.",
          },
          {
            focus_text:
              "Keep your pedal stroke strong but even. Avoid mashing when it starts getting tough.",
          },
          {
            focus_text:
              "This is a tough session. Ensure you’re well rested and up for it.",
          },
        ],
      },
      segments: {
        create: w8segs,
      },
      difficulty: 3,
    },
  });

  const w9 = await prisma.workout.upsert({
    where: { workout_key: "WK09" },
    update: {},
    create: {
      workout_key: "WK09",
      name: "Under/Over with surges",
      overview:
        "Cadences for sweet-spot and zone 5 = 90rpm, sprint = maximal. Zones: Under = HRZ/PZ “sweetspot” mid Z3-mid Z4, over = HRZ/PZ 5.",
      objective:
        "Teaches recovery while still working hard and to kick when already riding at high intensity.",
      training_phase:
        "Pre-season.",
      focus: {
        create: [
          {
            focus_text:
              "Shift up a gear or two but hold the same cadence to make the shift from under to over.",
          },
          {
            focus_text:
              "Maintain your gear for the sprint but aim to spin out your legs.",
          },
          {
            focus_text:
              "Don’t ease off too much after the sprints, get straight back into your sweet-spot rhythm.",
          },
        ],
      },
      segments: {
        create: w9segs,
      },
      difficulty: 3,
    },
  });

  const w10 = await prisma.workout.upsert({
    where: { workout_key: "WK10" },
    update: {},
    create: {
      workout_key: "WK10",
      name: "Big gear/low cadence",
      overview:
        "Don’t ease off too much after the sprints, get straight back into your sweet-spot rhythm. All efforts are seated, select a gear/resistance that just allowsyou to maintain a cadence of 50-60 rpm. You will probably observe HRZ/PZ 4/5 but this isn’t the focus of the session. For recoveries, pedal easy with a light resistance.",
      objective:
        "An on the bike strength session.",
      training_phase:
        "In the early stages of your off-season training.",
      focus: {
        create: [
          {
            focus_text:
              "This is a tough session, start off with just four five-minute reps and build up to the full six.",
          },
          {
            focus_text:
              "Even though the resistance is high, try to keep your pedal stroke smooth and even, don’t stamp on the pedals.",
          },
          {
            focus_text:
              "Keep your upper body relaxed, don’t wrestle the bike.",
          },
        ],
      },
      segments: {
        create: w10segs,
      },
      difficulty: 3,
    },
  });

  const w11 = await prisma.workout.upsert({
    where: { workout_key: "WK11" },
    update: {},
    create: {
      workout_key: "WK11",
      name: "Leg speed",
      overview:
        "Keep resistance and gearing low and just focus on the cadence targets.",
      objective:
        "Great for developing leg speed and as a recovery session.",
      training_phase:
        "Anytime when you want to put some zip in your legs.",
      focus: { },
      segments: {
        create: w11segs,
      },
      difficulty: 4,
    },
  });

  const w12 = await prisma.workout.upsert({
    where: { workout_key: "WK12" },
    update: {},
    create: {
      workout_key: "WK12",
      name: "Spin out",
      overview:
        "Keep resistance and gearing low throughout the entire workout, you should be hitting 130 rpm+ on the spin outs.",
      objective:
        "To boost leg speed and give you a bit of a shake out without incurring too much fatigue.",
      training_phase:
        "Anytime throughout the year when your legs feel as though they may need some zip. Perfect for during a taper if your legs start to feel a bit stale.",
        focus: {
          create: [
            {
              focus_text:
                "Keep your pedal stroke smooth and even.",
            },
            {
              focus_text:
                "Avoid swaying or bobbing with your upper body.",
            },
            {
              focus_text:
                "If you find yourself bobbing, back off the cadence slightly to regain control.",
            },
          ],
        },
      segments: {
        create: w12segs,
      },
      difficulty: 4,
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
      difficulty: 5,
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
