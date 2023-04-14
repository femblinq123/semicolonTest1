function secondHighest(arr) {

    const sortedArr = arr.sort((a, b) => b - a);

    let secondHighestNum = null;
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[0]) {
            secondHighestNum = sortedArr[i];
            break;
        }
    }

    return secondHighestNum;
}

const arr = [2, 3, 6, -4, 9, 9, 8];
const secondHighestNum = secondHighest(arr);
console.log(secondHighestNum);