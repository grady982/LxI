// loop 找出最小值放在最前面

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let smallestIndex = i;
        for (let n = i + 1; n < array.length; n++) {
            if (array[n] < array[smallestIndex]) {
                smallestIndex = n;
            }
        }
        // change
        const temp = array[i];
        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;

    }
    
}

selectionSort(numbers);
console.log(numbers);