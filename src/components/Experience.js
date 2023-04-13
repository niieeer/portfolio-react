import React from 'react';
import Title from './basic/Title';

const Experience = () => {

    const events = [
        {
            id: 1,
            date: "2018",
            description: "Technological Baccalaureate STI2D (Sciences and technologies of industry and sustainable development) in Verdun"
        },
        {
            id: 2,
            date: "2022",
            description: "Computer repair salesman, Cash Express in Verdun"
        },
        {
            id: 3,
            date: "2022",
            description: "Web developer intern, Institut Gaïané in Nancy"
        },
        {
            id: 4,
            date: "2022",
            description: "Training of Web designer, professional title of level BAC+2, training center ALAJI in Nancy"
        },
    ];

    return (
        <section id="experience" aria-label="Expérience professionnelle">
            <Title title='Experience' />
            <div className="timeline">
                {events.map((event) => (
                    <div key={event.id} className="timeline-event">
                        <div className="timeline-date">
                            {event.date}
                        </div>
                        <div className="timeline-content">
                            {event.description}
                            <span className='circle'></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
