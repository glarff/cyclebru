import Balancer from "react-wrap-balancer";

export default function MediumTitle({
  text
}: {
  text: string;
}) {
  return (
    <div>
        <h1
            className="mx-12 animate-fade-up font-orbitron text-4xl font-bold tracking-[-0.02em] 
            text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem] uppercase text-fuchsia-100"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
            {text}
        </h1>
    </div>
  );
}