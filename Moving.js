function Mooving(input) {
  let widthOfFreeSpace = Number(input[0]);
  let lengthOfFreeSpace = Number(input[1]);
  let heighOfFreeSpace = Number(input[2]);

  let index = 3;
  let boxes = Number(input[index]);
  let command = input[index];

  let space = widthOfFreeSpace * lengthOfFreeSpace * heighOfFreeSpace;
  while (command !== "Done") {
    space -= boxes;
    if (space < 0) {
      console.log(
        `No more free space! You need ${Math.abs(space)} Cubic meters more.`
      );
      break;
    }
    index++;
    boxes = Number(input[index]);
    command = input[index];
  }
  if (space > 0) {
    console.log(`${space} Cubic meters left.`);
  }
}
Mooving(["10", "1", "2", "4", "6", "Done"]);
