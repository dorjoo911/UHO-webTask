import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import CustomCarousel from "../../components/custom-carousel/CustomCarousel";
import CustomAccordion from "../../components/custom-accordion/CustomAccordion";

export default function BootstrapChallenge() {
  return (
    <>
      <CustomAccordion />
      <br />
      <CustomCarousel />
    </>
  );
}
