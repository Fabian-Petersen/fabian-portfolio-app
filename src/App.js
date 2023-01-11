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
} from "./components/Index";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Header />} />
          </Routes>
          <About />
          <Projects />
          <SinglePage />
          <Routes>
            <Route path='/project/:id' element={<SinglePage />} />
          </Routes>
          <Contact />
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
