function CleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);

  let toysAmount = 0;
  let moneys = 0;
  let allMoney = 0;
  let brotherMoneys = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      moneys += 10;
      allMoney += moneys;
      brotherMoneys++;
    } else if (i % 2 != 0) {
      toysAmount++;
    }
  }

  let MoneyOfToys = toysAmount * pricePerToy;
  let totalSum = (allMoney + MoneyOfToys) - brotherMoneys;

  let n = totalSum - washingMachinePrice;

  if (n < 0) {
    console.log(`No! ${Math.abs(n).toFixed(2)}`);
  } else {
    console.log(`Yes! ${n.toFixed(2)}`);
  }
}
CleverLily(["21", "1570.98", "3"]);
