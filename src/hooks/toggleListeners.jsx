export const toggleListeners = (func, type, state, options) => {
  if (window.innerWidth > 1280) window.addEventListener(type, func, options);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1280) {
      window.scrollTo(0, state.scrollTop);
      window.addEventListener(type, func, options);
    } else {
      window.removeEventListener(type, func, options);
    }
  });
};
