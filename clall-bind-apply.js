// function printMe(){
//     console.log('Hello ' + this.name);
// }

// const obj1 = {
//     name: "pavel",
//     age: 22
// }

// const obj2 = {
//     name: "alve",
//     age: 12
// }

// // apply >>>bind<<< method
// let ans1 = printMe.bind(obj1);
// let ans2 = printMe.bind(obj2);
// console.log(ans1());
// // console.log(ans2());

// //apply >>>call<<< method
// printMe.call(obj1);


//deference between >>>apply & call<<<
function summation(a, b){
    return (a + b)*this.c;
}

const obj3 = {
    c: 5
}

const obj4 = {
    c: 2.44
}

console.log(summation.call(obj3, 5, 6));
console.log(summation.apply(obj4, [3.22, 6.88]));;