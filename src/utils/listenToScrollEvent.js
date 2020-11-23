const listenToScrollEvent = (onSetFixed) => {
  document.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      if (window.pageYOffset > 80) {
        onSetFixed(true);
      } else if (window.pageYOffset < 50) {
        onSetFixed(false);
      }
    });
  });
};
export default listenToScrollEvent;
