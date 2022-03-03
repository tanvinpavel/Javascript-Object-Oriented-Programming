// //how inheritance work?

// function Person(name, age, id){
//     // const person = Object.create(Person.prototype);
//     this.name = name,
//     this.age = age,
//     this.id = id

//     // return person;
// }

// Person.prototype = {
//     get(){
//         console.log('Hi');
//     },
//     put(){
//         console.log('By');
//     }
// }

// let result = new Person('alve', 13, 1222);

function Person(){
    this.name = 'pavel';
}

function Teacher(){
    this.id = 1234
    Person.call(this)
}

let x = new Teacher();

console.log(x);