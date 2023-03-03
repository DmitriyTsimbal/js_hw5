//Exercise 7:Користувач загадує число. За 3 спроби комп'ютер намагається вгадати число користувача (використати confirm).

const getRandomNumber = () => {
    const MAX = 100;
    return Math.floor(Math.random()*(MAX+1))
}

let userAttempt = false;

for (let triesCount = 2; triesCount >= 0 && userAttempt !== true; triesCount--){
    const RANDOM_NUM = getRandomNumber();
    userAttempt = confirm(`${RANDOM_NUM} - this is your number?`);
    if (userAttempt === true) {
        alert("Number guessed! Robot won!");
    } else {
        alert(`Robot doesnt guess the number. ${triesCount} tries left`);
    }
}