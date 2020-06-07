export {};

const nextYearIncome = (currentIncome: number, rate: number = 1.1) => {
  return currentIncome * rate;
};

console.log(nextYearIncome(1000));
