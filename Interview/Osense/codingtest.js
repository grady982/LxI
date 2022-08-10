// chunk([1,2,3,4], 2)
// [[1,2], [3,4]]

const chunk = (arr, nb) => {
  let result = [];
  let count = 0;
  let subArr = [];
  console.log(`arr: ${JSON.stringify(arr)}`);

  arr.forEach((data, index) => {
    console.log(`current position: ${index}`);

    if (count < nb) {
      subArr.push(data);
      count++;
    } else {
      result.push(subArr);
      console.log(`goup; ${subArr}`);
      subArr = [];
      count = 0;
      subArr.push(data);
      count++;
      console.log(subArr);
      console.log(`count: ${count}`);
    }
  });
  result.push(subArr);

  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
