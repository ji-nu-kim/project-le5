const scrollValue = (
  startValue: number,
  startScroll: number,
  currentScroll: number,
  setValue: number,
  option?: boolean,
) => {
  if (option) {
    return startValue - (currentScroll - startScroll) * setValue;
  }
  return startValue + (currentScroll - startScroll) * setValue;
};

export default scrollValue;
