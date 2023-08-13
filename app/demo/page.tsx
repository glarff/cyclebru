import Timer from "@/components/shared/timer";
import Tip from "@/components/shared/tip";
import UpcomingSegments from "@/components/shared/upcomingsegments";
import Link from "next/link"
import Balancer from "react-wrap-balancer";

export default function Page() {
    return (
        <div className="z-10 w-full px-5 xl:px-0">

            <div className="flex flex-nowrap">

                <div>
                    <div className="flex flex-nowrap">
                        <h1
                            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] 
                                text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]"
                            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                        >
                            <Balancer>Workout: Pyramid Intervals</Balancer>
                        </h1>

                        <Link
                            className="rounded-full border border-black bg-indigo-800 h-10 ml-8 mt-5 px-6 py-2 text-md text-white transition-colors hover:bg-white hover:text-black"
                            href="/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <p>Start</p>
                        </Link>
                    </div>

                    <Timer 
                        title = "Time Remaining in Workout"
                        description = "Total time remaining in the workout session"
                        miliseconds = {4500000}
                    />

                    <div className="flex flex-nowrap py-2 text-3xl">
                        <div>Current Segment:</div>
                        <div className = "px-2">90 RPM Warmup</div>
                    </div>

                    <Timer 
                        title = "Time Remaining in Segment"
                        description = "Total time remaining in the current segment"
                        miliseconds = {300000}
                    />

                    <Tip text = "Think about pedaling as if tracing a square.  Push forward along the top, down the frontside, scrape the bottom, then pull back up the backside." />
                </div>

                <div><UpcomingSegments text="f" /></div>

            </div>  
        </div>
    )
  }