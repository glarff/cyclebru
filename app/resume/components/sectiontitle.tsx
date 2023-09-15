import Balancer from "react-wrap-balancer";

export default function SectionTitle({
    text,
  }: {
    text: string;
  }) {
    return (
        <div>
            <div className="uppercase font-lora font-bold text-xl underline">
              <Balancer>{text}</Balancer>
            </div>
        </div>
    );
  }