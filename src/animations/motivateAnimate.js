const motivate = {
  initialState: {
    opacity: 0,
    y: "105vh",
  },

  animateState: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.5,
      type: "tween",
    },
  },
};

const motivateVariants = [motivate];

export default motivateVariants;
