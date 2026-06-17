/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
 содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. 
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]


function findCommonElements(sumArray1, sumArray2) {
    const commonElements = []

    for (let i = 0; i < sumArray1.length; i++) {
        const element = sumArray1[i];
        const availabilityElement = includesElement(sumArray2, element)
        if (availabilityElement === true) {
            commonElements.push(element)
        }
    }
    return commonElements
}

const commonElements = findCommonElements(array1, array2)
console.log(commonElements);

