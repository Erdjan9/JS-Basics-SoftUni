function Exam(input) {
  let studentsAmount = input[0];
  let counterForTS = 0,
    counterForAVG = 0,
    counterForBS = 0,
    counterForWs = 0;
  let sumOfGrades = 0;
  for (let i = 1; i <= studentsAmount; i++) {
    let grade = input[i];
    sumOfGrades += grade;
    if (grade >= 5) {
      counterForTS++;
    } else if ((grade >= 4) & (grade <= 4.99)) {
      counterForAVG++;
    } else if ((grade >= 3) & (grade <= 3.99)) {
      counterForBS++;
    } else if (grade < 3) {
      counterForWs++;
    }
  }
  let topStudents = (counterForTS / studentsAmount) * 100;
  let avgStudents = (counterForAVG / studentsAmount) * 100;
  let badStrudents = (counterForBS / studentsAmount) * 100;
  let worstStudents = (counterForWs / studentsAmount) * 100;

  let average = Math.abs(sumOfGrades / studentsAmount).toFixed(2);

  console.log(`Top students: ${topStudents.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${avgStudents.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${badStrudents.toFixed(2)}%`);
  console.log(`Fail: ${worstStudents.toFixed(2)}%`);
  console.log(`Average: ${average}`);
}
Exam([6, 2, 3, 4, 5, 6, 2.2]);
