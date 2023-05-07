const skillsParentContainer = {
  initialState: {
    opacity: 0,
    transition: {
      // staggerChildren: 0.3,
    },
  },

  animateState: (i) => ({
    opacity: 1.01,
    transition: {
      staggerChildren: 0.3,
      delay: i * 0.2,
    },
  }),
};

const skillsChildContainer = {
  initialState: {
    y: -200,
    opacity: 0,
  },
  animateState: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 20,
    },
  },
};

const skillsHeading = {
  initialState: {
    opacity: 0,
    y: -20,
  },

  animateState: (i) => ({
    opacity: 1.01,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delay: i * 0.2,
    },
  }),
};

const headingMySkills = {
  initialState: {
    opacity: 0,
    scale: 0,
    staggerChildren: 0.2,
  },

  animateState: {
    opacity: 1.01,
    scale: 1,

    transition: {
      duration: 1.5,
      type: "tween",
    },
  },
};

const skillsIconName = {
  initialState: {
    opacity: 0,
    y: 20,
  },

  animateState: {
    opacity: 1.01,
    y: 0,

    transition: {
      duration: 0.5,
      delayChildren: 0.2,
    },
  },
};

const aboutInfo = {
  initialState: {
    opacity: 0,
    x: "-25vw",
  },

  animateState: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.5,
      type: "tween",
    },
  },
};

const lineVariant = {
  initialState: {
    scale: 0,
  },

  animateState: {
    scale: 1,

    transition: {
      duration: 1.5,
      delay: 1.6,
      // type: "tween",
    },
  },
};

const aboutVariants = [
  skillsParentContainer,
  skillsChildContainer,
  skillsHeading,
  headingMySkills,
  skillsIconName,
  aboutInfo,
  lineVariant,
];

export default aboutVariants;
