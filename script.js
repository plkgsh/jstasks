//В данном задании вам могут понадобиться следующие методы строки: trim, replace, repeat и свойство length.
// Реализуйте следующие функции (соблюдайте именование): 

// Задача 1
/*
Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат 
их конкатенации и удаляет все пробелы.

'aa', 'bb' => 'aabb'
'aa',' '    => 'aa'
'',  'bb'  => 'bb'
*/

export const concatenateStrings = (str1, str2) => {
  let result = str1 + str2
  result = result.replace(/ /g, '')
  return result
}

// Задача 2
//Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.

export const getStringLength = (str) => {
  return str.length
}

// Задача 3
/*
Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName 
и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'.
Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.

'John','Doe'      => 'Hello, John Doe!'
'Chuck','Norris'  => 'Hello, Chuck Norris!'

*/

export const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`
}

// Задача 4
/*
Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке 
и возвращает символ, соответствующий этому порядковому номеру.

'John Doe', 1  => 'J'
'cat', 3       => 't'

*/

export const getChar = (str, index) => {
  return str.charAt(index - 1)
}

// Задача 5
/*
Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.

'To be or not to be', 'not'  => 'To be or  to be'
'I like legends', 'end' => 'I like legs',
'ABABAB','BA' => 'ABAB'
*/

export const removeFirstOccurrences = (str, value) => {
  return str.replace(value, '')
}

// Задача 6
/* 
Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника 
с заданной шириной и высотой, используя символы '*'.
        *
5, 4 => *   *
        *   *
        *

*/

export function getRectangleString(width, height) {
  let result = '';

  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      result += '*'.repeat(width) + '\n'
    } else {
      result += '*' + ' '.repeat(width - 2) + '*' + '\n'
    }
  }

  return result
}