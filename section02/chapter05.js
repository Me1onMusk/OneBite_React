
// 원시값 = 불변값 

// 객체값 = 가변값 
// 얕은 복사(위험) vs 깊은 복사(안전)

let o1 = { name: "Kim" }; 
let o2 = o1; 

let o3 = {...o1}; 

// 얕은 비교 (참조값 비교)
console.log(o1 === o2);
console.log(o1 === o3);

// 깊은 비교 
console.log(
    JSON.stringify(o1) === JSON.stringify(o3) 
);