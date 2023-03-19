import React, { createContext, useContext } from "react";
// import { useInView } from "react-intersection-observer";
// import { InView } from "react-intersection-observer";

// const ObserverAPI = ({ inView, ref }) => {
//   return (
//     <InView>
//       <div ref={ref}>
//         <h2>{`Header inside viewport ${inView}.`}</h2>
//       </div>
//     </InView>
//   );
// };

// export default ObserverAPI;

export const ObserverContext = createContext();

const ObserverProvider = ({ children }) => {
  // const { ref, inView } = useInView();

  // console.log("inView:", inView, ref);
  return (
    <ObserverContext.Provider value={{}}>{children}</ObserverContext.Provider>
  );
};

export const useObserverContext = () => {
  return useContext(ObserverContext);
};

export default ObserverProvider;
