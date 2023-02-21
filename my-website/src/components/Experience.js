import "./Experience.css";

export default function Experience(props) {
    return(
        <div className="exp">
            <div className="exp-header">
                <p className="exp-role">{props.role}</p>
                <p className="exp-date">{props.date}</p>
            </div>
            <div className="exp-icon">
                <img src={props.icon} alt={props.name}/>
            </div>
            <div className="exp-content">
                <a href={props.link}>{props.name}</a>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

