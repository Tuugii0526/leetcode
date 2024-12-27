const mix = (init) => {
  let first = init;
  increment: () => ++init;
  decrement: () => --init;
  reset: () => (init = first);
  return { increment, decrement, reset };
};
