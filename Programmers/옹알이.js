function solution(babbling) {
  var answer = 0;
  let possibility = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let text = babbling[i];

    for (let j in possibility) {
      if (babbling[i].includes(possibility[j])) {
        text = text.replace(possibility[j], "");
      }
    }

    if (text.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
