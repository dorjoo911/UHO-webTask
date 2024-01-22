import React, { useState, useEffect, useCallback } from "react";
import "./LabDescription.css";
import Header from "../../../components/header-nav/Header";

const LabDescription = () => {
  const slideshowImgs = [
    "/assets/Misc/shutterstock_1201208380.jpg",
    "/assets/Misc/shutterstock_1085080280.jpg",
    "/assets/Misc/shutterstock_1201208380.jpg",
  ];
  const groupImgs = [
    "/assets/Eyes/shutterstock_81607225.jpg",
    "/assets/Eyes/shutterstock_113603590.jpg",
    "/assets/Eyes/shutterstock_178128617.jpg",
    "/assets/Eyes/shutterstock_241217680.jpg",
    "/assets/Eyes/shutterstock_2076670144.jpg",
    "/assets/Eyes/shutterstock_1714254199.jpg",
  ];

  const embededVideo = ["/assets/Videos/Comp 2.mp4"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImgs.length);
  }, [slideshowImgs.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [nextSlide]);

  return (
    <>
      <Header />
      <section className="lab-description">
        <h1>MYOPIA RESEARCH LAB</h1>
        <p>
          Myopia, commonly known as nearsightedness, has become a global concern
          due to its increasing prevalence and potential impact on eye health.
          Recent research in the field of myopia aims to uncover the underlying
          causes, develop effective interventions, and address the rising rates
          of this refractive error.
        </p>
        <p>
          Scientists are delving into the genetic factors contributing to
          myopia, identifying specific genes associated with its development.
          Understanding the genetic basis provides valuable insights into the
          hereditary nature of myopia, enabling researchers to explore targeted
          therapies and preventive measures.
        </p>
        <p>
          Novel optical interventions are being explored to manage myopia
          progression. Contact lenses and spectacle lenses with specially
          designed optics aim to reduce the strain on the eyes and slow down the
          elongation of the eyeball, a key factor in myopia. Orthokeratology, a
          technique involving overnight contact lens wear to reshape the cornea
          temporarily, is gaining attention for its potential in controlling
          myopia.
        </p>
        <p>
          Environmental factors also play a pivotal role in myopia onset and
          progression. Extensive screen time, reduced outdoor activities, and
          prolonged near work are among the modern lifestyle factors implicated
          in the surge of myopia cases. Researchers are investigating strategies
          to mitigate these environmental risks, emphasizing the importance of
          outdoor activities, proper lighting, and breaks from prolonged
          close-up tasks.
        </p>
        <p>
          Pharmacological approaches are also being investigated to arrest
          myopia progression. Eye drops containing atropine, a dilating agent,
          have shown promise in slowing down the elongation of the eyeball.
          Researchers are refining the concentration and application of atropine
          to optimize its effectiveness while minimizing side effects.
        </p>
        
        <div className="slideshow">
          <img src={slideshowImgs[currentSlide]} alt="Slideshow Images" />
        </div>
        
        <div className="video-embed">
          <video width="320" height="240" controls>
            <source src={embededVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       
        <div className="group-photo">
          {groupImgs.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Group Member ${index + 1}`}
              loading="lazy" 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LabDescription;
