/**
 * GENERAL GUIDELINES
 * -----------------------------------------------------------------------------
 * You have a total of 30 minutes for this task. Please make sure to send us your
 * solution (no matter if you finish it or not) wthin 5 minutes after the time
 * is up via email. If you hand in any later than 35 minutes, your result may not
 * be considered in the application process.
 *
 * Please use proper TypeScript and add return types, etc. to your function.
 *
 * No libraries are allowed for this task.
 */

/**
 * TASK
 * -----------------------------------------------------------------------------
 * Write a function that substitutes the value of an element at position "p"
 * inside a nested array. The position "p" refers to the index inside a flattened (!)
 * array. Thus, "p" is different from the actual index, as it completely "ignores"
 * nested arrays.
 *
 * Example 1: If you had an array ['a', 'b', 'c', ['d', 'e'], 'f'] and you want
 * to insert 'x' at position p=4, the result would look like this:
 * ['a', 'b', 'c', ['d', 'x'], 'f'].
 *
 * We substitute value "e" with "x" because in a flat array it would be at the
 * position 4:
 *   0    1    2    3    4    5
 * ['a', 'b', 'c', 'd', 'e', 'f'].
 *
 * Example 2: If you had an array [[0], 1, [2, [3, 4, [5]]]] and you want to insert 'x'
 * at position p=5, the result would look like this: [[0], 1, [2, [3, 4, ['x']]]].
 */

const sampleArray = [[["f"]], "m", [22, [["a"], [54, [112]], "d", [["s"], 8]]]];

// Please write your function below this line and comment your steps as needed:
let index: number = 0;
const substituteArrayValue = (
  originalArray: any[],
  position: number,
  newValue: any
): any[] => {
  const diveArray = (arr: any[]): any => {
    return arr.map((data) => {
      if (Array.isArray(data)) {
        return diveArray(data);
      } else {
        index++;
        return index - 1 === position ? newValue : data;
      }
    });
  };

  const result = originalArray.map((data) => {
    if (Array.isArray(data)) {
      return diveArray(data);
    } else {
      index++;
      return index - 1 === position ? newValue : data;
    }
  });

  return result;
};

// run the task
const rs = substituteArrayValue(sampleArray, 5, "x");
console.log(JSON.stringify(rs));
