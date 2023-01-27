import './Socialbar.css';

export default function Socialbar() {
    return (
        <div className="social-bar">
            <a href="https://github.com/mingjm3" target="_blank" rel="noopener noreferrer">
                <img src="../images/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/mingjun-m-0bb5401a1/" target="_blank" rel="noopener noreferrer">
                <img src="../images/linkedin.png" alt="linkedin" />
            </a>
            <a href="mailto:imingjun.ma@outlook.com" target="_blank" rel="noopener noreferrer">
                <img src="../images/email.png" alt="gmail" />
            </a>
        </div>
    );
}