
// T && T = T 
// F && T = F 
// T && F = F 
// F && F = F 

// T || T = T 
// T || F = T 
// F || T = T 
// F || F = F 

function returnFalse() { 
    console.log("False 함수"); 
    return false;
}

function returnTrue() { 
    console.log("True 함수"); 
    return true;
}

console.log(returnFalse() && returnTrue()); 

// 단락 평가 활용 사례

function printName(person) {
    // if(!person) {
    //     console.log("person에 값이 없음");
    //     return;
    // }
    
    // console.log(person && person.name); 

    const name = person && person.name; 
    console.log(name || "person의 값이 없음"); 
}

printName({ name : "Kim" });