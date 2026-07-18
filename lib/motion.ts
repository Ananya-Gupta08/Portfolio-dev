export const motion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.65,
  },
  spring: {
    type: "spring" as const,
    stiffness: 360,
    damping: 30,
    mass: 0.8,
  },
};
