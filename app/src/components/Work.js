import React from 'react';
import './Work.css';

const data = [
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQEv3EBIeJj4aQ/company-logo_200_200/0/1555082668721?e=1694649600&v=beta&t=Qe7TxAjP__aUipWBpRrpHrcCjKKY_E-T56DFnDMe-X8",
    company: "FindingFive",
    position: "Software Engineer Intern",
    startDate: "May 2023",
    endDate: "Present",
    description: ["- Develop backend REST APIs development using Python and Falcon framework."],
    technologies: ["Python", "REST APIs", "Falcon"],
    url: "https://www.findingfive.com/"
  },
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQE5QBG-mhja9g/company-logo_200_200/0/1625041348494?e=1694649600&v=beta&t=el4og5WmrWUqf5SmsGdALZL-ql9dcdjOjZSD7j1luP8",
    company: "ThoughtWorks",
    position: "Software Engineer",
    startDate: "Nov 2021",
    endDate: "Aug 2022",
    description: ["- Deployed a U.S. oil company business on Azure using Docker, Kubernetes and MongoDB, resulting in a 50% reduction in infrastructure costs and a 30% increase in system scalability.", "- Achieved and tested order REST APIs, enabling seamless order tracking, updates, and creation using SpringBoot and Jmeter, resulting in a 20% improvement in order processing efficiency and a 15% decrease in error rates.", "- Designed and implemented a robust CI/CD pipeline using Github Actions, reducing deployment time by 40% and ensuring continuous integration and delivery of software updates with zero downtime."],
    technologies: ["Java", "SpringBoot", "Azure", "REST APIs", "CI/CD", "Docker", "Kubernetes", "MongoDB", "GitHub Actions", "Jenkins"],
    url: "https://www.thoughtworks.com/en-us"
  },
  {
    logo: "https://media.licdn.com/dms/image/C4D0BAQFWMwEmsK0Aeg/company-logo_200_200/0/1519952553348?e=1694649600&v=beta&t=DrKjv5JEMrdNboWYHA3lPeuGePwdJWkjtomtPZWE2Wk",
    company: "TP-Link",
    position: "Software Engineer Intern",
    startDate: "Aug 2021",
    endDate: "Sep 2021",
    description: ["- Achieved dynamic routing algorithms implementation in a commercial router, resulting in an improvement in network efficiency and reduced packet loss by C++", "- Designed and developed test automation frameworks to assess router throughput and routing accuracy. Utilized Python to automate test scenarios, resulting in a 30% reduction in testing time."],
    technologies: ["Python", "C++"],
    url: "https://www.tp-link.com/us/"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQH784Gt17OeVg/company-logo_200_200/0/1643080249339?e=1694649600&v=beta&t=9HaJXaRp0h2tGMoQm0aqvKrHs-u0rLK26x2_ynzcfDs",
    company: "West China Hospital",
    position: "Research Assistant in Ophthalmology Department",
    startDate: "Jun 2020",
    endDate: "2Jul 2021",
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
