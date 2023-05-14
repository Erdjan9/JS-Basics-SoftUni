function BeerAndChips(input) {
  let NameOfFan = input[0];
  let budget = Number(input[1]);
  let amountOfBeers = Number(input[2]);
  let amauntOsChipsPackets = Number(input[3]);

  let beerPrice = amountOfBeers * 1.2;
  let chipsPrice = beerPrice * 0.45;
  let totalChipsPrice = Math.ceil(chipsPrice * amauntOsChipsPackets);
  let totalSum = beerPrice + totalChipsPrice;

  let end = budget - totalSum;
  let end1 = Number(end.toFixed(2));
  if (totalSum <= budget) {
    console.log(
      `${NameOfFan} bought a snack and has ${end1.toFixed(2)} leva left.`
    );
  } else if (totalSum > budget) {
    console.log(`${NameOfFan} needs ${Math.abs(end1).toFixed(2)} more leva!`);
  }
}
BeerAndChips(["George", "10", "2", "3"]);
