export const useSmoothScroll = () => {
  const easeOutCubic = (
    currentIteration,
    startValue,
    changeInValue,
    totalIterations
  ) => {
    return (
      changeInValue *
        (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
      startValue
    );
  };

  const shouldUseNativeBehaviour = () =>
    'scrollBehavior' in document.documentElement.style ||
    'msGridRow' in document.documentElement.style;

  const scrollToY = y => {
    if (shouldUseNativeBehaviour()) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: y,
      });
      return;
    }

    const scrollContainer = document.documentElement;

    // with animation
    const from = scrollContainer.scrollTop;
    let by = y - scrollContainer.scrollTop;
    if (from < y) {
      if (
        y >
        scrollContainer.scrollHeight - scrollContainer.clientHeight
      ) {
        by =
          scrollContainer.scrollHeight -
          scrollContainer.clientHeight -
          scrollContainer.scrollTop;
      }
    }

    let currentIteration = 0;

    /**
     * get total iterations
     * 60 -> requestAnimationFrame 60/second
     * second parameter -> time in seconds for the animation
     **/
    let animIterations = Math.round(60 * 0.5);

    const doScroll = () => {
      const value = easeOutCubic(
        currentIteration,
        from,
        by,
        animIterations
      );
      scrollContainer.scrollTop = value;
      currentIteration++;
      if (currentIteration < animIterations) {
        requestAnimationFrame(doScroll);
      }
    };

    doScroll();
  };

  return {
    scrollToTop: () => scrollToY(0),
    scrollToId: id => {
      const element = document.querySelector(id);
      scrollToY(element.offsetTop);
    },
  };
};
