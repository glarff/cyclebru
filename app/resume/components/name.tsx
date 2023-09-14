export default function Name({
    text,
  }: {
    text: string;
  }) {
    return (
      <div>
        <div className="font-montserrat text-4xl">
            {text}
        </div>
      </div>
    );
  }