import Name from "./name";
import ContactInfo from "./contactinfo";
import Objective from "./objective";
import Summary from "./summary";
import Education from "./eductation";
import WorkExperience from "./workexperience";
import Certifications from "./certifications";
import Profiles from "./profiles";
import Background from "./background";

export default function Resume({
  }: {
  }) {
    const objective = "Highly motivated, knowledgeable, and results-driven professional looking to leverage my 4 years in software engineering and 10+ years cumulatively in the tech industry to find a new role at a company with a strong engineering culture to continue to grow my career.";
/*     secure a position with your organization as a Data Analyst, Software Engineer, SQL Engineer, or other position in Engineering or IT as applicable, 
    utilizing my extensive skills, training, expertise, education, and experience." */
    return (
        <div>        
            <div className = "px-4 py-4 rounded-md divide-y divide-solid">
                <div className = "md:flex md:divide-x">
                    <div className = "mb-2 mr-16">
                        <Name text="Michael J. Ross" />
                        <ContactInfo 
                            location = "Gainesville, FL" 
                            email = "michael.ross444@gmail.com"
                            phone = "954-465-0364"
                        />
                    </div>
                    <div className = "mb-2">
                    <Profiles linkedinurl="linkedin.com/in/michaelross444" githuburl="github.com/glarff"/>
                    </div>
                </div>
                {/* <div className = "py-4">
                    <Objective text={objective} />
                </div> */}
                {/* <div className = "py-4">
                    <Summary />
                </div> */}
{/*                 <div className = "py-4">
                    <Background />
                </div> */}
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