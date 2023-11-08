import SectionTitle from "./sectiontitle";

export default function Summary({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="summary of qualifications"/>
        <div className="px-10 font-lora text-md">
          <ul className="list-disc">
            <li>11 years of experience in software industry, with proven track records of success in developing new features, fixing bugs, adopting new technologies, and working in high-functioning teams.</li>
            <li>Proficient in a wide array of technologies, including but not limited to C#, C++, .NET Core, ASP.NET, REST APIs, SQL databases, and several JavaScript libraries, with a recent specialization in Next.js.</li>
            <li>Recognized as a fast learner and go-to resource for taking on challenging projects with many unknown variables.</li>
            <li>Demonstrated ability to formulate and implement strategic plans, resolving critical issues and driving project success.</li>
            <li>Diverse background in software industry, with prior experience in Sales Engineering and Customer Support roles supplementing my Software Engineering experience.</li>
            <li>Strong eduction background and maintained desire to continue learning, demonstrated by completion of second Bachelor's degree completed online and in part-time while wokring in previous roles.</li>
          </ul>
        </div>   
      </div>
    );
  }