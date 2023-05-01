function OldLibrary(input) {
  let index = 0,
    counter = 0;
  let favoriteBook = input[index];
  index++;
  let otherBooks = input[index];
  while (favoriteBook !== otherBooks) {
    if (otherBooks == `No More Books`) {
      console.log(`The book you search is not here!`);
      console.log(`You checked ${counter} books.`);
      break;
    }
    if (favoriteBook !== otherBooks) {
      counter++;
    }
    index++;
    otherBooks = input[index];
  }
  if (favoriteBook == otherBooks) {
    console.log(`You checked ${counter} books and found it.`);
  }
}
OldLibrary([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "The Spot",
  "No More Books",
]);
