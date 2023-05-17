function TreckingMania(input) {
  let numberOfGroups = Number(input[0]);
  let amountOfPeopleInGroup = 0;
  let Musala = 0,
    Monblan = 0,
    Kilimandjaro = 0,
    K2 = 0,
    Everest = 0;

  for (let i = 1; i <= numberOfGroups; i++) {
    amountOfPeopleInGroup = Number(input[i]);
    if (amountOfPeopleInGroup <= 5) {
      Musala += amountOfPeopleInGroup;
    } else if (amountOfPeopleInGroup <= 12) {
      Monblan += amountOfPeopleInGroup;
    } else if (amountOfPeopleInGroup <= 25) {
      Kilimandjaro += amountOfPeopleInGroup;
    } else if (amountOfPeopleInGroup <= 40) {
      K2 += amountOfPeopleInGroup;
    } else if (amountOfPeopleInGroup > 40) {
      Everest += amountOfPeopleInGroup;
    }
  }

  let allPeople = Musala + Monblan + Kilimandjaro + K2 + Everest;
  
  percentageOfMusala = (Musala / allPeople) * 100;
  percentageOfMonblan = (Monblan / allPeople) * 100;
  percentageOfKilimandjaro = (Kilimandjaro / allPeople) * 100;
  percentageOfK2 = (K2 / allPeople) * 100;
  percentageOfEverest = (Everest / allPeople) * 100;

  console.log(`${percentageOfMusala.toFixed(2)}%`);
  console.log(`${percentageOfMonblan.toFixed(2)}%`);
  console.log(`${percentageOfKilimandjaro.toFixed(2)}%`);
  console.log(`${percentageOfK2.toFixed(2)}%`);
  console.log(`${percentageOfEverest.toFixed(2)}%`);
}
TreckingMania(["5", "25", "41", "31", "250", "6"]);
