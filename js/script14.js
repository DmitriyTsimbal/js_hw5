//Exercise 14: Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

const NUMBER_OF_TEMPERATURES = 12;
let temperaturesSum = 0;


for (let temperatureNumber = 0; temperatureNumber <= NUMBER_OF_TEMPERATURES; temperatureNumber++){
    if (temperatureNumber < NUMBER_OF_TEMPERATURES){
        let userTemperature = parseFloat(prompt(`Enter a temperature per ${temperatureNumber+1} month: `, '10'));
        temperaturesSum += userTemperature;
    } else {
        temperaturesSum /= NUMBER_OF_TEMPERATURES;
        document.write(`Average temperature is ${temperaturesSum.toFixed(2)}`)
    }
}