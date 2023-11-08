import SectionTitle from "./sectiontitle";
import Image from "next/image";

export default function Education({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="education"/>
        <div className="px-2 font-lora text-md">
            <h3 className="flex items-center text-lg font-semibold mt-4">Bachelor of Science - BS, Computer Science</h3>
            <p className=" text-sm mb-1">Oregon State University - online</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-700 ">September 2016 - January 2019</time>
            <p className="">Online Computer Science Postbaccalaureate Degree</p>
            <h3 className="flex items-center text-lg font-semibold mt-8">Bachelor of Science - BS, Industrial and Systems Engineering</h3>
            <p className=" text-sm mb-1">University of Florida - Gainesville, FL</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-700 ">August 2006 - May 2011</time>
            <p className="">Minor studies in Sales Engineering and Business Administration</p>
        </div>   
      </div>
    );
  }