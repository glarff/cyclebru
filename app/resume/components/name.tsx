import Balancer from "react-wrap-balancer";

export default function Name({
    text,
  }: {
    text: string;
  }) {
    return (
      <div>
        <div className="font-montserrat text-4xl">
            <Balancer>{text}</Balancer>
        </div>
      </div>
    );
  }