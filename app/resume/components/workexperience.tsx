import { Timeline } from "rsuite";
import SectionTitle from "./sectiontitle";
import Image from "next/image";

export default function WorkExperience({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="professional experience" />
        <div className="px-10 font-lora text-md">
            <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 mt-4 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-9 ring-8 ring-white">
                        <Image
                            src="/sumtotal_newer.png"
                            alt="CycleBru logo"
                            width="80"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="sumtotal_logo"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-10">Software Engineer</h3>
                    <h3 className="flex items-center mb-1 text-sm font-normal px-10 italic">SumTotal Systems, LLC - Gainesville, FL</h3>
                    <time className="block mb-2 text-sm font-normal leading-none px-10">August 2019 - March 2023</time>
                    <ol className="list-disc mb-4 px-10">
                        <li>Hybrid resource for new product development and sustained engineering, working with team of 5 developers and 2 QA engineers following Agile methodology.</li>
                        <li>Developed new front end features in React.js for online "Agile Goals" feature and integrated React components into old HTML/CSS based UI.</li>
                        <li>Implemented back end changes in C# and C++ to support new functions for Talent Management product.</li>
                        <li>Led design of SQL Server schema for new Talent Management features.</li>
                        <li>Led design and implementation of reporting capabilities for new "Agile Goals" feature, including defining schemas, setting up replication, building ETL packages in Visual Studio Data Tools, and implementing needed schema files for JasperSoft reporting system.</li>
                        <li>Assisted in implementation of a new "UserSummary" microservice to optimize storage and retrieval of user training data.  Used Kafka to capture events and implemented functions in the microservice to store the data in a new Cassandra database.</li>
                        <li>Assisted in implementation of mobile app capabilities, using Android Studio to extend the existing capabilities of the Talent Management mobile interface.</li>
                        <li>Worked on front end and back end implementation for new "Talent Search" feature.  Used Solr to store and retrieve user data in a Angular.js search interface with filter capabilities.</li>
                        <li>Trusted resource by management for assisting with customer raised SEG issues, offering support with product defects, data correction scripts, on-premise installation issues, and any other problems related to the Talent Management product as needed.</li>
                    </ol>
                </li>
                <li className="my-10 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-9 ring-8 ring-white">
                        <Image
                            src="/sumtotal_newer.png"
                            alt="CycleBru logo"
                            width="80"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="sumtotal_logo"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-10">Senior Technical Support Engineer</h3>
                    <h3 className="flex items-center mb-1 text-sm font-normal px-10 italic">SumTotal Systems, LLC - Gainesville, FL</h3>
                    <time className="block mb-2 text-sm font-normal leading-none px-10">March 2015 - August 2019</time>
                    <ol className="list-disc mb-4 px-10">
                        <li>Tier 2 Resource in support for addressing all issues related to Talent Management product.</li>
                        <li>Worked directly with Engineering, Cloud Operations, and customers to address issues with cloud and on-premise implementations.</li>
                        <li>Acted as Implementation Consultant during 2-year migration effort from old versions of product to new platform, performing setup tasks, leading training with customers, and addressing issues with new features as they came up.</li>
                        <li>Led training of new hires in Customer Support and Professional Services to introduce our product and technologies.</li>
                    </ol>
                </li>
                <li className="my-10 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-9 ring-8 ring-white">
                        <Image
                            src="/sumtotal_older.png"
                            alt="CycleBru logo"
                            width="80"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="sumtotal_older"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-10">Technical Support Engineer II</h3>
                    <h3 className="flex items-center mb-1 text-sm font-normal px-10 italic">SumTotal Systems, LLC - Gainesville, FL</h3>
                    <time className="block mb-2 text-sm font-normal leading-none px-10">January 2013 - March 2015</time>
                    <ol className="list-disc mb-4 px-10">
                        <li>Handled closure of customer-raised tickets for Talent Management product, focusing on the more technical tickets that came to our team.</li>
                        <li>Used SQL queries to identify issues in customer data and perform data correction scripts when applicable.</li>
                        <li>Utilized tools such as Fiddler and Wireshark to investigate network issues and handle concerns related to site performance.</li>
                        <li>Assisted customers with issues related to native JavaScript reports and provided fixes when applicable.</li>
                        <li>Regularly maintained high closure rates of tickets and top customer satisfaction scores from post-ticket surveys.</li>
                    </ol>
                </li>
                <li className="my-10 ml-6">            
                    <span className="absolute flex items-center justify-center w-18 h-12 bg-white -left-9 ring-8 ring-white">
                        <Image
                            src="/sumtotal_older.png"
                            alt="CycleBru logo"
                            width="80"
                            height="40"
                            className="mr-2 rounded-sm"
                            key="sumtotal_logo"
                        ></Image>  
                        </span>
                    <h3 className="flex items-center text-lg font-semibold px-10">Associate Solutions Architect</h3>
                    <h3 className="flex items-center mb-1 text-sm font-normal px-10 italic">SumTotal Systems, LLC - Gainesville, FL</h3>
                    <time className="block mb-2 text-sm font-normal leading-none px-10">May 2011 - January 2013</time>
                    <ol className="list-disc mb-4 px-10">
                        <li>Performed product demonstrations to prospective customers for multiple SumTotal products, including Learning and Talent Management offerings.</li>
                        <li>Handled response to technical RFP questions and assisted Sales and Proposal teams for product and technical questions.</li>
                        <li>Attended trade shows and demonstrated new features to attending customers.</li>
                        <li>Technical resource involved in many winning opportunities that saw company bring in over 10 new logos over 2 year period.</li>
                    </ol>
                </li>
            </ol>
        </div>   
      </div>
    );
  }