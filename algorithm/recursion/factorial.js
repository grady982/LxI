// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if (number == 1) {
        return 1;
    }

    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    //code here
    let answer = number;
    for (let i = 1; i < number; i++) {
        answer = answer * i;
    }

    return answer;
}

console.log('ans:', findFactorialRecursive(3));
console.log('ans:', findFactorialIterative(3));