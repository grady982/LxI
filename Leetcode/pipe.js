

const pipe = (...fns) => {
    return (args) => {
        return fns.reduce((acc, fn) => fn(acc), args);
    }
}

const double = (val) => {
    return val * 2;
}

const plusOne = (val) => {
    return val + 1;
}

const format = (val) => {
    return `${val}$`;
}

format(plusOne(double(10)))

const testGenerator = pipe(double, plusOne, format);

// pipe(double, plusOne, format)(10);
console.log('result:', testGenerator(10)); 