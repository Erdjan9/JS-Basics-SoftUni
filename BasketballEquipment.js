function main(input) {
  let annualFee = Number(input[0]);

  let basketballShoes = annualFee * 0.6;
  let basketballEquipment = basketballShoes * 0.8;
  let basketballBall = basketballEquipment / 4;
  let basketballaccessories = basketballBall / 5;

  let totalPrice =
    annualFee +
    basketballShoes +
    basketballEquipment +
    basketballBall +
    basketballaccessories;

  console.log(totalPrice);
}
main(["365"]);
