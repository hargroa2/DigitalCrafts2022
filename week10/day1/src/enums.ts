//enumerate -> mention a number of things one by one
enum Directions {
  up = 1,
  down = 1,
  left = 1,
  right = 1,
}

// const right = Directions.right;
// const left = Directions.left;

const enum TshirtSizes {
  Small = "s",
  Medium = "m",
  Large = "l",
}
const small = TshirtSizes.Small;
const medium = TshirtSizes.Medium;

if (TshirtSizes.Medium === "m") {
  console.log("Medium shirt");
}

// enum allows you to create a set number of choices for your object

const enum Ages {
  young = 1,
  adult,
  old,
}
