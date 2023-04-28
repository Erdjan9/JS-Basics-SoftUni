function Steps(input) {
  let index = 0,
    totalSteps = 0,
    counter = 0,
    inputLength = input.length;
  let command = input[index];
  let steps = Number(input[index]);
  while (command !== "Going home") {
    counter++;
    totalSteps += steps;
    index++;
    steps = Number(input[index]);
    command = input[index];
    if (counter === inputLength) {
      break;
    }
  }
  if (command === "Going home") {
    index++;
    steps = Number(input[index]);
    totalSteps += steps;
  }
  if (totalSteps >= 10000) {
    totalSteps -= 10000;
    console.log("Goal reached! Good job!");
    console.log(`${Math.abs(totalSteps)} steps over the goal!`);
  } else if (totalSteps < 10000) {
    totalSteps -= 10000;
    console.log(`${Math.abs(totalSteps)} more steps to reach goal.`);
  }
}
Steps(["1500", "300", "2500", "3000", "200"]);
