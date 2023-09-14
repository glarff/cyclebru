import SectionTitle from "./sectiontitle";

export default function Objective({
    text,
  }: {
    text: string;
  }) {
    return (
      <div>
        <SectionTitle text="objective"/>
        <div className="px-10 font-lora text-md">
            {text}
        </div>   
      </div>
    );
  }