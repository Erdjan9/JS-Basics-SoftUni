function Combinations(input) {
  let validCombinationsCount = 0;
  let n = Number(input[0]);

  for (let i = 0; i <= n; i++) {
    for (let a = 0; a <= n; a++) {
      for (let b = 0; b <= n; b++) {
        if (i + a + b === n) {
          validCombinationsCount++;
        }
      }
    }
  }
  console.log(validCombinationsCount);
}
Combinations(["20"]);
