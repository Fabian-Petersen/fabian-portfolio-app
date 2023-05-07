const parentContainer = {
  initialState: {
    opacity: 0,
  },

  animateState: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childContainer = {
  initialState: {
    opacity: 0,
    scale: 0,
    x: 150,
  },

  animateState: {
    opacity: 1,
    scale: 1,
    x: 0,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const buttonVariants = [parentContainer, childContainer];

export default buttonVariants;
