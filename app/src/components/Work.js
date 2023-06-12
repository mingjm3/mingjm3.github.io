import React from 'react';
import './Work.css';

const data = [
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQEv3EBIeJj4aQ/company-logo_200_200/0/1555082668721?e=1694649600&v=beta&t=Qe7TxAjP__aUipWBpRrpHrcCjKKY_E-T56DFnDMe-X8",
    company: "FindingFive",
    position: "Software Engineer Intern",
    startDate: "May 2023",
    endDate: "Present",
    description: ["- Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++.", "- Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++."],
    technologies: ["Python", "REST APIs", "Falcon"]
  },
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQE5QBG-mhja9g/company-logo_200_200/0/1625041348494?e=1694649600&v=beta&t=el4og5WmrWUqf5SmsGdALZL-ql9dcdjOjZSD7j1luP8",
    company: "TP-Link",
    position: "Software Engineer Intern",
    startDate: "2021/08/01",
    endDate: "2021/09/30",
    description: ["- Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++."],
    technologies: ["Python", "REST APIs", "Falcon"]
  },
  {
    logo: "https://media.licdn.com/dms/image/C4D0BAQFWMwEmsK0Aeg/company-logo_200_200/0/1519952553348?e=1694649600&v=beta&t=DrKjv5JEMrdNboWYHA3lPeuGePwdJWkjtomtPZWE2Wk",
    company: "TP-Link",
    position: "Software Engineer Intern",
    startDate: "2021/08/01",
    endDate: "2021/09/30",
    description: ["- Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++."],
    technologies: ["Python", "REST APIs", "Falcon"]
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQH784Gt17OeVg/company-logo_200_200/0/1643080249339?e=1694649600&v=beta&t=9HaJXaRp0h2tGMoQm0aqvKrHs-u0rLK26x2_ynzcfDs",
    company: "TP-Link",
    position: "Software Engineer Intern",
    startDate: "2021/08/01",
    endDate: "2021/09/30",
    description: ["- Achieved dynamic routing algorithms in a commercial router and analyzed network data using C++."],
    technologies: ["Python", "REST APIs", "Falcon"]
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
                    <p className='company'>{experience.company}</p>
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
