/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  return str.split(' ') //Разбиваем строку на массив слов с помощью split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) //Первую букву делаем заглавной (charAt(0).toUpperCase()). Остальные буквы делаем строчными (slice(1).toLowerCase())
    .join(' '); //Собираем слова обратно в строку с помощью join(' ')
    
}

