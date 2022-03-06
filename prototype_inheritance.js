function Person(n, a){
    this.name = n;
    this.age = a;
}

function Cricketer(name, age, type, country){
    Person.call(this, name, age);
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function(){
        console.log(`${this.name} is eating!`);
    },
    sleep: function(){
        console.log(`${this.name} is sleeping`);
    }
}

Cricketer.prototype = Object.create(Person.prototype);

const obj1 = new Cricketer('sakib', 33, 'all rounder', 'bd');
// const obj2 = new Person('tanvir', 21);
console.log(obj1);
obj1.eat();
