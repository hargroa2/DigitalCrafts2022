const userIds = [
  {
    id: "b6809de6-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a0b6-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a1e2-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a2fa-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a3fe-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a7c8-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a8ea-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680aa0c-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680ab2e-1743-11ed-861d-0242ac120002",
  },
];

const usersToAssign = [
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
];

// type formattedUser = {
//   name: string;
//   dept: string;
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
//   userVerification?: any;
// };

// let someone: formattedUser = {
//   name: usersToAssign[0].name,
//   dept: "software",
//   id: userIds[0].id,
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   userVerification: (name: string, id: string) => {
//     if (name && id) {
//       return true;
//     }
//     return false;
//   },
// };

type AssignedUsers = {
  name: string;
  id: string;
};

const assignIds = (ids: { id: string }[]): AssignedUsers[] => {
  const assignedIdsAndUsers: AssignedUsers[] = ids.map((idObj, i) => {
    return { name: usersToAssign[i].name, id: idObj.id };
  });
  return assignedIdsAndUsers;
};

// 3 functions
const listOfNames = ["sam", "john", "joe"];

let replaceNames = (): any => {
  for (let i = 0; i < usersToAssign.length; i++) {
    usersToAssign[i].name = listOfNames[i];
  }
};

replaceNames();

// assign IDs to users
// replace all users with the name "user" to a random name generated
// format the user to send to DB
// userVerifcation func
// I should be able to pass the name of the user and the id, and it should match one of these id's and the name should match one of the names in your list
// const userVerication = (id, name) => {
// check if the name is in the name list
// check if the id is in the id list
// if it passes all test, it returns true, else false
// };
