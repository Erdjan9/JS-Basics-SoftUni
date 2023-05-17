function AccBalance(input) {
  let i = 0,
    total = 0;
  while (true) {
    let maininput = input[i];
    let money = Number(input[i]);
    if (money < 0) {
      console.log("Invalid operation!");
      break;
    } else if (maininput === "NoMoreMoney") {
      break;
    }
    console.log(`Increase: ${money.toFixed(2)}`);
    total += money;
    i++;
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
AccBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
