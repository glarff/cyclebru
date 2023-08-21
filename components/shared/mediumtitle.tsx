import Balancer from "react-wrap-balancer";

export default function MediumTitle({ text }: { text: string }) {
  return (
    <div>
      <h1
        className="mx-12 my-6 font-orbitron text-4xl font-bold uppercase text-fuchsia-100"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {text}
      </h1>
    </div>
  );
}
