const parentContainer = {
  initialState: {
    opacity: 0,
  },

  animateState: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3,
      type: "spring",
      duration: 1.2,
    },
  },
};

const childContainer = {
  initialState: {
    opacity: 0,
    scale: 0,
  },

  animateState: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
  exit: {
    scale: 0,
  },
};

const projectVariants = [parentContainer, childContainer];

export default projectVariants;
