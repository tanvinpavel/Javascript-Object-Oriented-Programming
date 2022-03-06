class Person{
    constructor(pName, age){
        this.name = pName;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating!`);
    };
}

class Cricketer extends Person{
    constructor(pName, age,type, country){
        super(pName, age)
        this.type = type;
        this.country = country;
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

const obj1 = new Cricketer('sakib', 33, 'all rounder', 'bd');
console.log(obj1);
obj1.sleep();