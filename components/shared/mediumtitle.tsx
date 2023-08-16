import Balancer from "react-wrap-balancer";

export default function MediumTitle({
  text
}: {
  text: string;
}) {
  return (
    <div>
        <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-700 bg-clip-text font-display text-2xl font-bold tracking-[-0.02em] 
            text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
            <Balancer>{text}</Balancer>
        </h1>
    </div>
  );
}