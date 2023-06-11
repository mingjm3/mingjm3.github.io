import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { SiLeetcode, SiHandshake } from "react-icons/si";
import "./Profile.css";

function Profile(params) {
    return (
        <div className="profile">
            <div className="avatar"> 
                <img alt="myphoto" src="https://media.licdn.com/dms/image/D4E35AQGzFtHb2A7Ivw/profile-framedphoto-shrink_400_400/0/1684478446184?e=1687114800&v=beta&t=dvipzClM1b31B0kzZUfrLT79gxgunrYvzdjV4AsbVwg"></img>
            </div>
            <h1 className="name">
                <span className="first-name"> Mingjun </span>
                <span className="last-name"> Ma </span>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="/skills/">skills</a>
                    </li>
                    <li>
                        <a href="/education/">education</a>
                    </li>
                    <li>
                        <a href="/work/">work</a>
                    </li>
                    <li>
                        <a href="/project/">project</a>
                    </li>
                    <li>
                        <a href="/resume/">resume</a>
                    </li>
                </ul>
            </nav>
            <div className="social">
                <li className="social-button">
                    <a href="https://www.linkedin.com/in/mingjun-m-0bb5401a1/" target="blank">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="social-button">
                    <a href="https://github.com/mingjm3" target="blank">
                        <FaGithub />
                    </a>
                </li>
                <li className="social-button">
                    <a href="mailto:imingjun.ma@outlook.com" target="blank">
                        <AiOutlineMail />
                    </a>
                </li>
                <li className="social-button">
                    <a href="https://leetcode.com/arcgo333/" target="blank">
                        <SiLeetcode />
                    </a>
                </li>
                <li className="social-button">
                    <a href="https://app.joinhandshake.com/stu/users/39687292" target="blank">
                        <SiHandshake />
                    </a>
                </li>
            </div>
        </div>
    );
}

export default Profile;