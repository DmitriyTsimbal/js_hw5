//Exercise 1: Створити 10 елементів для введення цін продуктів

for (let itemPriceElements = 0; itemPriceElements < 10; itemPriceElements++){
    document.write(`<div style="display: flex; align-items: center; width: 280px; height: 30px; justify-content: space-between">Product №${itemPriceElements+1}<input type="number"></div>`)
}