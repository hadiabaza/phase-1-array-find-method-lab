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
