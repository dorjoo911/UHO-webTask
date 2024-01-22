import Header from "../../../components/header-nav/Header";
import "./Publication.css";
import React from "react";

const publications = [
  "Smith P, Reeves A, Carpenter J. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Inside Optometry. 2019 Jul 22",
  "Smith P, Reeves A, Carpenter J. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Inside Optometry. 2019 Jul 22",
  "Smith P, Reeves A, Carpenter J. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Inside Optometry. 2019 Jul 22",
  "Smith P, Reeves A, Carpenter J. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Inside Optometry. 2019 Jul 22",
];

export default function Publication() {
  return (
    <>
      <Header />
      <div className="publications-container">
        <h2>Publications</h2>
        <ul>
          {publications.map((publication, index) => (
            <li key={index}>{publication}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
