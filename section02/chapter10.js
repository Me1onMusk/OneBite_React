// 1.Date 객체를 생성하는 방법
let date1 = new Date();  //생성자

let date2 = new Date("1997/05/05/10:10:10");

// 2.타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값값
let ts1 = date1.getTime(); 

let date4 = new Date(ts1);

// 3.시간 요소들을 추출하는 방법 
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

// 4.시간 수정하기 
date1.setFullYear(2025);
date1.setMonth();
date1.setDate();
date1.setHours();
date1.setMinutes();
date1.setSeconds();

// 5.시간을 여러 포맷으로 출력하기
date1.toDateString(); 
date1.toLocaleDateString();