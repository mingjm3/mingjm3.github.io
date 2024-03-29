import React from 'react';
import './Work.css';
import ff from '../images/ff.jpg';
import tw from '../images/tw.jpg';
import tp from '../images/tp.jpg';
import wch from '../images/wch.jpg';

const data = [
  {
    logo: ff,
    company: "FindingFive",
    position: "Software Engineer Intern",
    startDate: "May 2023",
    endDate: "Aug 2023",
    description: ["- Implemented RESTful API for the Bonus system using Python Falcon. Researchers can reward participants with money or credits based on their engagement levels. Used JWT for user identity validation within API requests, enhancing API security.", "- Engaged in the development of the platform's billing functionalities. Integrated PayPal SDK to create APIs for user payments through PayPal, resulting in a 30% revenue boost for the platform."],
    technologies: ["Python", "REST APIs", "Falcon"],
    url: "https://www.findingfive.com/"
  },
  {
    logo: tw,
    company: "ThoughtWorks",
    position: "Software Engineer",
    startDate: "Nov 2021",
    endDate: "Aug 2022",
    description: ["- Deployed online ordering services for a US petroleum company. Utilized Azure Kubernetes Services to manage containers within a microservices system, enhancing system scalability.", "- Developed RESTful API for order tracking using Java Spring Boot, return  item location and status based on order ID. Used Redis caching for query data to reduce API response time, as validated by JMeter testing, showcasing a 50% reduction in response time.", "- Used  Jenkins to establish a CI/CD pipeline. Utilized SonarCloud within the pipeline for code reviews, increasing code quality and reducing code refactoring tasks by 50%."],
    technologies: ["Java", "SpringBoot", "Azure", "Redis", "REST APIs", "CI/CD", "Docker", "Kubernetes", "MongoDB", "Jenkins", "JMeter"],
    url: "https://www.thoughtworks.com/en-us"
  },
  {
    logo: tp,
    company: "TP-Link",
    position: "Software Engineer Intern",
    startDate: "Aug 2021",
    endDate: "Sep 2021",
    description: ["- Implemented routing algorithms for commercial routers. Achieved the Dijkstra algorithm using C++, effectively enhancing point-to-point routing efficiency by identifying the shortest route paths."],
    technologies: ["C++", "Computer Network", "Linux"],
    url: "https://www.tp-link.com/us/"
  },
  {
    logo: wch,
    company: "West China Hospital",
    position: "Research Assistant in Ophthalmology Department",
    startDate: "Jun 2020",
    endDate: "Jul 2021",
    description: ["- Participated in intensive daily clinical practice in the hospital; prescribing medications, eyeglasses and contact lenses accumulating 600 cases; carried out practical diagnostics accumulating 800 times, such as myopia and glaucoma, etc.", "- Led research in human stereoscopic vision and found binocular disparity, degree of myopia, and strabismus are the main factors affecting stereopsis.", "- Worked in a visual electrophysiology lab, recorded the effects of images on visual electrophysiology and psychological vision."],
    technologies: ["Research", "Vision Science"],
    url:"https://www.wchscu.cn/Home.html"
  }
];

function Work() {
  return (
    <div>
      <div className='part_title'>
        Work Experiences
      </div>
      <section id='work' className="timeline">
        <ul>
          {data.map((experience, index) => (
            <li key={index}>
              <div className="timeline-card">
                <div className="timeline-icon">
                  <img src={experience.logo} alt={experience.company} />
                  <p className="date">{`${experience.startDate} - ${experience.endDate}`}</p>
                </div>
                <div className="timeline-text">
                    <p className='company'>
                      <a href={experience.url} target="_blank">
                        {experience.company}
                      </a>
                    </p>
                    <p className="position">{experience.position}</p>
                    <div className="description">
                      {experience.description.map((desc, index) => (
                          <p key={index}>{desc}</p>
                      ))}
                    </div>
                    <p className="technology_stack">
                      {experience.technologies.map((skill) => (
                        <div className='techstack_tag'>
                          {skill}
                        </div>
                      ))}
                    </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Work;
