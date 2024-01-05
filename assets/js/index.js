// // Задание №1
// alert("Задание 1")
// const userNumber = +prompt('Введите число, что бы возвести его во 2-ю степень')
// alert(userNumber ** 2)

// // Задание №2
// alert("Задание 2")
// const n1 = +prompt('Введите число 1')
// const n2 = +prompt('Введите число 2')
// alert((n1 + n2) / 2)

// // Задание №3
// alert("Задание 3")
// const userWidth = +prompt('Введите сторону квадрата')
// alert(userWidth * userWidth);

// // Задание №4
// alert("Задание 4")
// const km = +prompt('Введите величину в киллометрах, для перевода в мили')
// const MILE = 0.621371
// alert(km * MILE)

// // Задание №5
// alert("Задание 5")
// const n1 = +prompt('Введите число 1')
// const n2 = +prompt('Введите число 2')

// alert(n1 + n2);
// alert(n1 - n2);
// alert(n1 / n2);
// alert(n1 * n2);

// // Задание №6
// alert("Задание 6")
// const a = +prompt('Введите число a, для формулы "a * x + b = 0"')
// const b = +prompt('Введите число b, для формулы "a * x + b = 0"')
// alert(`Значение для переменной x будет ${-b / a} `)

// // Задание №7
// alert("Задание 7")
// const userHourse = +prompt('Введите текущий час в 24 часовом формате')
// const userMinute = +prompt('Введите текущие минуты')
// const MAX_MINUTE_IN_DAY = 60 * 24
// const userTimeInMinutes = 60 * userHourse + userMinute
// const differenceInMinutes = MAX_MINUTE_IN_DAY - userTimeInMinutes
// const resHourse = Math.floor(differenceInMinutes / 60)
// const resMinutes = differenceInMinutes % 60
// alert(`${resHourse}:${resMinutes} осталось до конца дня`);

// // Задание №8
// alert("Задание 8")
// const number = prompt('Введите трехзначное число')
// alert(`Вторая цифра текущего числа будет: ${Math.floor((number%100 )/10)}`)

// // Задание №9
// alert("Задание 9")
// const number = +prompt()
// const firstNamber = number % 10
// const numberWithoutLastNumber = Math.floor(number / 10)
// alert(`Результат выполненного перемещения последней цифры в начало ${firstNamber}${numberWithoutLastNumber}`);


// Задание №10
// const SALARY = 250
// const PERCENT = 10
// const sumSales = +prompt("Введите общую сумму продаж за месяц")
// const totalSum = sumSales * (PERCENT / 100)
// const salaryAndBonus = totalSum + SALARY
// alert(salaryAndBonus)