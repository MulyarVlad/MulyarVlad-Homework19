let makeCounter = function() {
    const count = 0;

    return function(x) {
        count += x;
        return count
    }
}

let sum = makeCounter();

console.log(sum(3));
console.log(sum(8));
console.log(sum(20));




