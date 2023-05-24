function Salary(input) {
  let numberOfTabs = Number(input[0]);
  let salaryAmount = Number(input[1]);

  let totalNumOfTabs = numberOfTabs + 1;

  for (let i = 2; i <= totalNumOfTabs; i++) {
    let n = input[i];
    if (n === "Facebook") {
      salaryAmount -= 150;
    } else if (n === "Instagram") {
      salaryAmount -= 100;
    } else if (n === "Reddit") {
      salaryAmount -= 50;
    }
  }
  if (salaryAmount > 0) {
    console.log(salaryAmount);
  } else if (salaryAmount <= 0) {
    console.log("You have lost your salary.");
  }
}
Salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
