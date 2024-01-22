import React from "react";
import Header from "../../components/header-nav/Header";
import BootstrapChallenge from "../bootstrap-challenge/BootstrapChallenge";

export default function FacultyLabChallenge() {
  return (
    <>
      <Header />
      <div style={{ margin: "5%" }}>
        <BootstrapChallenge />
      </div>
    </>
  );
}
