import React from "react";
import { useNavigate } from "react-router-dom";
import "./Personnel.css";
import Header from "../../../components/header-nav/Header";

const personnelData = [
  {
    name: "Peter Smith, O.D., Ph.D.",
    title: "Assistant Professor / Primary Researcher",
    email: "bsmith@noreply.com",
    phone: "(713)777-7777",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/People/shutterstock_47356687.jpg",
  },
  {
    name: "Abigal Reeves, Ph.D.",
    title: "Sr. Research Scientist",
    email: "areeves@noreply.com",
    phone: "(713)777-7777",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/People/shutterstock_220419091.jpg",
  },
  {
    name: "John Carpenter, Ph.D.",
    title: "Research Scientist",
    email: "jcarpenter@noreply.com",
    phone: "(713)777-7777",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/People/shutterstock_683094184.jpg",
  },
];

export default function Personnel() {
  const navigate = useNavigate();
  const navigateToPublication = () => {
    navigate("publication");
  };
  const navigateToContact = () => {
    navigate("contact");
  };

  return (
    <>
      <Header />
      <div>
        {personnelData.map((person, index) => (
          <div key={index} className="personnel-card">
            <img
              src={person.photo}
              alt={person.name}
              className="personnel-photo"
            />
            <h2>{person.name}</h2>
            <p>{person.title}</p>
            <p>{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.bio}</p>
            <button onClick={navigateToPublication}>View Profile</button>
            <button onClick={navigateToContact}>Download CV</button>
          </div>
        ))}
      </div>
    </>
  );
}
