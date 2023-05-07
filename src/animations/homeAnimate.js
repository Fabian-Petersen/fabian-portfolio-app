const containerVariants = {
  initialState: {
    opacity: 0,
    x: "-20vw",
  },

  animateState: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      when: "beforeChildren",
    },
  },
};

const animateLine = {
  initialState: {
    x: "-100vw",
    opacity: 0,
  },

  animateState: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      // delay: 1.1,
      type: "spring",
      stiffness: 70,
    },
  },
};

const buttonVariants = {
  initialState: {
    scale: 0,
    opacity: 0,
  },

  animateState: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      // delay: 1,
    },
  },
};

const homeVariants = [containerVariants, animateLine, buttonVariants];

export default homeVariants;
