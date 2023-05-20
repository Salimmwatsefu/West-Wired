export const navVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 9,
      delay: 0.2
    },
  },
};

export const heroSectionVariants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    },

  },
}


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const imageVariants = {
  visible: {
    WebkitMaskImage: visibleMask,
    maskImage: visibleMask,
    transition: {
      duration: 2,
      delay: 1.3
    }
  },
  hidden: {
    WebkitMaskImage: hiddenMask,
    maskImage: hiddenMask,
    transition: {
      duration: 1,
      delay: 1
    }
  }
};