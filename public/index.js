"use strict";
let var1;
let var2;
let var3;
let var4;
let var5;
let var6 = "ahmed";
let var7;
let var8;
var8 = [true, false, true];
let var9;
var9 = [true, 99];
let var10;
var10 = ["one", 2, false, ["one", "two", true]];
const addNumbers = (a, b, c = 1, d) => {
    return a + b + c;
};
const addAll = (...args) => {
    let result = 0;
    for (let num of args) {
        result += num;
    }
    return result;
};
let var11 = "ahmed";
let var12;
let var13;
var13 = true;
let var14;
var14 = [1, "ahmed", true];
var14.push("test");
let var15;
var15 = [1, "ahmed", true];
const logMsg = (msg) => {
    console.log(msg);
};
const fail = () => {
    throw new Error();
};
var ProblemLevel;
(function (ProblemLevel) {
    ProblemLevel[ProblemLevel["easy"] = 9] = "easy";
    ProblemLevel[ProblemLevel["medium"] = 4] = "medium";
    ProblemLevel[ProblemLevel["hard"] = 5] = "hard";
})(ProblemLevel || (ProblemLevel = {}));
let lvl = "easy";
const showSecs = (value = lvl) => {
    if (value === "easy") {
        console.log(`
        The level ${value} offers only ${ProblemLevel.easy}
      `);
    }
    else if (value === "medium") {
        console.log(`
        The level ${value} offers only ${ProblemLevel.medium}
      `);
    }
    else {
        console.log(`
        The level ${value} offers only ${ProblemLevel.hard}
      `);
    }
};
let var16 = {
    email: "ahemd@gmail.com",
    name: "ahmed",
    skills: ["one", "two"],
    nestedProps: {
        name: "nested prop",
        id: 23423434,
    },
};
let var17 = {
    id: 1234,
    name: "hhhhh",
    role: "admin",
    protect: true,
};
class UserClass {
    constructor(userName, salary, country = "Egypt") {
        this.userName = userName;
        this.salary = salary;
        this.country = country;
        this.msg = function () {
            return `${this.userName}'s salary is ${this.salary}$`;
        };
    }
    sayHi() {
        return `${this.userName} says hi!!`;
    }
}
let var18 = new UserClass("ahmedelgaidi", 1000);
class User {
    constructor(userName, theme, font) {
        this.userName = userName;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log("saved....");
    }
}
let var19 = new User("Elbotanist", true, "open serf");
function simpleStuff(value) {
    return value;
}
const var20 = simpleStuff(2.222222222222222);
console.log(var20.toFixed(3));
