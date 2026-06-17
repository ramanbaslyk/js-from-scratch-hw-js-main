/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, 
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
const line = `str`
function doubleEachCharacter(text) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        const symbol = text[i]
        result += symbol + symbol
    }
    return result
}

const result = doubleEachCharacter(line)
console.log(result);
