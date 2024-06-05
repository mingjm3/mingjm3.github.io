import SocialBar from "./SocialBar";
import './Home.css';

export default function Home() {
    
    return (
        <div className="intro-page">
            <h1>Hi, my name is </h1>
            <h2>Mingjun Ma</h2>
            <h3>M.S. in Computer Science | Software Engineer</h3>
            <SocialBar />
        </div>
    );
}