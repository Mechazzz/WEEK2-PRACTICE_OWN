function justShowTheResult(result) {
  console.log(result);
}

function wordCreator(x, y) {
  let finalWord = x + y;

  return finalWord;
}

justShowTheResult(wordCreator("ház", "tető"));
justShowTheResult(wordCreator("ugró", "deszka"));
justShowTheResult(wordCreator("malac", "persely"));

function numberSubstraction(x, y) {
  let substractedValue = 0;
  substractedValue = x - y;

  return substractedValue;
}

justShowTheResult(numberSubstraction(10, 5));

function numberAddition(x, y) {
  let addedValue = 0;
  addedValue = x + y;

  return addedValue;
}

justShowTheResult(numberAddition(10, 5));
