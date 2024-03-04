
let i = 0;
while (i < 2) {
    console.log(i);
    i++;
}

for(let i__1 = 1; i__1 <= 5; i__1++) {
    console.log(i__1);
}

let i__2 = 7;
while (i__2 <= 22) {
    console.log(i__2);
    i++;    
}

let obj = {
    "Kоля" : "200",
    "Вася" : "300",
    "Петя" : "400"
};
for(let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} - долларов`);
}

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);


for(let firstFriday = 5; firstFriday <= 31; firstFriday++) {
    console.log(`Сегодня пятница, ${firstFriday} - е число. Необходимо подготовить отчет!`);
}