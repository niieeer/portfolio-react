import React from 'react';
import Title from './basic/Title';

const Experience = () => {

    const events = [
        {
            id: 1,
            date: "2018",
            description: "Baccalauréat Technologique STI2D (Sciences et technologies de l'industrie et du développement durable) à Verdun"
        },
        {
            id: 2,
            date: "2022",
            description: "Vendeur réparateur en informatique, Cash Express à Verdun"
        },
        {
            id: 3,
            date: "2022",
            description: "Développeur Web stagiaire, Institut Gaïané à Nancy"
        },
        {
            id: 4,
            date: "2022",
            description: "Formation de designer Web, titre professionnel de niveau BAC+2, centre de formation ALAJI à Nancy"
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
