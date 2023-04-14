let pi = 0;
let sign = 1;
let term = 1;
let count = 0;

for (let i = 1; i <= 200000; i++) {
    pi += sign * term;
    sign *= -1;
    term = 1 / (2 * i + 1);

    if (pi.toFixed(5) === "3.14159") {
        count = i;
        break;
    }
}

console.log("Value of π approximated by computing the first 200,000 terms:");
console.log(pi);
console.log("Number of terms used to get a value that begins with 3.14159:");
console.log(count);