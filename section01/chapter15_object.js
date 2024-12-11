
// 객체 
let obj1 = new Object() //객체 생성자 
let obj2 = {}  //객체 리터럴 (대부분 사용)

// 객체 속성 
// 키 : 값 
let person = { 
    name : "Kim",
    age : 30, 
    hobby : "테니스",
    extra : {},
    "like cat" : true
}; 

// 객체 프로퍼티 다루기 
let name = person.name; 

let age = person["age"]; 

// 새로운 프로퍼티 추가하기 
person.job = "developer";
person["favorite food"] = "피자";

// 프로퍼티 수정
person.job = "educator";
person["favorite food"] = "치킨";

//프로퍼티 삭제 
delete person.job;
delete person["favorite food"];

// 프로퍼티 존재 유무 (in 연산자)
let result1 = "name" in person; 