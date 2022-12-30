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
  Modal,
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
      <Modal />
    </div>
  );
};

export default App;
