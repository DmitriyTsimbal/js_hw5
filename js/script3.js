// Exercise 3: Вивести таблицю з 3 рядків і 7 стовпців
document.write('<table>')
for (let tableRows = 0; tableRows < 3; tableRows++){
    document.write('<tr>')
    for (let tableColumns = 0; tableColumns < 7; tableColumns++){
        document.write(`<td>${tableColumns+1}</td>`)
    }
}