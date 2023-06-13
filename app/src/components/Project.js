import { FaGithub } from 'react-icons/fa';
import './Project.css';

const data = [
  {
    title: 'Core',
    stars: 50,
    link: 'https://github.com/',
    icon: FaGithub,
    description: 'uduihwbdkwnui',
    skills: [
      'Kafka',
      'Hadoop',
      'Spark'
    ]
  },
  {
    title: 'Core',
    stars: 50,
    link: 'https://github.com/',
    icon: FaGithub,
    description: 'uduihwbdkwnui',
    skills: [
      'Kafka',
      'Hadoop',
      'Spark',
      'Redis'
    ]
  },
  {
    title: 'Core',
    stars: 50,
    link: 'https://github.com/',
    icon: FaGithub,
    description: 'uduihwbdkwnui',
    skills: [
      'Kafka',
      'Hadoop',
      'Spark',
      'Redis'
    ]
  }
];

function Project() {
  return (
    <div>
        <div className='part_title'>Projects</div>
        <div className='project_container' id='project'>
            <div className='project_grid'>
                {data.map((project, index) => (
                    <div key={index} className='project_card'>
                        <a href={project.link} className='project_link' target='_blank'>
                            <div className='project_title'>
                                {project.title}  <project.icon className='icon' /> {project.stars} ⭐️
                            </div>
                        </a>
                        <div className='project_description'>{project.description}</div>
                        <div className='project_skills'>
                            {project.skills.map((skill, index) => (
                                <span key={index} className='skill'>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Project;
