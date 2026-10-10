const number = prompt("Введите число от 1 до 9:");

if (number === 1) {
    alert("1 -> Меркурий");
} else if (number === 2) {
    alert("2 -> Венера");
} else if (number === 3) {
    alert("3 -> Земля");
} else if (number === 4) {
    alert("4 -> Марс");
} else if (number === 5) {
    alert("5 -> Юпитер");
} else if (number === 6) {
    alert("6 -> Сатурн");
} else if (number === 7) {
    alert("7 -> Уран");
} else if (number === 8) {
    alert("8 -> Нептун");
} else if (number === 9) {
    alert("9 -> Плутон");
} else {
    alert("Нет такой планеты!");
}


const temp = prompt("Сколько градусов на улице?");

if (temp < -10) {
    alert("Морозно");
} else if (temp <= 0) {
    alert("Очень холодно");
} else if (temp <= 10) {
    alert("Холодно");
} else if (temp <= 20) {
    alert("Прохладно");
} else if (temp <= 25) {
    alert("Облачно");
} else if (temp <= 32) {
    alert("Тепло");
} else {
    alert("Жарко");
}


const code = prompt("Введите код региона (01, 02, 03 и т.д.):");

if (code === "01") {
    alert("01 - г. Бишкек");
} else if (code === "02") {
    alert("02 - г. Ош");
} else if (code === "03") {
    alert("03 - Баткенская обл.");
} else if (code === "04") {
    alert("04 - Джалал-Абадская обл.");
} else if (code === "05") {
    alert("05 - Нарынская обл.");
} else if (code === "06") {
    alert("06 - Ошская обл.");
} else if (code === "07") {
    alert("07 - Таласская обл.");
} else if (code === "08") {
    alert("08 - Чуйская обл.");
} else if (code === "09") {
    alert("09 - Иссык-Кульская обл.");
} else {
    alert("Неизвестный код региона");
}


const som = prompt("Введите сумму в сомах:");
const currency = prompt("Какая валюта? (USD, CNY, KZN, RUB):");

let rate = 0;

if (currency === "USD") {
    rate = 88;
} else if (currency === "CNY") {
    rate = 10;
} else if (currency === "KZN") {
    rate = 0.170;
} else if (currency === "RUB") {
    rate = 1;
}

const result = Math.round(som / rate);

alert("Курс: " + rate + ", сумма: " + result);
