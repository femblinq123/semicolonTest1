const word = "VENTURES";
let output = "";

for (let i = 0; i < word.length; i++) {
    output += word[i];

    if (i % 2 === 1) {
        console.log(output);
        output = "";
    }
}

if (output !== "") {
    console.log(output);
}