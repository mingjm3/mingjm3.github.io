import './Education.css'

const data = [
    {
        university: "University of Washington",
        majors: "M.S. Computer Science",
        from: "2022/09",
        to: "Present",
        logo: "https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_200_200/0/1554743867768?e=1694649600&v=beta&t=w92UsToVDjCH_DPXUe4mRHQxo1ULyF5ZeQlAO2H9ywQ",
        link: "http://www.washington.edu/?_gl=1*16aefbj*_ga*MTMzODU4MzY4NC4xNjY0MTcwNTI4*_ga_3T65WK0BM8*MTY4NjUyMjQzNi4zMi4xLjE2ODY1MjI1NzEuMC4wLjA.*_ga_JLHM9WH4JV*MTY4NjUyMjQzNi4zMi4xLjE2ODY1MjI1NzEuMC4wLjA."
    },
    {
        university: "Sichuan University",
        majors: "B.Eng. Computer Science", 
        from: "2017/09",
        to: "2021/06",
        logo: "https://media.licdn.com/dms/image/C560BAQFM4R7nsdWCCw/company-logo_200_200/0/1519864585772?e=1694649600&v=beta&t=viz1xGemEdqTFyAXpQ4CduPA3vw4ZpYJFRduz0tn2Xw",
        link: "https://www.scu.edu.cn/index.htm"
    },
    {
        university: "Sichuan University",
        majors: "B.S. Medical Technology (Visual Science)",
        from: "2017/09",
        to: "2021/06",
        logo: "https://media.licdn.com/dms/image/C560BAQH784Gt17OeVg/company-logo_200_200/0/1643080249339?e=1694649600&v=beta&t=9HaJXaRp0h2tGMoQm0aqvKrHs-u0rLK26x2_ynzcfDs",
        link: "http://www.wchscu.cn/Home.html"
    }
];

function Education(params) {
    return (
        <div>
            <div className='part_title'>
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