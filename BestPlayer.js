function BestPlayer(input) {
  let index = 0;
  let playerOrEnd = input[index];
  let playerGoals = input[index + 1];
  let maxGoals = 0;
  let bestPlayer = " ";
  while (playerOrEnd !== "END") {
    if (playerGoals >= 3) {
      console.log(`${playerOrEnd} has scored ${playerGoals} goals.`);
      if (playerGoals >= 10) {
        break;
      }
    }
    if (playerGoals > maxGoals) {
      maxGoals = playerGoals;
      bestPlayer = playerOrEnd;
    }
  }
  if (bestPlayer !== "") {
    console.log(`${bestPlayer} is the best player!`);
    if (maxGoals >= 3) {
      console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    }
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}
BestPlayer(["Neymar", 2, "Ronaldo", 1, "Messi", 3, "END"]);
