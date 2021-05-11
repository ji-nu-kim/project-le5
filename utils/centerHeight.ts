export const centerHeight = (element: SVGSVGElement, height: number): boolean => {
  let top = element.getBoundingClientRect().top + element.height.baseVal.value / 2;
  if (top < height) {
    return true;
  } else {
    return false;
  }
};
