//Exercise 13: Каса. Користувачу повідомляють суму, яку йому треба сплатити.
// Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

let cashBank = 0;
const getRandomNumber = () => {
  const MIN = 100;
  const MAX = 2000;
  return Math.floor(Math.random() * (MAX-MIN+1) + MIN);
}

const BILL = getRandomNumber()

alert(`You need to pay ${BILL}₴`)

do {
    const payment = parseFloat(prompt('Enter a money: ', '100'));
    cashBank += payment;
    if (cashBank === BILL){
        alert('Thanks for your payment!')
    } else if (cashBank < BILL){
        alert(`Your payment is too small. You have to pay extra ${(BILL-cashBank).toFixed(2)}₴`)
    } else alert(`Your payment is too big. We need you ${(cashBank-BILL).toFixed(2)}₴`)
}
while (cashBank < BILL)