import './SkillsBar.css';

export default function SkillsBar() {
    return (
        <div>
            <h1 id='skills-title'>Skills:</h1>
            <div className="skills-bar"> 
                <ul>
                    <Skill name = "Java" icon = "../images/skills/java.png"/>
                    <Skill name = "Pyhton" icon = "../images/skills/python.png"/>
                    <Skill name = "C++/C" icon = "../images/skills/c.png"/>
                    <Skill name = "C#" icon = "../images/skills/csharp.png"/> 
                    <Skill name = "JavaScript" icon = "../images/skills/js.png"/>
                    <Skill name = "Swift" icon = "../images/skills/swift.png"/>

                    <Skill name = "SpringBoot" icon = "../images/skills/spring-boot.png"/>
                    <Skill name = "React" icon = "../images/skills/react.png"/>
                    <Skill name = "Django" icon = "../images/skills/django.png"/>
                    <Skill name = "AWS" icon = "../images/skills/aws.png"/>
                    <Skill name = "Azure" icon = "../images/skills/azure.png"/>
                    <Skill name = "HTML/CSS" icon = "../images/skills/html.png"/>

                    <Skill name = "MySQL" icon = "../images/skills/mysql.png"/>
                    <Skill name = "MongoDB" icon = "../images/skills/mongoDB.png"/>
                    <Skill name = "Git" icon = "../images/skills/git.png"/>
                    <Skill name = "Docker" icon = "../images/skills/docker.png"/>
                    <Skill name = "Jenkins" icon = "../images/skills/jenkins.png"/>

                    <Skill name = "Unity" icon = "../images/skills/unity.png"/>
                    <Skill name = "AR" icon = "../images/skills/ar.png"/>
                </ul>
            </div>
        </div>
    );
}

function Skill(props) {
    return (
        <li>
            <img src={props.icon} alt={props.name} />
            <div className="skill-name">{props.name}</div>
        </li>
    );
}