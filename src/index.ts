let var1: string;
let var2: number;
let var3: boolean;
let var4: any;
let var5: string | number | boolean; // just among those!!

// If we didn't specify the data type, but we intialized the variable with some data (the compiler reconginze it)
let var6 = "ahmed";
// var6 = 23 // error

let var7: string[]; // array of strings
let var8: boolean[]; // array of booleans
// var8 = true; // error
var8 = [true, false, true]; //it's fine

let var9: (boolean | number)[]; // array of only boolean and number
var9 = [true, 99];

let var10: (string | number | boolean | (string | boolean)[])[]; // multi-dimensional array
var10 = ["one", 2, false, ["one", "two", true]];

// "?" means the paramter is optional!!!
const addNumbers = (a: number, b: number, c: number = 1, d?: number) => {
  return a + b + c;
};
// console.log(addNumbers(1, 1));

// Rest paramter
const addAll = (...args: number[]): number => {
  let result: number = 0;
  for (let num of args) {
    result += num;
  }
  return result;
};
// console.log(addAll(1, 1, 1, 1, 1));

// type key word => just an alias!

type numAndString = number | string;
let var11: string = "ahmed";
let var12: numAndString; // that's it!!!

// Advanced practical on type (alias)!!
// Can we extend the alias? yes
type allPrimitiveDataTypes = numAndString | boolean;

let var13: allPrimitiveDataTypes;
var13 = true;

// Tuple: fixed array length with specific data types
let var14: [number, string, boolean];
var14 = [1, "ahmed", true];

var14.push("test"); // we can push whater we want as it match our data type
// console.log(var14);

// [Note]: If we want to make it unupdatable!!
let var15: readonly [number, string, boolean];
var15 = [1, "ahmed", true];

// var15.push(1) // error

// Void, functions doens't return a value

const logMsg = (msg: string): void => {
  console.log(msg);
  // it returns undefined
};
// console.log("hello, there");

// This function doesn't return undefined
const fail = (): never => {
  throw new Error();
};

// enum
enum ProblemLevel {
  easy = 9,
  medium = easy - 5,
  hard = 5,
}

let lvl: string = "easy";

const showSecs = (value: string = lvl): void => {
  if (value === "easy") {
    console.log(
      `
        The level ${value} offers only ${ProblemLevel.easy}
      `
    );
  } else if (value === "medium") {
    console.log(
      `
        The level ${value} offers only ${ProblemLevel.medium}
      `
    );
  } else {
    console.log(
      `
        The level ${value} offers only ${ProblemLevel.hard}
      `
    );
  }
};
// showSecs("hard");

// annotation with object
let var16: {
  readonly email: string;
  name: string;
  age?: number; // optional
  skills: string[];
  nestedProps: {
    name: string;
    id: number;
  };
} = {
  email: "ahemd@gmail.com",
  name: "ahmed",
  // age: 23,
  skills: ["one", "two"],
  nestedProps: {
    name: "nested prop",
    id: 23423434,
  },
};

// var16.email = "updated@mail.com" // Error

// Interfaces

interface User {
  id: number;
  name: string;
}

interface Moderator extends User {
  role: string | number;
}

interface Admin extends Moderator {
  protect: boolean;
}

let var17: Admin = {
  id: 1234,
  name: "hhhhh",
  role: "admin",
  protect: true,
};

// Classes

class UserClass {
  msg: () => string;

  constructor(
    private userName: string,
    protected salary: number,
    public readonly country: string = "Egypt"
  ) {
    this.msg = function () {
      return `${this.userName}'s salary is ${this.salary}$`;
    };
  }

  // Methods
  sayHi() {
    return `${this.userName} says hi!!`;
  }
}

let var18 = new UserClass("ahmedelgaidi", 1000);

// console.log(var18);

// Classes + interfaces:

interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

class User implements Settings {
  constructor(
    public userName: string,
    public theme: boolean,
    public font: string
  ) {}

  // methods
  save() {
    console.log("saved....");
  }
}

let var19 = new User("Elbotanist", true, "open serf");
// console.log(var19)

// Generics
// Generics makes it easier to write reusable code.

// function returnType<genericType>(value: genericType): genericType {
//   return value;
// }

// // Now, I can control what data type to return

// console.log(returnType<number>("tes"))
// console.log(returnType<string>("test"))
// console.log(returnType<boolean>(true))

function simpleStuff<T>(value: T): T {
  return value;
}


const var20 = simpleStuff<number>(2.222222222222222)
console.log(var20.toFixed(3))