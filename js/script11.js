//Exercise 11: Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.
// Вибір у кожній позиції вибирається як одне з чотирьох зображень.
// Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000 грн).
// Використати цикли та switch (для вибору зображення за номером).

const getRandomNumber = () => {
    const MAX = 3;
    return Math.floor(Math.random()*(MAX+1))
}
const TOTAL_POSITION_COUNT = 3;
const COUNT_TO_WIN = 3;

const BANANA_IMG_PATH = '../svg/banana.svg';
const ORANGE_IMG_PATH = '../svg/orange.svg';
const STRAWBERRY_IMG_PATH = '../svg/strawberry.svg';
const WATERMELON_IMG_PATH = '../svg/watermelon.svg';

const BANANA_WIN_PRIZE = 100;
const ORANGE_WIN_PRIZE = 200;
const STRAWBERRY_WIN_PRIZE = 500;
const WATERMELON_WIN_PRIZE = 1000;

const playGame = () => {

    let bananaCount = 0;
    let orangeCount = 0;
    let strawberryCount = 0;
    let watermelonCount = 0;

    for (let positionCount = 0; positionCount < TOTAL_POSITION_COUNT; positionCount++){
        const RANDOM_NUM = getRandomNumber();
        switch (RANDOM_NUM){
            case 0:{
                document.write(`<img src=${BANANA_IMG_PATH} alt="banana">`)
                bananaCount++
                break;
            }
            case 1:{
                document.write(`<img src=${ORANGE_IMG_PATH} alt="orange">`)
                orangeCount++
                break;
            }
            case 2:{
                document.write(`<img src=${STRAWBERRY_IMG_PATH} alt="strawberry">`)
                strawberryCount++
                break;
            }
            case 3:{
                document.write(`<img src=${WATERMELON_IMG_PATH} alt="watermelon">`)
                watermelonCount++
                break;
            }
        }
    }
    if (bananaCount === COUNT_TO_WIN){
        document.write(`<p>You won ${BANANA_WIN_PRIZE}₴</p>`)
    }
    if (orangeCount === COUNT_TO_WIN){
        document.write(`<p>You won ${ORANGE_WIN_PRIZE}₴</p>`)
    }
    if (strawberryCount === COUNT_TO_WIN){
        document.write(`<p>You won ${STRAWBERRY_WIN_PRIZE}₴</p>`)
    }
    if (watermelonCount === COUNT_TO_WIN){
        document.write(`<p>You won ${WATERMELON_WIN_PRIZE}₴</p>`)
    }
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart page';
    restartButton.addEventListener('click',() => {
        location.reload();
    });
    document.body.appendChild(restartButton)
}
playGame()



/*
Variant(With objects) #2

const FRUIT_IMAGES = {
    banana:'../svg/banana.svg',
    orange:'../svg/orange.svg',
    strawberry:'../svg/strawberry.svg',
    watermelon:'../svg/watermelon.svg'
}
const WIN_PRIZES = {
    banana: 100,
    orange: 200,
    strawberry: 500,
    watermelon: 1000
}

const TOTAL_POSITION_COUNT = 3;
const COUNT_TO_WIN = 3;

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * ( max+1 ));
}

const createFruitImage = (fruit) => {
    const img = document.createElement('img');
    img.src = FRUIT_IMAGES[fruit];
    img.alt = fruit;
    return img;
}
const checkWin = (counts) => {
    for (const [fruit, count] of Object.entries(counts)){
        if (count === COUNT_TO_WIN){
            return WIN_PRIZES[fruit];
        }
    }
    return null;
}

const playGame = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);


    const COUNTS = {
        banana: 0,
        orange: 0,
        strawberry: 0,
        watermelon: 0
    };

    for (let i = 0; i < TOTAL_POSITION_COUNT; i++){
        const RANDOM_NUM = getRandomNumber(Object.keys(FRUIT_IMAGES).length - 1);
        const FRUIT = Object.keys(FRUIT_IMAGES)[RANDOM_NUM];
        const IMG = createFruitImage(FRUIT)
        container.appendChild(IMG);
        COUNTS[FRUIT]++;
    }

    const WIN_PRIZE = checkWin(COUNTS);
    if (WIN_PRIZE !== null){
        const PRIZE_MESSAGE = `You won ${WIN_PRIZE}₴`;
        const PRIZE_ELEMENT = document.createElement('p');
        PRIZE_ELEMENT.innerText = PRIZE_MESSAGE;
        container.appendChild(PRIZE_ELEMENT);
    }

    const RESTART_BUTTON = document.createElement('button');
    RESTART_BUTTON.innerText = 'Restart game';
    RESTART_BUTTON.addEventListener('click', () => {
        container.remove();
        playGame();
    });
    container.appendChild(RESTART_BUTTON);
}
playGame();

*/