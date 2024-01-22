import React, { useState } from "react";
import "./Research.css"; // Import your custom CSS file for styling
import Header from "../../../components/header-nav/Header";

export default function Research() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Genetics in Myopia Research",
      description:
        "Genetics in myopia research explores the hereditary factors influencing nearsightedness, uncovering specific genes associated with its development and paving the way for targeted interventions to better understand and address this refractive error.",
      image: "/assets/Misc/shutterstock_1201208380.jpg",
      slideshowImages: [
        "/assets/Eyes/shutterstock_81607225.jpg",
        "/assets/Eyes/shutterstock_113603590.jpg",
        "/assets/Eyes/shutterstock_178128617.jpg",
      ],
    },
    {
      title: "Environmental Factors in Myopia Research",
      description:
        "Environmental factors in myopia, such as reduced outdoor activities, prolonged near work, and increased screen time, are crucial focal points of research, emphasizing the need for lifestyle interventions to mitigate the rising prevalence of nearsightedness.",
      image: "/assets/Misc/shutterstock_1085080280.jpg",
      slideshowImages: [
        "/assets/Eyes/shutterstock_241217680.jpg",
        "/assets/Eyes/shutterstock_2076670144.jpg",
        "/assets/Eyes/shutterstock_1714254199.jpg",
      ],
    },
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects[selectedProject].slideshowImages.length - 1
        ? 0
        : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? projects[selectedProject].slideshowImages.length - 1
        : prevSlide - 1
    );
  };

  return (
    <>
      <Header />
      <div className="research-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => handleProjectClick(index)}
            />
            <h2 className="project-title">{project.title}</h2>
            {selectedProject === index && (
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="slideshow">
                  <button className="prev-button" onClick={handlePrevSlide}>
                    &lt;
                  </button>
                  <img
                    src={project.slideshowImages[currentSlide]}
                    alt={`Slideshow ${currentSlide + 1}`}
                    className="slideshow-image"
                  />
                  <button className="next-button" onClick={handleNextSlide}>
                    &gt;
                  </button>
                </div>
                <button className="close-button" onClick={handleCloseProject}>
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
