// let obj1 = {}
// let obj2 = new Object()
// let key1 = prompt('werwer', 'werwewerwerr')
// let key2 = prompt('werwsdfsdfer', 'werwewerwerr')
// let user = {
//     'name': 'Vasya',
//     'age': 14,
//     'isAdmin': false,
//     'like digs': true,
//     [key1]: 'fdsfsdf',
//     [key1+'user']: key2,

// }

// confirm(user[key2])
// console.log(user)




// let key = 'adress'
// user[key] = 'sdfsdfsdf'
// console.log(user)

// user.age = 'User11'
// // delete user.age
// // confirm(user['name'])
// confirm(`Твое имя ${user["name"]}, тебе ${user['age']} лет и статус админа твой: ${user['isAdmin']}`)
// console.log(user)
// // console.log(obj2)



// function makeUser(name, age){
//     return { name, age } 
// }

// let user = makeUser('Vasya', 30)
// console.log('name' in user)


// let user = {
//     name: 'Vasya',
//     age: 15,
//     'is Admin': false,

// }

// for (let index in user){
//     console.log(index, user[index])
// }

// let admin = {}

// let adress = {
//     'streat': 'Vlad'
// }

// for (let key in user){
//     admin[key] = user[key]
// }
// console.log(admin)

// let admin = Object.assign({}, user, adress)

// admin.name = 'admin'
// admin['is Admin'] = true
// console.log(admin)
// console.log(user)




// let user = {
//         name: 'Vasya',
//         age: 15,
//         'is Admin': false,
//         say_hello(){
//             let arrow = () => {
//                 console.log('hello', this.name, this.age + 100)
//            }
//            arrow()
//         }
// }

// function newUser(name, age){
//     return {name, age}
// }

// function hello(){
//     return (`Helo ${this.age} ${this.name} `)
// }

// let manager = new newUser('manager', 20)
// manager['is Admin'] = false
// manager['say_hello'] = hello
// console.log(hello())
// console.log(manager.say_hello())


// let admin = Object.assign({}, user)
// admin.name = 'admin'
// admin.age = 100
// admin.say_hello()
// admin.say_hello()
// console.log(admin['say_hello']())


// Опциональная цепочка

// let user = {
//     name: 'vasya',
//     age: 12,
//     adress: {
//         streat: 'sdfsdf',
//         home: 23,
//         flat: 33,

//     },
//     admin(){
//         console.log('admin')
//     }
// }

// console.log(user.admin?.())

//


// Массивы //

// let array = []
// let array2 = new Array()
// let array3 = [1,2,3,4,5]

// console.log(array3)
// console.log(array3.length)
// array3[0] = 1000
// delete array3[0]
// array3[5] = 500
// array3[array3.length] = 400
// array3[array3.length] = 444
// console.log(array3)
// console.log(array3.length)

// let arr = [
//     13, 124,53, 8, 4,
// ]
// console.log('asdasd', arr.shift())
// console.log('asdasd', arr.pop())
// console.log('asdasd', arr.push())
// console.log(arr[0].sdfsfsdf1)

// for (let i=0; i<=arr.length; i++){
//     console.log(arr[i])
// }

// for (let i in arr){
//     console.log(arr[i])
// }

// for (let item of arr){
//     console.log(item)
// }

// //


// let matrix = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3]
// ]

// matrix[0] = 'dsfsdfsdf'
// console.log(matrix[1][1] = 'dsfsdf')
// console.log(matrix[0])
// console.log(matrix)

// matrix.splice(1, 1)
// console.log(matrix)

// let m = matrix.slice(0, 1)
// console.log(m)
// console.log(m.concat(matrix))

// arr.forEach(function(elem)){
//     console.log( arr)
// }

// let al = arr.find(item => item.id == 2)
// console.log(al)


// let res = arr.filter((item) => item < 10 )
// console.log(res)

// Преобразование массива

// let arr = [
//     13, 124,53, 8, 4,
// ]

// let res = arr.map((item, index) => item*2 + index)

// console.log(res)

// function compareNum(a, b){
//     if (a>b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// console.log(arr
//     .sort(compareNum)
//     .reverse()
//     .filter(item => item > 5))


// let str = 'sdfgjsdf,,,,,,,,,,,,kgsdfg';
// let arr2 = str.split('d');
// console.log(arr2);

// let res = arr.reduce((acc, item) => acc*item, 13)


// console.log(res)
