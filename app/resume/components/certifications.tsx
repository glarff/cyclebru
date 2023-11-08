import SectionTitle from "./sectiontitle";
import Image from "next/image";

export default function Certifications({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="certifications"/>
        <div className="px-2 font-lora text-md">
            <h3 className="flex items-center mb-1 text-lg font-semibold mt-4">AZ900 Microsoft Certified: Azure Fundamentals</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-700">Completion Date: August 2023</time>
        </div>
      </div>
    );
  }