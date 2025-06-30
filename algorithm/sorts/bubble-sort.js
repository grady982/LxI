// 兩兩比對小的放前面

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    for (let n = array.length - 1; n > 0; n--) {
        for (let i = 0; i <= n; i++) {
            const a = array[i];
            const b = array[i +1];
            if (a > b) {
                // change
                array[i] = b;
                array[i + 1] = a;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);