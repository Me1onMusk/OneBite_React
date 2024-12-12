// 1.배열의 구조 분해 할당 
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two, three] = arr;

// let [one, two] = arr;

// let [one, two, three, four = 4] = arr;

// 2.객체의 구조 분해 할당 
let person = {
    name : "Kim",
    age : 30,
    hobby : "테니스"
};

// let {name, age: myAge, hobby} = person;

// let {name, age, hobby, extra = "Hello"} = person;

// 3.객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 
const funcA = ({name, age, hobby, extra}) => {
    
}
funcA(person);

let x = 10;
const funcB = ({x}) => {
    console.log(x);
};
funcB(count = {x})