var userAnswer = prompt("Who created JavaScript?\nA) Brendan Eich\nB) Bill Gates\nC) Mark Zuckerberg\n\nPlease select the correct option (A, B, or C).");

if (userAnswer === "a") {
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
} else if (userAnswer === "b") {
    alert("Nope. He lead the development of the Windows Operating System.");
} else if (userAnswer === "c") {
    alert("Nope. He just came up with the idea for a social network.");
} else {
    alert("Invalid answer. Please select a valid option: A, B, or C.");
}