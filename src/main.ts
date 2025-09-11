let add = (a: number, b: number): number => {
  return a + b;
};

let sub = function (a: number, b: number) {
  return a - b;
};

interface SubFun {
  (a: number, b: number): number;
}

let mul: SubFun = (a, b) => {
  return a * b;
};

let logMsg = (message: any): void => {
  console.log(message);
};

console.log(logMsg("Hello"));
console.log(add(4, 4));
console.log(sub(4, 4));
console.log(mul(4,4))
