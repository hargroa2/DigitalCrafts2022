//ternary operator
//const data = iftruthy ? do this : do this if falsy
const admin = "joe";
const username = admin === "joe" ? "jwfrasier" : "rrozier";
console.log(username);
//can make a variable that is somewhat dynamic.
const loggedIn = username === "joe" && "jwfrasier"; //will return null if either is not true

//OR operator ||
const permitToStay = "adult" || "child"; //if no input, it will be child

const array1 = ["John", "Easton", "Maci"];
const array2 = ["Emily", "Amanda", "Katie"];
//const students = array1.concat(array2); //joins 2 arrays together
const students = [...array1, ...array2]; //spread operator
// console.log(students);

const notANumber = "1";
// console.log(typeof +notANumber); //unary operator

// students.forEach((element) => {
//   element.toUpperCase();
// });

//map loops through everything and puts an array around all of it
const upperCaseStudents = students.map((student) => student.toUpperCase());
console.log(upperCaseStudents);

const googleEmployee = {
  name: "Sundar Pichai",
  status: "ceo",
  salary: "1 billion dollars",
  projects: [
    { name: "project x" },
    { name: "google fi" },
    { name: "google maps 2.0" },
  ],
};

const noogleEmployee = {
  name: "Carlos Silva",
  status: "noogler",
  salary: "not 1 billion",
  department: "google cloud",
};

//optional chain ? will check if something is there and safeguards you in case it breaks your code
const allEmployees = [googleEmployee, noogleEmployee];
allEmployees.forEach((emp) =>
  console.log(emp?.projects ? emp.projects[0] : emp.department)
); //if my object has projects on it, print the first one; otherwise, if it is falsy, print out the department
console.log(allEmployees);

//reduce: an array method that lets you do so many things. It is the most powerful one you can have
