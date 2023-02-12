import React from "react";
import "../src/index.css";
import AppProvider from "./ContextAPI";
// import ObserverProvider from "./ObserverAPI";
// import { useActiveMenu } from "react-active-menu";
// import { useGlobalContext } from "./ContextAPI";
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
  // const { registerContainer } = useActiveMenu;
  // const { theme } = useGlobalContext();
  // console.log(theme);
  return (
    <div className="dark">
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
