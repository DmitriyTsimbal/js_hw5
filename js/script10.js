//Exercise 10: Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

const rangeOfNums = (start = parseInt(prompt('Enter a start of num range: ', '0')), end= parseInt(prompt('Enter a end of num range: ','10'))) => {
    return Array.apply(0, Array(end-start+1))
        .map((element, index) => index + start);
}

let sumOfOddNumbers = 0;
let counterOfOddNumbers = 0;

for (let nums of rangeOfNums()) {
        if (nums % 2 !== 0 && counterOfOddNumbers < 5) {
            sumOfOddNumbers += nums;
            counterOfOddNumbers++
        }
}

document.write(`<h1>Sum of first 5 odd numbers: ${sumOfOddNumbers}</h1>`)