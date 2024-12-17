
// useState 

// useEffect

// useReducer 

// useMemo

// context (데이터 보관소)
// props : 부모 -> 자식 
//----------------------------------------------------------------------------------//
// 함수 //

// function sumA(x, y) { return x + y; }
// console.log(sumA(10,20))

// const sumB = (x, y) => { return x + y; };
// console.log(sumB(10, 20));
//----------------------------------------------------------------------------------//
// map 메서드 //
const users = [
    { id: 1, name: "김" },
    { id: 2, name: "이" },
    { id: 3, name: "박" }
];
const names = users.map((user) => user.name);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
//----------------------------------------------------------------------------------//
// map 메서드 //

//----------------------------------------------------------------------------------//
// Async, Await 함수 //

//----------------------------------------------------------------------------------//
// Promise 함수 //

//----------------------------------------------------------------------------------//
// 콜백 함수 //
function callbackA (x, y, z) {
    setTimeout(() => {
        z(x+y)
    }, 3000);
}

callbackA(10, 20, (z) => { console.log(z) })
//----------------------------------------------------------------------------------// 
// 구조분해 할당 //
const [a, b] = [1, 2];

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);   //1
console.log(second);  //2
console.log(...rest); //[3,4,5] 

const [a=1, b=2, c=3] = [10];
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3

const person = {
    name: "Kim",
    age: 30,
    country: "Korea"
}
    const {nickName: name, age} = person; 
    console.log(nickName);  //Kim
    console.log(age);       //30

    const {name, age, grade="A"} = person; 
    console.log(grade); //A

    const {name, ...rest} = person;
    console.log(name);  //kim
    console.log(rest);  //{age: 30, country: "Korea"}

function displayUser({name, age}) {
    console.log(`이름: ${name}, 나이: ${age}`);
}
const user = {name: "Kim", age: 30};
displayUser(user);
//----------------------------------------------------------------------------------//
// 익명함수 //
const add = (a,b) => a + b;

const add = function (a,b) {
    return a+b;
}
//----------------------------------------------------------------------------------//