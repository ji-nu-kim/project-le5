const scrollCalculate = (currentY: number, height: number): number[] => {
  let scrollPercent: number = 0;
  let scrollPercent2: number = 0;
  scrollPercent = Number(((currentY + height) / height / 15).toFixed(2));
  scrollPercent2 = Number(((currentY + height) / height / 15).toFixed(3));

  return [currentY, scrollPercent, scrollPercent2];
};

export default scrollCalculate;
