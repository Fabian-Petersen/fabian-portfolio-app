const parentContainerHeading = {
  initialState: {
    opacity: 0,
    scale: 0,
  },

  animateState: {
    opacity: 1,
    scale: 1,

    transition: {
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};

const childContainerHeading = {
  initialState: {
    scale: 0,
    opacity: 0,
  },

  animateState: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};

const ContainerHeadingTwo = {
  initialState: {
    scale: 0,
    opacity: 0,
  },

  animateState: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};

const headingVariants = [
  parentContainerHeading,
  childContainerHeading,
  ContainerHeadingTwo,
];

export default headingVariants;
