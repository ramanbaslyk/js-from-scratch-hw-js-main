// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

let evenNumber

function isEven(number) {
    if (number % 2) {
        evenNumber = false   
    } else {
        evenNumber = true
    }
    return evenNumber
}
const result = isEven (3)
console.log(result);
