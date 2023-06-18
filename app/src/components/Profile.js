import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { SiLeetcode, SiHandshake } from "react-icons/si";
import "./Profile.css";
import myImage from '../images/my-image.jpg';

function Profile(params) {
    return (
        <div className="profile">
            <div className="avatar"> 
                <img alt="myphoto" src={myImage}></img>
            </div>
            <h1 className="name">
                <span className="first-name"> Mingjun </span>
                <span className="last-name"> Ma </span>
            </h1>
            <div className="title">
                M.S. in Computer Science | Software Engineer
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#education">education</a>
                    </li>
                    <li>
                        <a href="#work">work</a>
                    </li>
                    <li>
                        <a href="#project">project</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1-RHK5ZxSB-yVjRjy7MUZNRDINrzaIuoEiTM0ho8VioM/edit?usp=sharing" target='_blank'>resume</a>
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