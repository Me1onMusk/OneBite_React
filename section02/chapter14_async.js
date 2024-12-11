
// Async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드 

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "Kim",
                id : "1234"
            });
        }, 1500);
    });
} 


// Await
// Async 함수 내부에서만 사용이 가능한 키워드 
// 비동기 함수가 다 처리되기를 기다리는 역할 

function printData() {
    getData()
        .then((result) => {})
        .catch((error) => {})
}

async function printData() {
    const data = await getData();
    console.log(data);
}