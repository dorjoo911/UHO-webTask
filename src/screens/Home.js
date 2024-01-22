import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Link to="/bootstrap-challenge">
        <Button style={{ backgroundColor: "#C8102E" }}>
          Bootstrap Challenges
        </Button>
      </Link>
      <Link to="/faculty-challenge">
        <Button style={{ backgroundColor: "#960C22" }}>
          Faculty Lab Challenges
        </Button>
      </Link>
    </>
  );
}
