// Function Currying

const add = (a) => {
  return (b) => {
    return (c) => {
      //   return a + b + c;
      return a * (b + c);
    };
  };
};

// console.log(add(1)(2)(3));

// game

// const level = add(1);

// score

// console.log(level(2)(4));

// level bonus reward

const level = add(5);
console.log(level(2)(2));
console.log(level(5)(6));
console.log(level(1)(3));
console.log(level(8)(5));

/**
 * Benefits
 * Keep referencing
 * Closure
 */

/**
 * Immutability
 * Immer
 */

/*
const arr = ["Ronee", "M", "Rayhan"];

console.log(arr);

arr.pop();

console.log(arr);

arr.push("RoneeMRayhan");

console.log(arr);

const arr2 = [...arr, "Muhammad"];

const arr3 = arr.filter((item) => item !== "Ronee");

console.log(arr);
console.log(arr2);
console.log(arr3);
 */
