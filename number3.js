let sum = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log("The sum of numbers between 1 and 30 that are divisible by 3 is:", sum);