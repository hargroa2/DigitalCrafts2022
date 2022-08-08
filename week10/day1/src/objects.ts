let person: {
  name: string;
} = {
  name: "Joe",
};

//Type alias
type User = {
  name: string;
  username: string;
  age?: number;
  emailAddress?: string;
  //   [k: string]: any; //Whatever keys or values you put in, let it happen and let you add whatever you want to pass in as long as the key (k) is a string and adds as many as you want (infinitely)
  //If you don't know what the keys will be called or the type of data it will be then you can use this in your object
};
// The ? makes the key value optional

let amanda: User = {
  name: "Amanda",
  username: "lizardgurl52xd",
  age: 20,
  emailAddress: "lizardsrox@yahoo.com",
};

let west: User = {
  name: "West",
  username: "westdad",
};

type Carpenter = {
  companyName: string;
  readonly id: number;
};

let carlos: Carpenter = {
  companyName: "ABC company",
  id: 1001,
};

//Make a list of carpenters with the type of Carpenter only
let listOfCarpenters: Carpenter[] = [];
listOfCarpenters.push();

type Password = {
  password: string | number;
  securityClearance: "Basic" | "Top Secret";
};

type SoftwareEngineer = {
  readonly id: number;
  password: Password;
};

const blke: SoftwareEngineer = {
  id: 12201,
  password: {
    password: 7777,
    securityClearance: "Basic",
  },
};

//user type id, password, email, createdAt, updatedAt. Create a listOfUsers that accepts that type of data or a masterUser with an id, password,e mail, createdAt, and updatedAt but have a clearanceLevel that is either "top secret" or "basic"

type Users = {
  id: number;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

//takes in all that is in Users and adds clearance level for just MasterUser
type MasterUser = Users & {
  clearanceLevel: string;
};

let listOfUsers: MasterUser[] | User[] = [];

let Stacy: MasterUser = {
  id: 1,
  password: "password",
  email: "leavemealone@gmail",
  createdAt: new Date(),
  updatedAt: new Date(),
  clearanceLevel: "top secret",
};
