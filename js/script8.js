//Exercise 8: Користувач загадує число. Комп'ютер ставить питання поки не вгадає число користувача (використати confirm).

const getRandomNumber = () => {
    const MAX = 100;
    return Math.floor(Math.random()*(MAX+1))
}

let userAttempt = false;
while (userAttempt !== true){
    const RANDOM_NUM = getRandomNumber();
    userAttempt = confirm(`${RANDOM_NUM} - this is your number?`);
    if (userAttempt === true) {
        alert("Number guessed! Robot won!")
    } else {
        alert(`Robot doesnt guess the number. It will try again`);
    }
}