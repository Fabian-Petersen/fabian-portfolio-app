import React from "react";
import "../src/index.css";
import AppProvider from "./ContextAPI";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Projects,
  Contact,
  Footer,
  // SinglePage,
} from "./components/Index";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Home />
        <About />
        <Projects />
        {/* <Route path="/projects/:projectId" element={<SinglePage />} /> */}
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  );
};

export default App;
