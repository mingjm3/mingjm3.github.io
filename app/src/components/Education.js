import './Education.css'

function Education(params) {
    const data = [
        {
            university: "University of Washington",
            majors: "M.S. Computer Science",
            from: "2022/09",
            to: "Now",
            logo: "https://logowik.com/content/uploads/images/washington-huskies7991.jpg",
            link: "http://www.washington.edu/?_gl=1*16aefbj*_ga*MTMzODU4MzY4NC4xNjY0MTcwNTI4*_ga_3T65WK0BM8*MTY4NjUyMjQzNi4zMi4xLjE2ODY1MjI1NzEuMC4wLjA.*_ga_JLHM9WH4JV*MTY4NjUyMjQzNi4zMi4xLjE2ODY1MjI1NzEuMC4wLjA."
        },
        {
            university: "Sichuan University",
            majors: "B.Eng. Computer Science", 
            from: "2017/09",
            to: "2021/06",
            logo: "https://www.scu.edu.cn/__local/B/67/25/DFAF986CCD6529E52D7830F180D_C37C7DEE_4340.png",
            link: "https://www.scu.edu.cn/index.htm"
        },
        {
            university: "Sichuan University",
            majors: "B.S. Medical Technology (Visual Science)",
            from: "2017/09",
            to: "2021/06",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutTuX77E-OhG8jZu17e_vUYy4XgXAYcshZEY3zY7H4w&s",
            link: "http://www.wchscu.cn/Home.html"
        }
    ];

    return (
        <div>
            <div className='education_title'>
                Education
            </div>
            <div id="education" className="education">
                {data.map((education, index) => (
                    <div className="education__container" key={index}>
                        <div className="education__logo">
                            <img src={education.logo} alt={education.university} />
                            </div>
                        <div className="education__details">
                            <a href={education.link} target="_blank" rel="noopener noreferrer">
                                <h3>{education.university}</h3>
                            </a>
                            <p>{education.majors}</p>
                            <p>{education.from} - {education.to}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;