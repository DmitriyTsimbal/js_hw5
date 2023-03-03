//Exercise 0: Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

let listNumberCounts = parseInt(prompt("Enter a number of a random numbers: ", "3"))
const MAX = 100;
const MIN = 0;

for (let numberCount = 0; numberCount < listNumberCounts; numberCount++) {
    let randomNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    document.write(`<li>${randomNum}</li>`)
}