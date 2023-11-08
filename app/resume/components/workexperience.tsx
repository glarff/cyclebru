import SectionTitle from "./sectiontitle";

export default function WorkExperience({
  }: {
  }) {
    return (
      <div>
        <SectionTitle text="professional experience" />
        <div className="px-2 font-lora text-md">
            <h3 className="flex items-center text-lg font-semibold mt-4">Software Engineer</h3>
            <h3 className="flex items-center mb-1 text-sm font-normal italic">SumTotal Systems, LLC - Gainesville, FL</h3>
            <time className="block mb-2 text-sm font-normal leading-none">August 2019 - March 2023</time>
            <ol className="list-disc my-4 px-4">    
                <li>Hybrid resource for new product development and sustained engineering, working with a team of 5 developers and 2 QA engineers following Agile methodology.</li>
                <li>Developed new front-end features in React.js and upgraded old features from Angular and plain HTML/CSS to React, meeting usability and accessibility standards set by industry experts.</li>
                <li>Implemented back-end changes in C# and C++ to support new functions, address bugs with existing features, and improve application performance.  Performed debugging using IDE tools and implemented test suites that met quality standards.</li>
                <li>Led a project to extend the reporting features of the application, including developing SQL replication, building ETL packages, defining SQL schemas, and building JasperReport files. Led the project from the design phase through to full implementation.</li>
                <li>Put into effect several changes to microservices to extend the search and integration capabilities of the application, working with tools such as Kafka, Solr, Zookeeper, and more.</li>
                <li>Created REST API logic for new features to allow for consumption of data stored in applications, following industry standards for API protocols.</li>
                <li>Administered virtual machines for the development of new features and utilized tools such as Docker, Vagrant, and VirtualBox to execute functional testing.</li>
                <li>Trusted resource by management for assisting with customer-raised SEG issues, offering support with product defects, data correction scripts, on-premise installation issues, performance problems, and any other concerns.</li>
            </ol>
            <h3 className="flex items-center text-lg font-semibold mt-8">Senior Technical Support Engineer</h3>
            <h3 className="flex items-center mb-1 text-sm font-normal italic">SumTotal Systems, LLC - Gainesville, FL</h3>
            <time className="block mb-2 text-sm font-normal leading-none">March 2015 - August 2019</time>
            <ol className="list-disc mb-4 px-4">
                <li>Tier 2 Resource in support for addressing all issues related to Talent Management product. Worked directly with Engineering, Cloud Operations, and customers to address issues with cloud and on-premise implementations.</li>
                <li>Acted as Implementation Consultant during 2-year migration effort from old versions of product to new platform, performing setup tasks, leading training with customers, and addressing issues with new features as they came up.</li>
                <li>Led training of new hires in Customer Support and Professional Services to introduce our product and technologies.</li>
            </ol>
            <h3 className="flex items-center text-lg font-semibold mt-8">Technical Support Engineer II</h3>
            <h3 className="flex items-center mb-1 text-sm font-normal italic">SumTotal Systems, LLC - Gainesville, FL</h3>
            <time className="block mb-2 text-sm font-normal leading-none">January 2013 - March 2015</time>
            <ol className="list-disc mb-4 px-4">
                <li>Handled closure of customer-raised tickets for Talent Management product, focusing on the more technical tickets that came to our team.</li>
                <li>Used SQL queries to identify issues in customer data and perform data correction scripts when applicable.</li>
                <li>Assisted customers with issues related to native JavaScript reports and provided fixes when applicable.</li>
            </ol>          
            <h3 className="flex items-center text-lg font-semibold mt-8">Associate Solutions Architect</h3>
            <h3 className="flex items-center mb-1 text-sm font-normal italic">SumTotal Systems, LLC - Gainesville, FL</h3>
            <time className="block mb-2 text-sm font-normal leading-none">May 2011 - January 2013</time>
            <ol className="list-disc mb-4 px-4">
                <li>Performed product demonstrations to prospective customers for multiple SumTotal products, including Learning and Talent Management offerings.</li>
                <li>Handled response to technical RFP questions and assisted Sales and Proposal teams for product and technical questions.</li>
                <li>Attended trade shows and demonstrated new features to attending customers.</li>
            </ol>
        </div>   
      </div>
    );
  }