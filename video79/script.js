let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Not allowed");
}
let sum = parseInt(a) + parseInt(b);
console.log("The sum is ", sum);
function main() {
  let x = 1;
  try {
    console.log("sum = ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gaya bhai!!");
    return false;
  } finally {
    console.log("files are being closed and db connection is being closed");
  }
}
let c = main();
