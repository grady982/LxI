/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const compareTextInWords2 = (text) => {
    let isMatch = true;

    let i = 0;
    while (i < words2.length && isMatch) {
      const w2List = Array.from(words2[i]);
      const tList = Array.from(text);

      let j = 0;
      while (j < w2List.length && isMatch) {
        const tCount = tList.filter((t) => t === w2List[j]).length;
        const w2Count = w2List.filter((w) => w === w2List[j]).length;

        if (tCount < w2Count) {
          isMatch = false;
        }
        j++;
      }
      i++;
    }
    return isMatch;
  };

  return words1.filter((word) => compareTextInWords2(word));
};

// ==== Testcase ====
const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
const words2 = ["lo", "eo"];

const result = wordSubsets(words1, words2);
console.log(`result: ${result}`);

const w2 = new Array(26).fill(0);
console.log(`w2: ${JSON.stringify(w2)}`);

// Time Limit Exceeded 尚未解決
