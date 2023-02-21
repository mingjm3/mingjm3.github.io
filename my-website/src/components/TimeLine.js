import Experience from "./Experience";
import "./TimeLine.css";

export default function TimeLine() {
    return (
        <div className="timeline">
            <h1>Here are my work experiences and education</h1>
            <div className="timeline-container">
                <Experience name = "University of Washington" link = "https://www.washington.edu/" role = "M.S. in Computer Science" date = "2022.09 - Present" description = "Related course: Algorithm design, Distributed computing, Cloud computing, Computer Vision, Mobile computing, Software design, Research in software development" icon = "../images/experiences/uw.png"/>
                <Experience name = "Thoughtworks" link = "https://www.thoughtworks.com/en-us" role = "Software Engineer" date = "2021.11 - 2022.08" description = "Used Azure to help a U.S. Big Oil company deploy its business online and increase its revenue by 20%. Designed and achieved the REST API of the business, and finished load testing by Jmeter. Achieved an order API using Java Spring Boot that can transfer delivery method into special code, and store the code in the cloud database. This order API can be called by more than 10000 users at the same time." icon = "../images/experiences/tw.png"/>
                <Experience name = "TP-LINK" link = "https://www.tp-link.com/us/" role = "Software Engineer" date = "2021.08 - 2021.09" description = "Worked in Network lab and improved the efficiency of throughput of a commercial gigabit router using C and C++. Achieved a flow control system for a commercial switch. Using Spirent TestCenters to design test cases and test the flow control of the switch under high throughput conditions. Achieved a Python automation framework, which can automatically test the reaction of a commercial router to TCP/IP protocols stacks, accelerating product launches." icon = "../images/experiences/tp.png"/>
                <Experience name = "West China Hospital" link = "https://www.wchscu.cn/Home.html" role = "Medicial Intern" date = "2020.06 - 2021.06" description = "In the ophthalmology clinic of West China Hospital, I helped patients with eye examination, psychological counseling and barrier-free access, with a cumulative volunteer service time of 1500 hours." icon = "../images/experiences/wch.png"/>
                <Experience name = "Sichuan University" link = "https://en.wikipedia.org/wiki/Sichuan_University" role = "B.Eng. in Software Engineering" date = "2017-2021" description = "Related course: OOP, Data Structures & Algorithm, Computer network, Database, Operating system, Computer system, Compiler, System-level programming, Web development, Game Design, 3D Modeling, Software engineering and management." icon = "../images/experiences/scu.png"/>
                <Experience name = "Sichuan University" link = "https://en.wikipedia.org/wiki/West_China_Medical_Center" role = "B.S. in Medical Technology" date = "2017-2021" description = "Related course: Calculus, Linear algebra, Probability Statistics, Diagnostics, Pathology, Systemicanatomy, Pathophysiology, Pharmacology, Histology and Embryology, Biochemistry, Microbiology, Organ-based Clinical Medicine, Optometry" icon = "../images/experiences/scu.png"/>
            </div>
        </div>
    );
}