/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, 
содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно,
 она доступна по всему проекту за счёт hoisting.
*/

const array = [1, 2, 2, 4, 6, 1, 3, 7, 5, 7]

function findUniqueElements(sumArray) {
    const uniqueElements = []
    for (let i = 0; i < sumArray.length; i++) {
        const element = sumArray[i];
        const matchedElement = includesElement(uniqueElements, element)
        if (matchedElement === false) {
            uniqueElements.push(element)
        }
    }
    return uniqueElements
}

const uniqueElements = findUniqueElements(array)
console.log(uniqueElements);
