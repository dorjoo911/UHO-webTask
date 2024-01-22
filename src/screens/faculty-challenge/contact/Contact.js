import React, { useState } from "react";
import Header from "../../../components/header-nav/Header";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const navigate = useNavigate();
  const navigateToPersonnel = () => {
    navigate("personnel");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePhone = (phone) => {
    return phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    alert("Form submitted successfully!");
    // Form submission logic
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Primary Researcher's Contact Information:</p>
        <p>Peter Smith, O.D., Ph.D.</p>
        <p>Email: bsmith@noreply.com</p>
        <p>Phone: (713)777-7777</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Comments/Questions:
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" onClick={navigateToPersonnel}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
