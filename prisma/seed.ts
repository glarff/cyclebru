import { PrismaClient } from '@prisma/client';
import { tstw1segs, w1segs, w2segs, w3segs, w4segs, w5segs, w6segs,
w8segs, w9segs, w10segs, w11segs, w12segs, w13segs, w14segs, w15segs,
w16segs, w17segs, w18segs, w19segs, w20segs, w21segs
} from "@/app/data/stockworkouts";

const prisma = new PrismaClient();

// Seed command: npx prisma db push --force-reset && npx prisma db seed

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
      name: "Under/Over With Surges",
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
      name: "Big Gear / Low Cadence",
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
      name: "Leg Speed",
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
      name: "Spin Out",
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

  const w13 = await prisma.workout.upsert({
    where: { workout_key: "WK13" },
    update: {},
    create: {
      workout_key: "WK13",
      name: "Pyramid Intervals 2",
      overview:
        "Efforts are 100% and cadence should be high at 100 rpm+. Select a gear/resistance that allows this without spinning out. Just keep your legs turning over for the active recoveries.",
      objective:
        "Develops sprint speed, speed endurance and your ability to recover from multiple hard efforts.",
      training_phase:
        "Going into your race season.",
        focus: {
          create: [
            {
              focus_text:
                "Don’t try and pace the efforts, just give them 100%.",
            },
            {
              focus_text:
                "Try to match your performance going up and down the pyramid.",
            },
            {
              focus_text:
                "For strength use a bigger gear and higher resistance. For speed, back it off and go for higher cadence.",
            },
          ],
        },
      segments: {
        create: w13segs,
      },
      difficulty: 2,
    },
  });

  const w14 = await prisma.workout.upsert({
    where: { workout_key: "WK14" },
    update: {},
    create: {
      workout_key: "WK14",
      name: "Russian Steps",
      overview:
        "All of the efforts are maximal, select a gear/resistance that means you don’t spin out. Just turn your legs over during the recoveries.",
      objective:
        "A classic workout for building sprint speed and power and tolerance to repeated hard efforts of varying length.",
      training_phase:
        "Going into the season or anytime you fancy a hard hour long blast to clear away the cobwebs.",
        focus: {
          create: [
            {
              focus_text:
                "Sprinting is about leg speed, so don’t make the gear/resistance too high.",
            },
            {
              focus_text:
                "Even though the effort is maximal, stay relaxed, don’t fight the bike and keep your upper body stable.",
            },
            {
              focus_text:
                "The 60-second effort can feel like and awful long time and you may have to pace it slightly. Start the minute just below maximum and ramp it up to finish strong.",
            },
          ],
        },
      segments: {
        create: w14segs,
      },
      difficulty: 2,
    },
  });

  const w15 = await prisma.workout.upsert({
    where: { workout_key: "WK15" },
    update: {},
    create: {
      workout_key: "WK15",
      name: "2 x 20-Min Warmup",
      overview:
        "The classic 20 min warmup performed twice as a light workout.",
      objective:
        "A warm-up for many other sessions but also a great standalone session, that can be down twice through, for recovery days.",
      training_phase:
        "Any time as a recovery session.",
        focus: { },
      segments: {
        create: w15segs,
      },
      difficulty: 4,
    },
  });

  const w16 = await prisma.workout.upsert({
    where: { workout_key: "WK16" },
    update: {},
    create: {
      workout_key: "WK16",
      name: "One Minute Intervals",
      overview:
        "The efforts should be maximal with a cadence of 95 rpm+ and a focussed acceleration of the first 20 seconds. Drop your gear/ resistance for the recoveries and just spin easy.",
      objective:
        "To develop top-end power. The longer recoveries relative to the efforts enable maximal recruitment of muscle.",
      training_phase:
        "Towards the end of the off-season.",
        focus: {
          create: [
            {
              focus_text:
                "Drive hard on the pedals in the first 20 seconds of the interval.",
            },
            {
              focus_text:
                "Expect to fade but don’t try to pace the effort.",
            },
            {
              focus_text:
                "Concentrate on a strong and stable body position.",
            },
          ],
        },
      segments: {
        create: w16segs,
      },
      difficulty: 3,
    },
  });

  const w17 = await prisma.workout.upsert({
    where: { workout_key: "WK17" },
    update: {},
    create: {
      workout_key: "WK17",
      name: "Under/Over",
      overview:
        "Cadences for both efforts should be above 90 rpm. Under efforts should be 90% of FTP/FTHR, over efforts should be 110% FTP/FTHR.",
      objective:
        "Four ten-minute blocks working above and below threshold provide an excellent stimulus for raising this key attribute to cycling performance.",
      training_phase:
        "Late off-season and pre-season once you have a decent amount of work at threshold under your belt.",
        focus: {
          create: [
            {
              focus_text:
                "Make sure you’ve tested for FTP/FTHR recently and have accurate training zones.",
            },
            {
              focus_text:
                "The shift in intensity is fairly subtle, maybe just a gear shift, don’t jump or slow up abruptly.",
            },
            {
              focus_text:
                "Keep your pedal stroke smooth and even.",
            },
          ],
        },
      segments: {
        create: w17segs,
      },
      difficulty: 3,
    },
  });

  const w18 = await prisma.workout.upsert({
    where: { workout_key: "WK18" },
    update: {},
    create: {
      workout_key: "WK18",
      name: "Sweet-Spot Intervals",
      overview:
        "Use a medium resistance/gear that allows you to maintain 90+ rpm during the efforts. Efforts should be in Sweet-Spot HRZ high 3 - low 4 / PZ 88-93% FTP. Just spin easy against minimal resistance for the recoveries.",
      objective:
        "An ideal session for less experienced riders who find the idea of a 2X20 minute session too daunting. The 25 minutes of work in the Sweet-Spot zone will provide a good training stimulus and the two longest efforts are completed early on when fresh.",
      training_phase:
        "Early off-season as a complement to base training and to develop your confidence and fitness for more demanding interval sessions.",
        focus: {
          create: [
            {
              focus_text:
                "Pace the efforts evenly aiming to finish each strongly. Start at the lower end of the zone and build through.",
            },
            {
              focus_text:
                "Maintain an even pedal stroke, don’t stamp on the pedals.",
            },
            {
              focus_text:
                "Hold your upper body still, don’t rock and keep your grip on your bars relaxed.",
            },
          ],
        },
      segments: {
        create: w18segs,
      },
      difficulty: 1,
    },
  });

  const w19 = await prisma.workout.upsert({
    where: { workout_key: "WK19" },
    update: {},
    create: {
      workout_key: "WK19",
      name: "VO2 Intervals",
      overview:
        "Hold a cadence of 95 rpm + for the efforts. The active recoveries should be easy spinning with very low resistance.  You are aiming for HRZ 5 but don’t try and push it up too fast. Build progressively through HRZ 3 and HRZ 4 during the first minute and then edge into HRZ 5 and hold it.",
      objective:
        "The sustained higher intensity efforts build your focus, are applicable to steep climbs and will boost your threshold.",
      training_phase:
        "As a progression on from tempo, sweet-spot and threshold efforts.",
        focus: {
          create: [
            {
              focus_text:
                "Concentrate on a strong but even pedal stroke, don’t let your technique slip when you get tired.",
            },
            {
              focus_text:
                "You will get a better feel for the effort required to hit HRZ 5, when you do, try to hit it a bit earlier.",
            },
            {
              focus_text:
                "If you struggle with the penultimate effort, go straight into the cool down.",
            },
          ],
        },
      segments: {
        create: w19segs,
      },
      difficulty: 3,
    },
  });

  const w20 = await prisma.workout.upsert({
    where: { workout_key: "WK20" },
    update: {},
    create: {
      workout_key: "WK20",
      name: "Geared Sprint",
      overview:
        "Repeat the (53X12) sprint and then work back down through the gears finishing with (39X21). Jump out of the saddle, sprint until you are on top of the gear and then sit down and maintain the speed so that the entire sprint effort lasts 30 seconds. Gearings are suggested, so adjust them accordingly to suit your ability and the bike’s set-up.",
      objective:
        "An excellent workout, that is especially suited to rollers, for developing sprint power, strength and leg speed. Sprinting is all about getting your legs turning over quickly so beginning and ending a sprint session working in a comparatively low gear will ensure you start and finish strong and fast.",
      training_phase:
        "This is a session for delivering that final bit of top end zip as you go into your racing season.",
        focus: {
          create: [
            {
              focus_text:
                "Get on top of the gear as quickly as possible and, especially in the lower gears, keep accelerating when seated.",
            },
            {
              focus_text:
                "Avoid bobbing in the saddle and excessive movement of the upper body.",
            },
            {
              focus_text:
                "End each rep when you are unable to sustain your maximal cadence. It’s about quality, not quantity.",
            },
          ],
        },
      segments: {
        create: w20segs,
      },
      difficulty: 2,
    },
  });

  const w21 = await prisma.workout.upsert({
    where: { workout_key: "WK21" },
    update: {},
    create: {
      workout_key: "WK21",
      name: "Geared Sprint",
      overview:
        "Adjust cadence and gearing relative to the length of efforts. Don’t spin out on the shorter ones and try to maintain a consistent 90 rpm+ on the longer ones.",
      objective:
        "A session that tests and develops a range of intensities. With the sprints and minute efforts in your legs, the three 5-minute efforts are superb for developing pacing when fatigued.",
      training_phase:
        "In the second half of the off-season and into the pre-season when you want to introduce some more intensity but still maintain volume.",
        focus: {
          create: [
            {
              focus_text:
                "Don’t hold back on the 15-second sprints, these should be flat out.",
            },
            {
              focus_text:
                "The first time you do this workout, pace the longer efforts fairly conservatively, note down distance covered, speed or average power and try to beat it the next time.",
            },
            {
              focus_text:
                "This is a tough session. Make sure you schedule in recovery time.",
            },
          ],
        },
      segments: {
        create: w21segs,
      },
      difficulty: 3,
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
