import SectionTitle from "./sectiontitle";
import Image from "next/image";

export default function Education({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="education"/>
        <div className="px-10 font-lora text-md">
            <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 mt-6 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-12 ring-8 ring-white">
                        <Image
                            src="/OSU.jpg"
                            alt="Oregon State logo"
                            width="120"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="osu_logo"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-16">Bachelor of Science - BS, Computer Science</h3>
                    <p className="px-16 text-sm mb-1">Oregon State University - online</p>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 px-16">September 2016 - January 2019</time>
                    <p className="px-16">Online Computer Science Postbaccalaureate Degree</p>
                </li>
                <li className="mb-10 mt-6 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-10 ring-8 ring-white">
                        <Image
                            src="/UF.png"
                            alt="University of Florida logo"
                            width="100"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="uf_logo"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-16">Bachelor of Science - BS, Industrial and Systems Engineering</h3>
                    <p className="px-16 text-sm mb-1">University of Florida - Gainesville, FL</p>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 px-16">August 2006 - May 2011</time>
                    <p className="px-16">Minor studies in Sales Engineering and Business Administration</p>
                </li>
            </ol>
        </div>   
      </div>
    );
  }