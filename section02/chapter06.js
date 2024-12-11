// 1.배열 순회 
let num = [1, 2, 3];

// 1.2 배열 인덱스 
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// 1.3 for of 반복문 (forEach문)
for(let item of arr) {
    console.log(item);
}

// 2.객체 순회 
let person = {
    name: "Kim",
    age: 30,
    hobby: "테니스"
};

// 2.1 Object.keys 사용 
let keys = Object.keys(person);

for(let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

for(let key of keys) { 
    const value = person[key];
    console.log(key, value);
}

// 2.2 Object.values 사용
let values = Object.values(person);

for(let i = 0; i < values.length; i++) {

}

for (let value of values) {

}

// 2.3 for in 
for (let key in person) {
    const value = person[key]; 
    console.log(key, value); 
}