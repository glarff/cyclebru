import SectionTitle from "./sectiontitle";
import Image from "next/image";

export default function Certifications({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="certifications"/>
        <div className="px-10 font-lora text-md">
            <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 mt-6 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-6 ring-8 ring-white">
                        <Image
                            src="/microsoft.png"
                            alt="Microsoft logo"
                            width="60"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="microsoft_logo"
                        ></Image>  
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold px-10">AZ900 Microsoft Certified: Azure Fundamentals</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 px-10">Completion Date: August 2023</time>
                </li>
            </ol> 
        </div>
      </div>
    );
  }