function MaxNum(input) {
  let index = 1,
    difference = 0;
  let MaxNum = Number(input[0]);
  let inputItems = input[index];
  while (inputItems !== "Stop") {
    difference = Number(input[index]);

    if (MaxNum < difference) {
      MaxNum = Number(input[index]);
    }
    inputItems = input[index];
    index++;
  }
  console.log(MaxNum);
}
MaxNum(["100", "99", "80", "70", "Stop"]);
