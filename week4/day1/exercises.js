function lvl5exercise1() {
  // Push the string "hello" into the array and return the array
  const arr = [1, "adam"];
  arr.push("Hello");
  console.log(arr);
}

// lvl5exercise1();

function lvl5exercise2() {
  // Remove the last element from the array and return the array
  const arr2 = [1, "adam"];
  arr2.pop();
  console.log(arr2);
}

// lvl5exercise2();

function lvl5exercise3() {
  // Return the length of the array
  const arr3 = [1, "adam"];
  console.log(arr3.length);
}

// lvl5exercise3();

function lvl5exercise4() {
  // Return the index of item "adam" in the array
  const arr4 = [1, "adam"];
  console.log(arr4.indexOf("adam"));
}

// lvl5exercise4();

// ================================================
function lvl6exercise1(num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  // use a switch statement
  switch (num) {
    case 1:
      console.log("hello");
      break;
    case 2:
      console.log("world");
      break;
    default:
      console.log("bye");
  }
}

// lvl6exercise1(1);

function lvl6exercise2() {
  // Push 10 'hello' strings into the array using a for loop, then return it
  const helloArray = [];
  for (let i = 1; i <= 10; i++) {
    helloArray.push("hello");
  }
  console.log(helloArray);
}

// lvl6exercise2();

function lvl6exercise3() {
  // Empty this array using a while loop and return it
  const arrayEmpty = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];
  while (arrayEmpty.length !== 0) {
    arrayEmpty.pop();
  }
  console.log(arrayEmpty);
}

// lvl6exercise3();
//====================================

// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

const finalFunction = (numberOfTimes) => {
  const myArray = [];
  for (let i = 0; i < numberOfTimes; i++) {
    myArray.push("string");
  }
  if (numberOfTimes < 0) {
    myArray = [];
    console.log(myArray);
  }
  console.log(myArray);
};

// finalFunction(2);

//Mul problem
//===============================
// const mul = (num1, num2, num3) => {
//   console.log(num1 * num2 * num3);
// };

// mul(2, 3, 4);

function mul(x) {
  return function (y) {
    //anon
    return function (z) {
      //anon
      return x * y * z;
    };
  };
}

mul(6)(5)(7);
// Look up currying

// const mull = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };
