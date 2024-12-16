
// useState 

// useEffect

// useReducer 

// useMemo

// context (데이터 보관소)
// props : 부모 -> 자식 

// 함수 //

// function sumA(x, y) { return x + y; }
// console.log(sumA(10,20))

// const sumB = (x, y) => { return x + y; };
// console.log(sumB(10, 20));

// 콜백 //
function callbackA (x, y, z) {
    setTimeout(() => {
        z(x+y)
    }, 3000);
}

callbackA(10, 20, (z) => { console.log(z) })