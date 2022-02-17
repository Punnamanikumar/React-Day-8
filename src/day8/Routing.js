import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import Contact from "./Components/Contact";
import Support from "./Components/Support";
import Student from "./Student";

const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/student/:id" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
