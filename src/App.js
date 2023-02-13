import React from "react";
import "../src/index.css";
import AppProvider from "./ContextAPI";

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
    <AppProvider>
      <Home />
      <About />
      <Projects />
      {/* <Route path="/projects/:projectId" element={<SinglePage />} /> */}
      <Contact />
      <Footer />
    </AppProvider>
  );
};

export default App;
