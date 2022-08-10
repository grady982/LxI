/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  // analysis pattern, position is a key
  const analysis = (word) => {
    const result = [];
    const position = {};
    const wList = Array.from(word);

    wList.forEach((w, index) => {
      if (!position[w]) {
        position[w] = [];
      }
      position[w].push(index);
    });

    Object.keys(position).forEach((key) => {
      result.push(position[key]);
    });
    return result;
  };

  const patternArray = analysis(pattern);
  console.log(JSON.stringify(patternArray));

  // examine words wether match pattern or not
  return words.filter((word) => {
    const wordPatternArray = analysis(word);
    return JSON.stringify(wordPatternArray) === JSON.stringify(patternArray);
  });
};

// input
// ["badc","abab","dddd","dede","yyxx"]
// "baba"

findAndReplacePattern(["badc", "abab", "dddd", "dede", "yyxx"], "baba");
