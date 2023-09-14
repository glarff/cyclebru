import SectionTitle from "./sectiontitle";

export default function Summary({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="summary of qualifications"/>
        <div className="px-10 font-lora text-md">
          <ul className="list-disc">
            <li>4 years of experience in software development, with proven track records of success in developing new features, fixing bugs, adopting new technologies, and working in a high-functioning team.</li>
            <li>Recognized as a fast learner and go-to resource for taking on challenging projects with many unknown variables.</li>
            <li>Comprehensive understanding of all phases of the software development lifecycle, from analysis and design to development, testing, and implementation.</li>
            <li>Proficient in a wide array of technologies, including but not limited to C#,.NET Core, ASP.NET, REST APIs, SQL databases, and various JavaScript libraries.</li>
            <li>Demonstrated ability to formulate and implement strategic plans, resolving critical issues and driving project success.</li>
          </ul>
        </div>   
      </div>
    );
  }