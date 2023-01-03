import React from "react";
import "../src/index.css";

import {
  About,
  Navbar,
  Header,
  SideBar,
  Projects,
  Contact,
  Footer,
} from "./components/Index";

const App = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
