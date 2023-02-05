import React, { createContext, useContext } from "react";
import { useInView } from "react-intersection-observer";

const ObserverProvider = ({ children }) => {
  const [ref1, inView1] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });
  const [ref3, inView3] = useInView({ threshold: 0 });

  // const setRefs = useCallback(
  //   (node) => {
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     ref1(node);
  //     ref2(node);
  //     ref3(node);
  //   },
  //   [ref1, ref2, ref3]
  // );

  const activeSection = [
    { section: "about", active: inView1 },
    { section: "projects", active: inView2 },
    { section: "contact", active: inView3 },
  ];

  return (
    <ObserverContext.Provider value={{ ref1, ref2, ref3, activeSection }}>
      {children}
    </ObserverContext.Provider>
  );
};

export const ObserverContext = createContext();

export const useObserverContext = () => {
  return useContext(ObserverContext);
};

export default ObserverProvider;
