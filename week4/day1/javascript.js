// console.log("Hello world"); //print statement
// const greetings = ["hi", "hey", "hello"];
// console.table(greetings);

//Variables: let, var, and const
// for (let index = 0; index < greetings.length; index++) {
//   const element = greetings[index];
//   console.log(index);
// }
// console.log(index);

let object = {
  name: "Amanda",
  age: 24,
};

// console.log(Object.values(object));
// console.log(object.age); //dot notation
// console.log(object["age"]); //bracket notation

const greetings = ["hi", "hey", "hello"];
// console.log(greetings[1]);

//Array methods: push(), pop(), shift(), unshift()

// ====== FUNCTIONS ======
// D R Y : Don't Repeat Yourself

// function incrementNumber(number) {
//   return number++;
// }

// incrementNumber(1);

const getName = (name) => {
  //arrow function
  console.log(name);
};

function multiply(name) {
  //receives a function as an argument
  name("racecar");
}

// multiply(getName); //prints out racecar

//==========================================

//bill total, pass it a percentage, give new total with tip added

const tipCalc = (bill) => {
  //   let tip = bill * percentage;
  //   return tip + bill;
  let total = 0;
  if (bill >= 100) {
    total = bill + bill * 0.3;
  } else if (bill >= 50 && bill <= 99) {
    total = bill + bill * 0.25;
  } else if (bill < 0.5) {
    total = bill + bill * 0.2;
  }
  return total.toFixed(2);
};

console.log(tipCalc(10));

//calc only give you total of the bill. if above 100, add 30% gratuity. if between 50 and 99, add 25% gratuity. If below 50%, only add 20% gratuity.

//create a function that receives a number that is guaranteed to be in the range of 1 to 5. Time slot as a string will be like "7:30pm". You need 3 different data sets. Return an array of objects with vip status: timeslot
// output: [{vipStatus: timeslot}]

const reservationList = [];
const vipData = [
  { number: 5, timeslot: "7:30pm" },
  { number: 3, timeslot: "5:30pm" },
  { number: 1, timeslot: "3:30pm" },
  { number: 5, timeslot: "7:30pm" },
];
const makeReservation = (status, time) => {
  // if(status => 4){
  let reservationGuest = {
    vipStatus: status,
    timeslot: time,
  };
  reservationList.push(reservationGuest);
};
for (let index = 0; index < vipData.length; index++) {
  makeReservation(vipData[index].number, vipData[index].timeslot);
}
reservationList.sort((a, b) => b.vipStatus - a.vipStatus);
console.log(reservationList);
