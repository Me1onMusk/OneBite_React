
function add(a, b, callback) {
    setTimeout( () => {
        const sum = a + b;
        callback(sum);
    }, 3000);

    task();
}

add(1, 2, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황 
function orderFood(callback) {
    setTimeout(() => {
        const food = "pizza";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood)
        
        freezeFood(cooldownFood, (freezeFood) => {
            console.log(freezeFood)
        });
    });
});

