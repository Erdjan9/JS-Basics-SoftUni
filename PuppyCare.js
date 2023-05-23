function PuppyCare(input) {
  let foodInKg = Number(input[0]);
  let index = 1;
  let command = input[index];
  let eatedGrams = Number(input[index]);

  let totalgrams = 0;

  while (command !== "Adopted") {
    totalgrams += eatedGrams;
    index++;
    command = input[index];
    eatedGrams = Number(input[index]);
  }
  let foodInGrams = foodInKg * 1000;
  let end = foodInGrams - totalgrams;
  if (foodInGrams >= totalgrams) {
    console.log(`Food is enough! Leftovers: ${end} grams.`);
  } else if (foodInGrams < totalgrams) {
    console.log(`Food is not enough. You need ${Math.abs(end)} grams more.`);
  }
}
PuppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
