function superbowlWin(yearResults) {
  let winningYearResult = yearResults.find(
    (yearResult) => yearResult.result === "W"
  );

  if (winningYearResult === undefined) {
    return undefined;
  } else {
    return winningYearResult.year;
  }
}

// Find takes a callback function
// the call back function takes in an element in the
// array and should return a boolean if it is the element we are looking for
