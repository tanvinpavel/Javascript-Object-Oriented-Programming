// const obj1 = {};
// const obj2 = new Object;

// let obj1 = {
//     uName: 'pavel',
//     age: 21,
//     ed: 'diploma',
//     get: function(){
//         console.log(this.uName);
//         console.log(this.age);
//     }
// }


// obj1.get();
// let x = obj1.get;
// x();

// console.log(obj1['age']);
// obj1.get();

// function Person(name, age, work){
//     this.name = name;
//     this.age = age;
//     this.work = work;
// }

// const p1 = new Person('pavel', 33, 'student');
// const p2 = new Person('jamal', 32, 'business');
// const p3 = new Person('rasel', 34, 'officer');

// const arr = [p1, p2, p3];

// for(let x of arr){
//     console.log(x.name);
// }

// for(let x in p1){
//     console.log(p1[x]);
// }



// console.log(p1);


let Person = {
    name: 'pavel',
    print: function () {
        (function(){
            console.log(this.name);
        })();
        function run(){
            console.log(this.name);
        }
        run();
        setTimeout(function(){
            console.log(this.name);
        }, 2000);
    }
}

Person.print();