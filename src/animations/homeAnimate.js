const containerVariants = {
  initialState: {
    opacity: 0,
    scale: 0,
    rotate: "90deg",
  },

  animateState: {
    opacity: 1,
    scale: 1,
    rotate: "0deg",

    transition: {
      duration: 1,
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
      duration: 0.5,
      delay: 1.01,
      type: "spring",
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
      delay: 1.01,
    },
  },
};

const homeVariants = [containerVariants, animateLine, buttonVariants];

export default homeVariants;
