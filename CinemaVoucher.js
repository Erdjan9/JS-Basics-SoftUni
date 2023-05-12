function CV(input) {
  let vaucher = Number(input[0]);
  let index = 1;
  let command = input[index];
  let ascii1 = 0,
    ascii2 = 0;

  while (command !== "End") {
    if (command.length > 8) {
      ascii1 = command.charCodeAt(0);
      ascii2 = command.charCodeAt(1);
    }
    let sumOfAsciis = ascii1 + ascii2;
    vaucher -= sumOfAsciis;
  }
  console.log(command.Length, sumOfAsciis, vaucher);
}
CV(["300", "Captain Marvel", "popcorn", "Pepsi"]);
