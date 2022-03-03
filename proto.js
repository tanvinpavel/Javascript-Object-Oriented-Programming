// // SUB:- create object by constructor method where print() function is duplicated 

// function Person(name, age){
//     this.name = name,
//     this.age = age,
//     this.print = function(){
//         console.log('name: ' + this.name + ' age: ' + this.age);
//     }
// }

// const p1 = new Person('pavel', 22);
// const p2 = new Person('tanvir', 19);


// SUB:- create obj by constructor method. reduce function duplication
function Person(name, age){
    this.name = name,
    this.age = age
}

// put your all common properties and method in >>> prototype <<< to reduce function duplication.
Person.prototype.print = function(){
    console.log('name: ' + this.name + ' age: ' + this.age);
}

//another method to declare
Person.prototype = {
    hello: function(){
        console.log('Hello ' + this.name);
    },
    department: "Computer"
}

const p1 = new Person('pavel', 22);
const p2 = new Person('tanvir', 19);
//p1.__proto__ === Person.prototype

// parent class use >>> prototype <<< and the child obj use >>> __proto__ <<<
Person.prototype.gmail = "prototype@gmail.com";
p1.__proto__.email = "proto@email.com";


//it's called prototypical inheritance, because we can access >>>email or gmail or print properties and method from any child object<<<
console.log(p1);
console.log(p2);
console.log(p1.__proto__);
console.log(Person.prototype);

