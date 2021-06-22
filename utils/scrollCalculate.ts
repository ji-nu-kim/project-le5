const scrollCalculate = (currentY: number, height: number): number => {
  let scrollPercent: number = 0;
  scrollPercent = Number(((currentY + height) / height / 15).toFixed(3));

  return scrollPercent;
};

export default scrollCalculate;
