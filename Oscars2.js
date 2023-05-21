function Oscars(input) {
  let nameOfActor = input[0];
  let pointsOfAcademy = Number(input[1]);
  let numberOfJudges = Number(input[2]);

  let totalPoints = pointsOfAcademy;
  let diff = 0;

  for (let i = 1; i <= numberOfJudges; i++) {
    let judge = input[i * 2 + 1];
    let points = Number(input[i * 2 + 2]);

    let judgePoints = (judge.length * points) / 2;
    totalPoints += judgePoints;

    if (totalPoints > 1250.5) {
      console.log(
        `Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }

  diff = Math.abs(1250.5 - totalPoints).toFixed(1);
  console.log(`Sorry, ${nameOfActor} you need ${diff} more!`);
}
Oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
