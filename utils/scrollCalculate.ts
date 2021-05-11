const scrollCalculate = (currentY: number, height: number): number[] => {
  let scrollPercent: number = 0;
  scrollPercent = Number(((currentY + height) / height / 15).toFixed(2));

  return [currentY, scrollPercent];
};

export default scrollCalculate;
