# TypeScript Guide

## What is TypeScript?

A programming language to address the shortcomings of JavaScript. It is built on top of JS and is like a sibling to it.

Benefits:

- Static typing (treats datatypes like Python would. Cannot use a mixmatch of turning a variable from a string to a number etc.)
- Code completion
- Refactoring
- Shorthand notations

Drawbacks:

- Extra compilation step
- Discipline in coding

---

## Setup

If you haven't installed it, type `npm i -g typescript` in your terminal (you must have node installed for npm).

- If you can't get it to work, put `sudo` in front of the entire line above

`tsc -v `

- Tells you what version of TypeScript you have

`tsc --init`

- Makes typescript file and `tsconfig.json`. Always run this at the beginning of the project

`tsc`

- Compiles and makes JS file from .ts file

- Work in src folder (you create this yourself off to the side), outputs in dist folder (automatically made via tsc)

First, create a file called `index.ts`, which upon `tsc` or `tsc index.ts` will compile what you wrote and create an `index.js` file with the vanilla version of what you wrote.

Usually you make your file structure like so:

```
src
|_ index.ts
dist
|_ index.js
tsconfig.json

```

Your tsconfig.json should have the following uncommented:

- `"target": "ES2016"`
  - Specifies the version of JS the compiler will generate. ES2016 is safest for now
- `"module": "commonjs"`
- `"rootDir": "./src"`
  - Where our `.ts` files will be located
- `"outDir": "./dist"`
  - Where our `.js` files will be generated after compilation
- `"noEmitOnError": true`
  - If there are errors in our .ts code, then it will not generate a .js file
- `"esModuleInterop": true`
- `"forceConsistentCasingInFileNames": true`
- `"strict": true`
- `"noUnusedParameters": true`
- `"noImplicitReturns": true`
- `"skipLibCheck": true`

---

## Fundamentals

### Primitive Types

JavaScript vs. TypeScript types:
JS:

- number
- string
- boolean
- null
- undefined
- object

TS:

- any
- unknown
- never
- enum
- tuple

```
let age: number = 1;

let name: string = "Amanda"

let isItTrue: boolean = true;
```

- This will not allow you to change the type of number to anything else outside of number, like what JS usually lets you do via dynamic typing.

### Any Type

```
let arr: any = ["Hi", 3, true]
```

- The any type will allow any sort of value type for a variable (making TS useless)

### Arrays

```
let numbers: number[] = [1, 2, 3];
```

### Tuples

A fix length array where each element has a particular type.

```
let user:[number, string] = [1, 'Amanda'];
```

### Enums

Represensts a list of related constants

```
const enum Size {
    Small = 1, Medium = 2, Large = 3
}

let mySize: Size = Size.Medium;
console.log(mySize)
```

Note that Enums use the Pascal case of typing syntax (rather than camelCase), which begins with a capital letter. Example: SizeOfTshirts

### Functions

```
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000, 2022)
```

- Remember that the type of the function should be void if you are not going to return anything.

- The `optional operator (?)` allows you to make a parameter optional to use and won't cause an error if it is not used.

### Objects and Type Aliases

```
// Version 1:

let employee: {
    id: number,
    name: string,
    retire: (date: Date) => void;
} = {
    readonly id: 1,
    name: 'Amanda',
    retire: (date: Date) => {
        console.log(date);
    }
};
employee id = 0; //throws an error due to readonly

// Version 2 (with type alias):

type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee = {
    readonly id: 1,
    name: 'Amanda',
    retire: (date: Date) => {
        console.log(date);
}


```

- The readonly property keeps us from modifying or updating the value of a variable.
- Type aliases can let us define a custom type and is more readable

### Union Types

We can give a variable or a function parameter more than one type using a single pipe (`string | number`).

```
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight)* 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kgs')
```

- Narrowing is the idea of narrowing down to a specific data type (the if statement above)

### Intersection Types

```
let weight: number & string

//======

type Draggable = {
    drag: () => void;
};

type Resizeable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {};
    reize: () => {};
}
```

- Intersection types are used so that variables can have two or more data types at the same time.

### Literal Types

We use this when we want to limit the values we can assign to a variable.

```
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
```

### Nullable Types

TS is strict with null and undefined types. There is a configuration you can turn off in case it annoys you, but it is advised not to turn this off. Instead, use the union operator to make sure that undefined and null types do not make your code error out.

```
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hi");
    }
}
greet(null)
```

### Optional Chaining

```
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1);
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday)
}

//other way (optional property access operator):

console.log(customer?.birthday?.getFullYear())
```

Optional property access operator: A question mark and chaining period (`?.`), which gets executed only if you have a customer that is null or undefined. Otherwise, it returns something else

Optional element access operator:

`customer?.[0]`

Optional call: Will execute only if log is referencing an actual function. Otherwise, it's undefined

`let log: any = null; log?.('a')`
