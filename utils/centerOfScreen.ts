const centerOfScreen = (element: SVGSVGElement, height: number): boolean => {
  let top = element.getBoundingClientRect().top + element.height.baseVal.value / 2;
  if (top < height + 100) {
    return true;
  } else {
    return false;
  }
};

export default centerOfScreen;
