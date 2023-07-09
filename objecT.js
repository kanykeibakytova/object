// Object ->{}
// const user ={
//     name: 'Kanykei',
//     surname: 'Bakytova',
//     age: 20,
//     address: {
//         region: 'Chui',
//         street: 'Ahunbaeva'
//     }
// }
// Object.freeze(user)
// user.name ='Aku'
// user.surname='Kanatova'
// console.log(user)


//
// user.car ='mersedes'
// console.log(user)
// console.table(user)

// let user ={
//     name: 'Kanykei',
//     surname: 'Bakytova',
//     age: 20,
//     address: {
//         region: 'Chui',
//         street: 'Ahunbaeva'
//     },
//     'my email address': 'kbakytova0@gail.com'
// }
// console.log(user["my email address"])
// console.log(user.name)
// console.log(Object.keys(user))
// console.log(Object.values(user))


// let user ={
//     day:{
//         1:'понедельник',
//         2:'Вторник',
//         3:'Среда',
//         4:'Четверг',
//         5:'Пятница',
//         6:'Суббота',
//         7:'Воскресенья'
//     }
// }
// console.log(user.day['5'])

// var a = "code";
// var b = "wa.rs";
// var name = a + b;
// console.log(name)

// var a="code",
//     b="wa.rs",
//     name=a+b;
// console.log(name)

// var name ="codewa.rs";
// console.log(name)

// let person ={
//     id:1,
//     name: 'mbappe',
//     age:10
// }
// person.surname='killian'
// console.log(person.surname)
// console.log(person['name'])
// console.log(JSON.stringify(person))

// let jsonObject = '{"id":1,"name":"mbappe"}'
// console.log(JSON.parse(jsonObject))
// let person2=JSON.parse(JSON.stringify(person))
//
// console.log(person2)





// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// console.log(Object.keys(obj).length)


// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c'
// двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {
//     a: 1, b: 2, c: 3
// }
// console.log(obj.c)
// console.log(obj['c'])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атая и Ширин.

// let obj = {
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': '200'
// }
// console.log(obj['Атай'])
// console.log(obj['Ширин'])
// второй метод
// console.log(obj.Атай,obj.Ширин)

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.

// let obj = {
//     'Ширин': '1000', 'Айжан':'500', 'Атай': '200'
// }
// obj.Атай='500'
// console.log(obj)


// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.

// let obj = {
//     Ширин: '1000', Айжан:'500', Атай: '200'
// }
// obj.Медет ='1500'
// console.log(obj)


// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.

// let  obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай:{
//     salary: '500'
//     }
// }
// console.log(obj.Атай.salary)

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала
//     недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let week={
//     monday:'first',
//     tuesday:'second',
//     wednesday:'third',
//     thursday:'forth',
//     friday:'fifth',
//     saturday:'sixth',
//     sunday:'seventh'
// }
// console.log(week.sunday)

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.

// let day ={
//     1: 'monday',
//     2:'tuesday',
//     3:'wednesday',
//     4:'thursday',
//     5:'friday',
//     6:'saturday',
//     7:'sunday'
// }
// console.log(day['3'])


// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.

// let obj = {
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': {
//         salary: '500'
//     }
// }
// console.log(Object.keys(obj))

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все значения объекта.

// let obj = {
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': {
//         salary: '500'
//     }
// }
// console.log(Object.values(obj))


// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.
// let obj ={
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': {
//         salary: '500'
//     }
// }
// console.log(Object.entries(obj))


// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.

// function myFn(obj){
//     if(Object.keys(obj).length%2!==0){
//         return '1'
//     }else if(Object.keys(obj).length%2===0){
//         return 0
//     }else {
//         return obj
//     }
// }
//
// console.log(myFn({name: 'Igor'}))

// let name='Igor'
// if (name%2===0){
//     console.log('1')
// }else if(name%2!==0){
//     console.log('0')
// }


// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
// Выведите все id в консоль через map.

// function myFn(obj){
//     return obj.map(el =>{
//         return
//     })
// }
//
// console.log(myFn([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.

// let obj ={
//     name: 'Igor'
// }
// obj.name='Азат'
// obj.age=25
// console.log(obj)


// function myFn(obj){
//     obj.name='Азат'
//         obj.age=25
//     return obj
// }
//
// console.log(myFn({name: 'Igor'}))

// 15. Вам дан объект
// let product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }
// console.log(product.price-7)

// function myFn(product){
//     if(product.price>100){
//         return product.price-10
//     }else {
//         return product.price-7
//     }
// }
//
// console.log(myFn( {name: "headphones",price: 100, discount: 0 }))


//Найдите стоимость объекта с ценой, и если она больше 100,
// снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.







//FOR WHILE

// break()
// continue()

// break
// for (let i = 0; i<10; i++){
//     if(i===0){
//         break
//     }
//     console.log(i)
// }




//3. Создайте функцию, передайте в нее массив с объектами
//[ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// function obj(arr){
//     return arr.map(el =>{
//         return el.id
//     })
// }
//
// console.log(obj([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] ))


// let arr =[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.splice(0, 10, 'true'))


// let arr =[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter(el =>{
//       if(el%2===0){
//           return el
//       }
// }))


// let arr =[1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i<=arr.length; i++ ){
//     if(arr[i] %2 ===0){
//         console.log(arr[i])
//     }
// }

let arr =[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.filter( el =>{
//     return el>5
// }))
//
// console.log(arr.find(el =>{
//     return el>5
// }))
//
// console.log(arr.map((el,idx)=>{
//     return el+idx
// }))


// console.log(arr.filter(el =>{
//         return el>5
// }).reduce((acc,el)=>{
//     return acc+el
// }))

// function  myFn(str){
//  return str.split('').join('*')
// }
//
// console.log(myFn('motion'))

// function myFn(str){
//  return str.split('').reduce((acc,el)=>{
//   return acc+ '*'+el
//  })
// }
//
// console.log(myFn('motion'))

// let str = 'motion'
// console.log(str.includes('o'))
// console.log(str.includes('a'))



let str ='motion'
if(str.length ===5){
    console.log('motion web')
}else{
    console.log(str)
}

















