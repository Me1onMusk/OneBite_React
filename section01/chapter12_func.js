
// 1.함수 표현식
function funcA () {
    console.log("funcA");
}

let varA = funcA; 

varA();  //funcA

funcA();  //funcA

console.log(varA);  //funcA 함수 전체 출력

let varB = function funcB () {
    console.log("funcB");
}

let varC = function() {
    console.log("익명함수");
}

// 2.화살표 함수
let varD = () => {
    return 1;
}

let varE = () => 1;

let varF = (value) => value + 1;

console.log(varD());  //1