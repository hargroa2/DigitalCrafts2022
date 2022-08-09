console.log("animal");
//birds
//cows
//dogs
//cats

type Mammals = {
  readonly legs: number;
  name: string;
  weight: 25 | 300;
  hair: boolean;
};

type Birds = {
  readonly legs: 2;
  name: string;
  weight: 3 | 10;
  feathers: boolean;
};

type Animals = Birds | Mammals;

const eagle: Animals = {
  legs: 2,
  name: "Bald Eagle America",
  weight: 3,
  feathers: true,
};

const rhino: Animals = {
  legs: 8,
  name: "Big Rhino",
  weight: 300,
  hair: false,
};
