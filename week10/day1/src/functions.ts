const returnTwelve = (): number => {
  return 12;
};

const arrayOfNums = (num1: number, num2: number): number[] => {
  return [num1, num2];
};

const calcIncomeTax = (salary: number, state?: string): number => {
  //blank state is false, full state is true
  if (state) {
    const total = salary * 1.3;
    return total * 1.2;
  }
  if (salary > 120_000) return salary * 1.3;
  return salary * 1.25;
};
