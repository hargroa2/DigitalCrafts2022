//First Duplicate Value Algorithm:
/*
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

- Sets are objects that let you store unique values that can only occur once
- They are ordered based on what the order of insertion is by the add() method
- The has() method checks if a value is in a set
- Pseudo: For every number in the array, if the set has that number already (has()), then return that number. If it's not there yet, add it to the set (add()). If there isn't a repeating number, then return -1.
*/
const firstDuplicateValue = (array) => {
  const set = new Set(); //creates a new set
  for (const i of array) {
    //for each number in the array
    if (set.has(i)) {
      //if the set contains the value of i (returns a boolean)
      console.log(i); //log that number and return it
      return i;
    }
    set.add(i); //inserts i into the set if there isn't an element with the same value already in it
  }
  console.log(-1);
  return -1; //otherwise, return -1
};

/* Test values:
[2, 1, 5, 2, 3, 3, 4]
[1, 1, 2, 3, 3, 2, 2]
[1, 2, 3, 4, 5, 6, 7]
*/
firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]);
