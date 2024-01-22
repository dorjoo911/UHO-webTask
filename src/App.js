import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyLabChallenge from "./screens/faculty-challenge/FacultyLabChallenge";
import LabDescription from "./screens/faculty-challenge/lab-description/LabDescription";
import Research from "./screens/faculty-challenge/research/Research";
import Personnel from "./screens/faculty-challenge/personnel/Personnel";
import Publication from "./screens/faculty-challenge/publications/Publication";
import Contact from "./screens/faculty-challenge/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FacultyLabChallenge />} />
        <Route path="/lab-description" element={<LabDescription />} />
        <Route path="/research" element={<Research />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/contact/personnel" element={<Personnel />} />
        <Route path="/personnel/publication" element={<Publication />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personnel/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
