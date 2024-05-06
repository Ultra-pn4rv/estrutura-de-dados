let array = [1, 2, 3, 4, 5];
let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);