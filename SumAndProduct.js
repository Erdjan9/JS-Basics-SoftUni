function SumAndProduct(input) {
  let n;
  if (Array.isArray(input)) {
    n = input[0];
  } else {
    n = input;
  }
  let found = false;
  for (let a = 1; a <= 9; a++) {
    for (let b = 9; b >= a; b--) {
      for (let c = 0; c <= 9; c++) {
        for (let d = 9; d >= c; d--) {
          const sum = a + b + c + d;
          const product = a * b * c * d;

          if (sum === product && n % 10 === 5) {
            console.log(`${a}${b}${c}${d}`);
            found = true;
            break;
          }

          if (product % sum === 0 && product / sum === 3 && n % 3 === 0) {
            console.log(`${d}${c}${b}${a}`);
            found = true;
            break;
          }
        }
        if (found === true) {
          break;
        }
      }
      if (found === true) {
        break;
      }
    }
    if (found === true) {
      break;
    }
  }
  if (found === false) {
    console.log("Nothing found");
  }
}
SumAndProduct(123);
