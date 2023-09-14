"use client";

import Name from "./components/name";
import ContactInfo from "./components/contactinfo";
import Objective from "./components/objective";
import Summary from "./components/summary";
import Education from "./components/eductation";
import WorkExperience from "./components/workexperience";
import Certifications from "./components/certifications";
import Profiles from "./components/profiles";

export default function Page() {

  const objective = "Highly motivated, knowledgeable, well-organized, and results-driven professional looking to secure a position with your company or organization as a Full-Stack Software Engineer, Front-End Engineer, Back-End Enginner, or other engineering position as applicable, utilizing my extensive skills, training, expertise, education, and experience."

  return (
    <div className = "bg-white z-10 h-100vh w-full text-stone-800 px-4 py-4 rounded-lg font-roboto">     
       <div className = "border-dashed border-2 border-sky-200 px-4 py-4 rounded-md divide-y divide-solid">
          <div className = "flex divide-x">
            <div className = "mb-2 pr-56">
              <Name text="Michael J. Ross" />
              <ContactInfo 
                  location = "Gainesville, FL" 
                  email = "michael.ross444@gmail.com"
                  phone = "954-465-0364"
                />
            </div>
            <div className = "mb-2">
              <Profiles linkedinurl="linkedin.com/in/michaelross444/" githuburl="github.com/glarff"/>
            </div>

          </div>

          <div className = "py-4">
            <Objective text={objective} />
          </div>
          <div className = "py-4">
            <Summary />
          </div>
          <div className = "py-4">
            <WorkExperience />
          </div>
          <div className = "py-4">
            <Education />
          </div>
          <div className = "py-4">
            <Certifications/>
          </div>
       </div>
    </div>
  );
}
