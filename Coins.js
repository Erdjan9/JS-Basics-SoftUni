function Coins(input) {
  let coins = Number(input[0]);
  let counter = 0;
  while (true) {
    if (coins >= 2) {
      coins -= 2;
      counter++;
    } else if (coins >= 1) {
      coins -= 1;
      counter++;
    } else if (coins >= 0.5) {
      coins -= 0.5;
      counter++;
    } else if (coins >= 0.2) {
      coins -= 0.2;
      counter++;
    } else if (coins >= 0.1) {
      coins -= 0.1;
      counter++;
    } else if (coins >= 0.05) {
      coins -= 0.05;
      counter++;
    } else if (coins >= 0.02) {
      coins -= 0.02;
      counter++;
    } else if (coins >= 0.01) {
      coins -= 0.01;
      counter++;
    } else {
      break;
    }
  }
  console.log(counter);
}
Coins(["0.59"]);
