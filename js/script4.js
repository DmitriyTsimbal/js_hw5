//Exercise 4: Вивести таблицю
document.write('<table>')
let tableColumnNumber = 1;
for (let tableRows = 0; tableRows < 3; tableRows++){
    document.write('<tr>')
    for (let tableColumns = 0; tableColumns < 3; tableColumns++){
        document.write(`<td>${tableColumnNumber++}</td>`)
    }
}