//Exercise 6: Вивести на екран N абзаців (N вводиться користувачем)

let paragraphCount = parseInt(prompt("Enter a paragraphs count: ", "1"))
for (let paragraphSection = 0; paragraphSection < paragraphCount; paragraphSection++){
    document.write(`<h1>Header ${paragraphSection+1}</h1>`)
    for (let paragraphChapter = 0; paragraphChapter <= paragraphSection; paragraphChapter++){
        document.write(`<p>Chapter ${paragraphSection+1}, Section ${paragraphChapter+1}</p>`)
    }
    document.write('<hr>')
}