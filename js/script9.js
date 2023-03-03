//Exercise 9: Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

const rangeOfNums = (start = parseInt(prompt('Enter a start of num range: ', '0')), end= parseInt(prompt('Enter a end of num range: ','10'))) => {
    return Array.apply(0, Array(end-start+1))
        .map((element, index) => index + start);
}

let sumOfOddNumbers = 0;

for (let nums of rangeOfNums()) {
    if (nums % 2 !== 0 ){
        sumOfOddNumbers += nums;
    }
}

document.write(`<h1>Sum of odd numbers: ${sumOfOddNumbers}</h1>`)