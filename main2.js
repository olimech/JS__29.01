// 1
// let hello = ['Привет', 'мир', '!']
// console.log(hello.join(' '))

// 2
// let text = ['Привет', 'мир', '!']
// console.log(text.join(' '))

// 3
// let text = ['Привет', 'мир', '!']
// text[0] = 'Пока'
// console.log(text.join(' '))

// 4.1
// let obj = {
//     'Vasya': 50,
//     'Pety': 30, 
// }


// console.log(obj['Vasya'])
// console.log(obj['Pety'])

// 4.2
// let obj = {
//     Vasya: 50,
//     Pety: 30, 
// }

// console.log(obj.Vasya)
// console.log(obj.Pety)

// 4.3
// let obj = {
//     Vasya: 50,
//     Pety: 30, 
// }

// for (item in obj){
//     console.log(item,obj[item])
// }

// console.log(item)

// 5
// var arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green']
// }

// console.log(arr.ru[1])

// Работа с массивами
// 1
// let arr = ['a', 'b', 'c']
// alert(arr)

// 2
// let arr = ['a', 'b', 'c']
// for (item in arr){
//     alert(arr[item])
// }

// 3
// let arr = ['a', 'b', 'c', 'd']
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`)

// 4
// let arr = [2, 5, 3, 9]
// let result = arr[0] * arr[1] + arr[2] * arr[3]

// console.log(result)

// // Не доделано
// for (item in arr){
//     console.log(arr[item])
// }
// //

// Объекты (ассоциативные массивы)
// 1
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj.c)
// console.log(obj['c'])

// 2
// var obj = {'Koly': '1000', 'Vasya': '500', "Pety": '200'};

// for (item in obj){
//     delete obj['Vasya']
//     console.log(item,obj[item])
// }
 
//3
// let days = {
//     1:'понедельник',
//     2:'вторник',
//     3:'среда',
//     4:'четверг',
//     5:'пятница',
//     6:'суббота',
//     7:'воскресенье',
// };

// confirm(days[1]);

//4
// let days = {
//     1:'понедельник',
//     2:'вторник',
//     3:'среда',
//     4:'четверг',
//     5:'пятница',
//     6:'суббота',
//     7:'воскресенье',
// };

// let day = days[3];
// confirm(day);



//Многомерные массивы
//1
// let arrays = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arrays[1][0]);


//2
// let arrays =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(arrays.js[0])

//3
// let lang = {'ru':[
//     'понедельник', 
//     'вторник', 
//     'среда', 
//     'четверг',
//     'пятница', 
//     'суббота', 
//     'воскресенье'],
//  'en':[
//     'monday',
//     'tuesday',
//     "wednesday",
//     "thursday",
//     "friday",
//     "aturday",
//     'sunday'
//     ]
// }

// console.log(lang.ru[0])
// console.log(lang.en[2])

//4
// let lang = {'ru':[
//     'понедельник', 
//     'вторник', 
//     'среда', 
//     'четверг',
//     'пятница', 
//     'суббота', 
//     'воскресенье'],
//  'en':[
//     'monday',
//     'tuesday',
//     "wednesday",
//     "thursday",
//     "friday",
//     "turday",
//     'sunday'
//     ]
// }
// function Days(a, b){
//     if (a == 'ru'){
//         console.log(lang.ru[b])
//     }
//     else{
//         console.log(lang.en[b])
//     }
// }

// Days('en', 5)
















