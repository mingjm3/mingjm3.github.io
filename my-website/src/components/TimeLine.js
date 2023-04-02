import Experience from "./Experience";
import "./TimeLine.css";

export default function TimeLine() {
    return (
        <div className="timeline">
            <h1>Here are my work experiences and education</h1>
            <div className="timeline-container">
                <Experience name = "University of Washington" link = "https://www.washington.edu/" role = "M.S. in Computer Science" date = "2022.09 - Present" description = "Related course: Algorithms; Computer Vision; Distributed Computing; Mobile Computing; Computer Graphics" icon = "../images/experiences/uw.png"/>
                <Experience name = "Thoughtworks" link = "https://www.thoughtworks.com/en-us" role = "Software Engineer" date = "2021.11 - 2022.08" description = "Deployed a U.S. oil company business on Azure and migrated its database to Azure in 8 weeks. Achieved and tested order REST APIs which can track, update and create orders using Java Spring Boot and Jmeter. Designed and built a CI/CD pipeline in a team of 10 for an online shipping platform that scaled 10,000 daily active users." icon = "../images/experiences/tw.png"/>
                <Experience name = "TP-LINK" link = "https://www.tp-link.com/us/" role = "Software Engineer Intern" date = "2021.08 - 2021.09" description = "Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++. Designed test automation and tested a router’s throughput and routing using Python." icon = "../images/experiences/tp.png"/>
                <Experience name = "West China Hospital" link = "https://www.wchscu.cn/Home.html" role = "Research Assistant" date = "2020.06 - 2021.07" description = "Led research in human stereoscopic vision and found binocular disparity, degree of myopia, and strabismus are the main factors affecting stereopsis. Analyzed the influence of the physiological state of human eyes on the effect of augmented reality. Worked in a visual electrophysiology lab, recorded the effects of images on visual electrophysiology and psychological vision. " icon = "../images/experiences/wch.png"/>
                <Experience name = "Sichuan University" link = "https://en.wikipedia.org/wiki/Sichuan_University" role = "B.Eng. in Computer Science" date = "2017-2021" description = "Related course: OOP, Data Structures & Algorithm, Computer network, Database, Operating system, Computer system, Compiler, System-level programming, Web development, Game Design, 3D Modeling, Software engineering and management." icon = "../images/experiences/scu.png"/>
                <Experience name = "Sichuan University" link = "https://en.wikipedia.org/wiki/West_China_Medical_Center" role = "B.S. in Medical Technology" date = "2017-2021" description = "Relevant Coursework: Optics; Ophthalmology; Optometry; Binocular Vision; Physiological Vision;  Psychological Vision" icon = "../images/experiences/scu.png"/>
            </div>
        </div>
    );
}