const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    // Code Here

    let result = [];

    for (let i = 0; i < numbers.length; i++) {

        if (i === 0) {
            result.push(array[i]);
        } else if (result[i - 1] > array[i]) {
            let insertIndex = 0;

            for (let n = result.length - 1; n >= 0; n--) {
                if (result[n] > array[i]) {
                    insertIndex = n;
                } 
            }

            result.splice(insertIndex, 0, array[i]);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(insertionSort(numbers));