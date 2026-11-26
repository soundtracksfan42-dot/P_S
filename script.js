// Задание 1/5
function sayHello(name) {
    console.log(`Привет, ${name}!`);
}

sayHello("Алексей");
// Задание 2/5
const sum = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return "Деление на ноль невозможно";
    }
    return a / b;
};

console.log(sum(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(divide(10, 0));
// Задание 3/5
function checkAge(age) {
    if (age < 0) {
        return "Некорректный возраст";
    }
    if (age < 18) {
        return "Доступ запрещён";
    }
    return "Доступ разрешён";
}

console.log(checkAge(18));
console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(-5));
// Задание 4/5
const calculateDiscount = function (price, discount) {
    if (discount < 0 || discount > 100) {
        return "Некорректная скидка";
    }
    const finalPrice = price - (price * discount) / 100;
    return finalPrice;
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(5000, 20));
console.log(calculateDiscount(2000, 50));
// Задание 5/5
function getAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

function getStatus(average) {
    if (average < 3) {
        return "Не успевает";
    }
    if (average < 3.5) {
        return "Удовлетворительно";
    }
    if (average < 4.5) {
        return "Хорошист";
    }
    return "Отличник";
}

const grades = [5, 4, 5, 3, 4];

const average = getAverage(grades);
const status = getStatus(average);

console.log("Средняя оценка:", average);
console.log("Статус:", status);