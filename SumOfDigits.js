function SumOfDigits(input) {
  let numAsString = input[0];
  let sumOfNumbers = 0;
  for (i = 0; i < numAsString.length; i++) {
    let numAsNum = Number(numAsString[i]);
    sumOfNumbers += numAsNum;
  }
  console.log(`The sum of the digits is:${sumOfNumbers}`);
}
SumOfDigits(["1234"]);
