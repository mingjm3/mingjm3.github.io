import './NavBar.css';
import DropDownMenu from './DropDownMenu';

const contactData = new Map([["Email", "mailto:imingjun.ma@outlook.com"], ["LinkedIn", "https://www.linkedin.com/in/mingjun-m-0bb5401a1/"]]);
const resumeData = new Map([["Preview", "https://drive.google.com/file/d/1_h2tdWO3wqdXeFpdSVea7iCIHpaCmuF5/view?usp=share_link"],["Download", "https://drive.google.com/u/0/uc?id=1_h2tdWO3wqdXeFpdSVea7iCIHpaCmuF5&export=download"]]);

export default function NavBar() {
    return (
        <nav>
            <ol>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li>
                    <a>Contact</a>
                    <DropDownMenu data={contactData}/>
                </li>
                <li>
                    <a>Resume</a>
                    <DropDownMenu data={resumeData}/>
                </li>
            </ol>
        </nav>
    )
}