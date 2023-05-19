function Graduaton(input) {
  let StudentName = input[0];
  let Grade = Number(input[1]);
  let index = 2,
    totalGrade = 0,
    counter = 1,
    finalGrade = 0;
  while (Grade >= 4) {
    totalGrade += Grade;
    Grade = Number(input[index]);
    index++;
    counter++;
  }
  if (counter === 13) {
    finalGrade = totalGrade / (input.length - 1);
    console.log(
      `${StudentName} graduated. Average grade: ${finalGrade.toFixed(2)}`
    );
  } else {
    console.log(`${StudentName} has been excluded at ${counter} grade`);
  }
}
Graduaton(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
