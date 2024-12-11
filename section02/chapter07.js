
// 6가지의 요소 조작 메서드 

// 1.push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드 
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(newLength, arr1);

// 2.pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환 
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

// 3.shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환 
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4.unshift
// 배열의 맨 앞에 있는 요소를 추가하고, 반환
let arr4 = [1, 2, 3];
const newLength4 = arr4.unshift(0);
console.log(newLength4, arr4);

// 5.slice 
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환 
let arr5 = [1, 2, 3, 4, 5];
arr5.slice(2, 5); //[1,2]
arr5.slice(2);    //[1,2]
arr5.slice(-1);   //[5]

// 6.concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환 
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

let concatedArr = arr6.concat(arr7);