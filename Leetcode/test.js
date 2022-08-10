/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push([...new Array(m).fill(1)]); // initialize list
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
      // res[1][1] = res[0][1] + res[1][0]
      // res[1][3] = res[0][2] + res[1][1]
      // res[1][3] = res[0][2] + res[1][1
    }
  }

  console.log(JSON.stringify(res));

  return res[n - 1][m - 1];
  // let way = 0;

  // const keepGoing = (position) => {
  //   let [x, y] = position;
  //   console.log(`x: ${x}, y: ${y}`);

  //   if (x < m) {
  //     x++;
  //     way++;
  //     keepGoing([x, y]);
  //   }
  //   if (y < n) {
  //     y++;
  //     way++;
  //     keepGoing([x, y]);
  //   }
  // };

  // keepGoing([1, 1]);

  // return way;
};

const m = 3,
  n = 2;
const result = uniquePaths(m, n);
console.log(`result: ${result}`);
