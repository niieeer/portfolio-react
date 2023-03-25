import React from "react";

function Skills() {
    const skillsData = [
        {
            name: "HTML/CSS",
            description:
                "Proficient in fundamental concepts of HTML and CSS for web development.",
            logoUrl: "./images/language_logo/html.png",
        },
        {
            name: "JavaScript",
            description:
                "Knowledge of fundamental concepts of JavaScript and frameworks such as React and Vue.js.",
            logoUrl: "./images/language_logo/javascript.png",
        },
        {
            name: "Node.js",
            description:
                "Experience with Node.js for server-side web application development.",
            logoUrl: "./images/language_logo/node.png",
        },
        {
            name: "PHP",
            description:
                "Experience with PHP for server-side web application development and content management systems like WordPress.",
            logoUrl: "./images/language_logo/php.png",
        },
        {
            name: "MySQL",
            description:
                "Knowledge of SQL and experience with MySQL for database management and data retrieval.",
            logoUrl: "./images/language_logo/mySQL.png",
        },
        {
            name: "React",
            description:
                "Proficient in React for developing scalable and performant web and mobile applications.",
            logoUrl: "./images/language_logo/react.gif",
        },
    ];

    return (
        <section id="skills">
            <h2>Compétences Techniques</h2>
            <ul className="skill-list">
                {skillsData.map((skill) => (
                    <li key={skill.name} className="skill-item">
                        <img src={skill.logoUrl} alt={skill.name} className="skill-logo" />
                        <p className="skill-description">{skill.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
