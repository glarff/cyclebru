export default function SectionTitle({
    text,
  }: {
    text: string;
  }) {
    return (
        <div>
            <div className="uppercase font-lora font-bold text-xl underline">{text}</div>
        </div>
    );
  }