import React from "react";
import "../src/index.css";

import { About, Header, Projects, Contact, Footer } from "./components/Index";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
