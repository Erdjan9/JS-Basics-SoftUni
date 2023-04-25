function SumOf2Numbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0,
    condition = false;

  for (let i1 = start; i1 <= end; i1++) {
    for (let i2 = start; i2 <= end; i2++) {
      let sum = i1 + i2;
      counter++;
      if (sum === magicNumber) {
        console.log(
          `Combination N:${counter} (${i1} + ${i2} = ${magicNumber})`
        );
        condition = true;
        break;
      }
    }
    if (condition === true) {
      break;
    }
  }
  if (condition === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
SumOf2Numbers(["23", "24", "20"]);
