import Balancer from "react-wrap-balancer";

export default function SmallTitle({ text }: { text: string }) {
  return (
    <div>
      <h1
        className="font-roboto text-sm font-bold uppercase text-purple-800 mb-1"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        {text}
      </h1>
    </div>
  );
}
