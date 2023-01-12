import React from "react";
import "../src/index.css";
import AppProvider from "./ContextAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Header,
  Projects,
  Contact,
  Footer,
  SinglePage,
  Navbar,
} from "./components/Index";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:projectId' element={<SinglePage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
