import './Profile.css';
import SkillsBar from './SkillsBar';

export default function Profile() {
    return (
        <div>
            <div className='profile'>
                <div className='profile-text'>
                    <h1>About Me</h1>
                    <p>
                        I am a graduate student in Computer Science at the University of Washington, specializing in AR, VR and cloud computing.
                    </p>
                    <p>
                        Prior to pursuing my Master's degree, I worked as a full-stack software engineer for a year and I'm an active open-source contributor on GitHub.
                    </p>
                    <p>
                        In addition to my academic and professional experience, I have a passion for exploring new places and experiencing different cultures.
                        I enjoy meeting new people, trying new foods, and seeing the world from a different point of view. I am always eager to learn and embrace new challenges.
                    </p>
                </div>
                <div className='profile-photo'>
                    <img src="../images/my-photo.jpg" alt='portrait' />
                </div>
            </div>
            <div>
                <SkillsBar />
            </div>
        </div>
    );
}

