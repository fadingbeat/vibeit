// components/OurWork.jsx
import React, { useState } from 'react';
// import './OurWork.css'; // Optional CSS for styling

function OurWork() {
  const [activeTab, setActiveTab] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'Projekt 1',
      subtitle: 'Jednostavna web stranica za jogu.',
      image: 'placeholder1.png', // Replace with actual image URL or path
    },
    {
      id: 2,
      title: 'Projekt 2',
      subtitle: 'Jednostavna web stranica za fotografiju prirode.',
      image: 'placeholder2.png', // Replace with actual image URL or path
    },
    {
      id: 3,
      title: 'Projekt 3',
      subtitle: 'Prilagođeno rješenje: Kalendar za praćenje narudžbi.',
      image: 'placeholder3.png', // Replace with actual image URL or path
    },
  ];

  return (
    <section className="our-work">
      <h2>Naši Radovi</h2>
      <div className="tabs">
        <div className="tab-buttons">
          {projects.map((project) => (
            <button
              key={project.id}
              className={activeTab === project.id ? 'active' : ''}
              onClick={() => setActiveTab(project.id)}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {projects.map((project) =>
            activeTab === project.id ? (
              <div key={project.id} className="project-details">
                <img
                  src={project.image}
                  alt={`Slika za ${project.title}`}
                  className="project-image"
                />
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
