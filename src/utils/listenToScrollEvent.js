export const listenToScrollEvent = (onSetFixed) => {
  document.addEventListener("scroll", () => {
    return requestAnimationFrame(() => {
      if (window.pageYOffset > 80) {
        onSetFixed(true);
      } else if (window.pageYOffset < 50) {
        onSetFixed(false);
      }
    });
  });
};
export const removeScrollEvent = (request) => {
  document.removeEventListener("scroll", () => {});
  cancelAnimationFrame(request);
};

