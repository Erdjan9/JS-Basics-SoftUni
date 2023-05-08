function Exam(input) {
  let unsatisfactoryGrades = Number(input[0]);
  let index = 1,
    counterForBadGrades = 0,
    counterForProblems = 0,
    totalGrades = 0;
  let exreciseName = input[index];
  let grade = Number(input[index + 1]);

  while (exreciseName !== "Enough") {
    if (grade <= 4) {
      counterForBadGrades++;
    }
    if (counterForBadGrades >= unsatisfactoryGrades) {
      console.log(`You need a break, ${counterForBadGrades} poor grades.`);
      break;
    }
    totalGrades += grade;
    counterForProblems++;
    index += 2;
    exreciseName = input[index];
    grade = Number(input[index + 1]);
    if (exreciseName === "Enough") {
      exreciseName = input[index - 2];
      break;
    }
  }
  let average = totalGrades / counterForProblems;
  if (counterForBadGrades < unsatisfactoryGrades) {
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${counterForProblems}`);
    console.log(`Last problem: ${exreciseName}`);
  }
}
Exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
