function sayHello() {
  console.log("Hello");
}

export function addTwoNumbers(x, y) {
  sayHello();
  console.log(x);
  console.log(y);
  console.log(x + y);
  return x + y;
}
