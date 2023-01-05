import React from "react";
import "../src/index.css";
import AppProvider from "./ContextAPI";

import { About, Header, Projects, Contact, Footer } from "./components/Index";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </AppProvider>
    </div>
  );
};

export default App;
