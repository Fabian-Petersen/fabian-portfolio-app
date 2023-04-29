import "../src/index.css";
import AppProvider from "./ContextAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { InView } from "react-intersection-observer";
// import ObserverProvider from "./ObserverAPI";

import {
  About,
  Home,
  Projects,
  Contact,
  // Footer,
  Navbar,
  ScrollToTop,
  SinglePage,
} from "./components";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<SinglePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Footer /> */}
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
