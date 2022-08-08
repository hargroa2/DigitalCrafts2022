//arrays
let students: string[] = ["Amanda", "Jason", "Carlos", "Stacy"];
let ages: number[] = [];
ages.push(1);
console.log(ages);

let user = {
  name: "Joe",
  dateOfBirth: "01/01/2000",
};
user.dateOfBirth; //if you type dateofbirth (without uppercase accuracy) it will error

students.map((name) => name.toUpperCase());
