function GoldMine(input) {
  let locationsAmount = Number(input[0]);
  let currentIndex = 1;

  for (let i = 0; i < locationsAmount; i++) {
    let expectedAvgGold = Number(input[currentIndex]);
    currentIndex++;
    let daysCount = Number(input[currentIndex]);
    currentIndex++;
    let totalGold = 0;

    for (let j = 0; j < daysCount; j++) {
      let goldPerDay = Number(input[currentIndex]);
      currentIndex++;
      totalGold += goldPerDay;
    }

    let avgGold = totalGold / daysCount;

    if (avgGold >= expectedAvgGold) {
      console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
    } else {
      let neededGold = expectedAvgGold - avgGold;
      console.log(`You need ${neededGold.toFixed(2)} gold.`);
    }
  }
}

GoldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
