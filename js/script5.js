//Exercise 5: Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

let tableColumnNumber = 1;
for (let tablesCount = 0; tablesCount < 3; tablesCount++){
    document.write('<table>')
    for (let tableRows = 0; tableRows < 3; tableRows++){
        document.write('<tr>')
        for (let tableColumns = 0; tableColumns < 3; tableColumns++){
            document.write(`<td>${tableColumnNumber++}</td>`)
        }
    }
}