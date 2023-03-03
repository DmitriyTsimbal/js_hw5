//Exercise 15: Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
const USER_WEEKS = parseInt(prompt('Enter a number of weeks: ', '1'));
let totalProfitSum = 0;

for (let weekNumber = 0; weekNumber < USER_WEEKS; weekNumber++){
    let totalWeekSum = 0;
    const DAYS_PER_WEEK = 7;
    for (let dayNumber = 0; dayNumber < DAYS_PER_WEEK; dayNumber++){
        let profitPerDay = parseFloat(prompt(`Enter a profit for the ${dayNumber+1} day of the ${weekNumber+1} week: `,'100'));
        totalWeekSum += profitPerDay;
    }
    document.write(`Profit per a ${weekNumber+1} week is: ${totalWeekSum.toFixed(2)}₴
    <hr>`)
    totalProfitSum += totalWeekSum;
}
document.write(`Total profit is: ${totalProfitSum.toFixed(2)}₴`)