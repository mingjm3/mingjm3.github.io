import { FaGithub, Fa} from 'react-icons/fa';
import './Project.css';

const data = [
  {
    title: '[Stanford CIFE x AutoDesk] Data Stream Platform',
    link: 'https://cife.stanford.edu/',
    description: 'Develop and maintain the system platform. The system utilizes Apache Flink to process the input of architectural video information. By combining GPU nodes with AI technologies, we analyze the construction process to identify areas that can be automated by robots. The project is still ongoing, and we are actively working on it.',
    skills: [
      'Apache Flink',
      'Computer Vision'
    ]
  },
  {
    title: '[Open Source] An Image Retrieval System ',
    stars: 62,
    link: 'https://github.com/mingjm3/image_retrieval_system',
    icon: FaGithub,
    description: 'Implemented an image retrieval program using the VLAD algorithm, leveraging C++ and OpenCV. Used the SIFT algorithm for feature extraction and the K-means algorithm for generating a visual vocabulary. This system allows for efficient searching within large-scale image databases. This implementation enables training your own image set and building a customized image retrieval system.',
    skills: [
      'C++',
      'Computer Vision',
      'OpenCV',
      'Image Retrieval'
    ]
  },
  {
    title: '[Open Source] Real-Time Flight Tracking System',
    icon: FaGithub,
    description: 'Implemented a real-time application for matching aircraft with the nearest airport by Java. The application utilizes Apache Storm as the data stream processing middleware, with spouts and bolts for multi-threaded data processing. Kafka is used as the message queue system for seamless data ingestion.',
    skills: [
      'Java',
      'Storm',
      'Kafka',
      'Real-Time'
    ]
  },
  {
    title: '[Open Source] Real Currency',
    icon: FaGithub,
    link: 'https://github.com/mingjm3/RealCurrency',
    description: 'Designed and implemented a currency exchange rate IOS app using Swift. Enabled users to see history rates, calculate rates, and search rates. Using ARKit achieves an AR function that can convert the price in the supermarket to the currency set by the user.',
    skills: [
      'Swift',
      'ARKit'
    ]
  },
  {
    title: '[Open Source] Eye Connection',
    icon: FaGithub,
    link: 'https://github.com/mingjm3/EyeConnection',
    description: 'Designed and implemented an online medical system in an 8-person team using Java Spring Boot and React. Enabled users to make an appointment and meet with doctors online.',
    skills: [
      'Java',
      'SpringBoot',
      'React'
    ]
  },
  {
    title: '[Open Source] Pix Editor',
    icon: FaGithub,
    link: 'https://github.com/mingjm3/PixEditor',
    description: 'Designed and implemented an image processing application using Python, C++, and OpenCV. Enabled users to edit brightness, sharpness, contrast, saturation, size, and beautify portraits.',
    skills: [
      'Python',
      'C++',
      'OpenCV'
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
                  {project.icon && <project.icon className='icon' />}  {project.stars && ' ☆' + project.stars}
                  <div className='project_title'>
                    {project.title}
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
