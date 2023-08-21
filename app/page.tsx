import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Link from "next/link"

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/glarff/cyclebru",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-fuchsia-100 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em]
            text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Your Online Coach for Cycling Trainer Workouts</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-fuchsia-100 opacity-0 md:text-2xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Visual Aids for Trainer Rides, Custom Workout Creation, Training Plan Guidance, and more.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Try the Demo</p>
          </Link>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/glarff/cyclebru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-2">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Plan, Execute, Improve" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Plan, Execute, Improve",
    description:
      "Whether you're a new cyclist or a seasoned pro, CycluBru can provide you a new challenge to test your fitness in a fun and interactive experience.",
    large: true,
  },
  {
    title: "Build Custom Workouts",
    description:
      "CycleBru's custom workout generation UI allows you to add in your own favorite challenges.",
    demo: (
      <div className="grid grid-flow-col grid-rows-6 gap-x-8 p-10">
        <span className="font-mono font-semibold text-green-800">5min HRZ1</span>
        <span className="font-mono font-semibold text-lime-800">2min HRZ2</span>
        <span className="font-mono font-semibold text-amber-800">3min HRZ3</span>
        <span className="font-mono font-semibold text-fuchsia-800">4min HRZ4</span>
        <span className="font-mono font-semibold text-rose-800">30sec HRZ5</span>
        <span className="font-mono font-semibold text-green-800">5min HRZ1</span>
        <span className="font-mono font-semibold text-lime-800">2min HRZ2</span>
        <span className="font-mono font-semibold text-amber-800">3min HRZ3</span>
        <span className="font-mono font-semibold text-fuchsia-600">4min HRZ4</span>
        <span className="font-mono font-semibold text-rose-800">30sec HRZ5</span>
        <span className="font-mono font-semibold text-rose-900">30sec VO2MAX</span>
        <span className="font-mono font-semibold text-green-800">10min HRZ1</span>
      </div>
    ),
  },
  {
    title: "Track your Progress",
    description:
      "Sign up for an account to track your training progress. We'll update your progress when you complete a workout.",
    demo: <WebVitals />,
  },
  {
    title: "Train for an Event",
    description:
      "Got a big event you're training for?  Use our training calendar to schedule your workouts and build up your fitness so you crush it on your big day.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Calendar icon" src="/calendar-icon2.png" width={100} height={100} />
        <Image alt="Checklist icon" src="/checklist-icon2.png" width={100} height={100} />
      </div>
    ),
  },
  {
    title: "Join our Community",
    description:
      "Want to share your custom workouts, provide feedback on the app, or contribute to the project? Join us on Discord.",
    demo: (
      <a href="https://discord.gg/4gkrJvny">
          <Image
            src="/discord-mark-blue.png"
            alt="Discord Logo"
            className="h-20 w-28"
            width={200}
            height={100}
          />
      </a>
    ),
  },
];
