function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}

console.log('result:', reverseString("yoyo master"));

function reverseStringRecursive(str) {

    reverse = (str) => {
        if (str.length === 1) {
            return str;
        }

        return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));
    }

    return reverse(str);
}

console.log('result:', reverseStringRecursive("yoyo master"));
