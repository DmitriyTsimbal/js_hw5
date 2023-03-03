//Exercise 12: Морський бій. Комп'ютер випадково розташовує одиничний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.


const TRIES_COUNT = 5;

const seaBattleGame = () => {
 const getRandomNumber = () => {
   const MAX = 9;
   return Math.floor(Math.random() * (MAX+1));
 }
 const SHIP_X_COORDINATE = getRandomNumber(), SHIP_Y_COORDINATE = getRandomNumber();
 for (let tryNumber = 0; tryNumber < TRIES_COUNT; tryNumber++){
     const USER_X_COORDINATE = parseInt(prompt('Enter a X coordinate(0-9): ','0')), USER_Y_COORDINATE = parseInt(prompt('Enter a coordinate(0-9): ', '0'));

     if( USER_X_COORDINATE === SHIP_X_COORDINATE && USER_Y_COORDINATE === SHIP_Y_COORDINATE) {
         alert('Ship destroyed. You won!');
         break;
     } else alert(`You missed. Try again!`);
 }
}

seaBattleGame()