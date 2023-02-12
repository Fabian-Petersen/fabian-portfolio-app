const container = {
  initialState: {
    opacity: 0,
  },

  animateState: {
    opacity: 1,

    transition: {
      //   duration: 1,
      delayChildren: 0.5,
      type: "tween",
    },
  },
};

const item = {
  initialState: {
    opacity: 0,
  },

  animateState: {
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const skillsContainer = {
  initialState: {
    x: "-100vw",
  },

  animateState: {
    x: "0vw",

    transition: {
      delayChildren: 0.3,
    },
  },
};

const skill = {
  initialState: { x: "-100vw" },
  animateState: {
    x: 0,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const aboutVariants = [container, item, skillsContainer, skill];

export default aboutVariants;
