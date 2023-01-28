import "./Profile.css";
import Techstack from "./Techstack.js";

export default function Profile() {
    return (
        <div className="profile">
            <h1>About me</h1>
            <div className="card">
                <div className="card-text">
                    <p>
                        I am a full-stack web developer with a background in
                        computer science and a passion for building things.
                        I am currently working as a Full Stack Developer at
                        I am a full-stack web developer with a background in
                        computer science and a passion for building things.
                        I am currently working as a Full Stack Developer at
                        I am a full-stack web developer with a background in
                        computer science and a passion for building things.
                        I am currently working as a Full Stack Developer at
                        I am a full-stack web developer with a background in
                        computer science and a passion for building things.
                        I am currently working as a Full Stack Developer at
                        I am a full-stack web developer with a background in
                        computer science and a passion for building things.
                        I am currently working as a Full Stack Developer at
                    </p>
                </div>
                <div className="card-photo">
                    <img src="../images/my-photo.jpg" alt="profile" />
                </div>
            </div>
            <Techstack />
        </div>
    );
}