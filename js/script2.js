//Exercise 2: Вивести таблицю з одним рядком і  7 стовпцями.
document.write('<table>')
for (let tableColumn = 0; tableColumn < 7; tableColumn++){
    document.write(`<td>${tableColumn+1}</td>`)
}