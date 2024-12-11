// 1.콜백함수 
function main(value) {
    value();
}

function sub() {
    console.log("sub");
}

main(sub);

// 2.콜백함수 활용 
function repeat(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i);
    }
}

function repeatDouble(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i * 2);
    }
}

repeat(5);
repeatDouble(5);

function repeat(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeat(5, function(i) {
    console.log(i); 
});

repeat(5,(i) => {
    console.log(i * 2); 
});