const parentContainer = {
  initialState: {
    opacity: 1,
  },

  animateState: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childContainer = {
  initialState: {
    opacity: 0,
    x: "105vw",
  },

  animateState: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const iconPageLinksVariants = [parentContainer, childContainer];

export default iconPageLinksVariants;
