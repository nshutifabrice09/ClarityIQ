import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlasmicSignin from "./components/plasmic/mayfair_clarity_iq/msignin";
import PlasmicDashboard from "./components/plasmic/mayfair_clarity_iq/mdashboard";
import PlasmicSignup from "./components/plasmic/mayfair_clarity_iq/msignup";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlasmicDashboard />} />
        <Route path="/signin" element={<PlasmicSignin />} />
        <Route path="/signup" element={<PlasmicSignup />} />
      </Routes>
    </Router>
  );
}

export default Index;
