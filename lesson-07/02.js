/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // your code
  return !isNaN(parseFloat(str)) && isFinite(str);

  /*parseFloat(str) -преобразует число в строку
  * !isNaN() - проверяет значения на NaN, (!) отрицание, что строка значение не число
  * isFinite(str) - проверяет, является ли значение конечным числом
  */ 

}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
