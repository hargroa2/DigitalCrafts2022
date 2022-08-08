const fizzBuzz = (i: number): string | number => {
  if (i % 5 == 0 && 1 % 3 == 0) return "FizzBuzz";
  else if (i % 3 == 0) return "Fizz";
  else if (i % 5 == 0) return "Buzz";
  else return i;
};
fizzBuzz(15);
