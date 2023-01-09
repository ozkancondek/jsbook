const frequencyFinder = (str) => {
  let charArr = Array.from(str);
  let totalChar = charArr.length;
  const charNum = {};
  let freqArr = {};
  charArr.forEach((e) => (charNum[e] ? charNum[e]++ : (charNum[e] = 1)));
  for (const element in charNum) {
    charNum[element] =
      ((charNum[element] / totalChar) * 100).toFixed(0) +
      "%" +
      "-" +
      "#".repeat((totalChar / charNum[element]).toFixed(0));
  }

  return charNum;
};

console.log(frequencyFinder("özkan cöndek"));
