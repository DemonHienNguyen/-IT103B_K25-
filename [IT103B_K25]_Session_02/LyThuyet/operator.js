/*
    toán tử trong Js
    1. toán tử số học: +,  -, *, /, %, **
    2. toán tử so sánh: >, <, !=, >=, <=, ==, ===;
    3. toán tử logic: || , &&
    4. toán tử 3 ngôi;
    ***************


    I. truthy: Không phải falsy
    II_ falsy: 0, false, null, undifinded, NaN, "";
*/
let age = +prompt("Nhập tuổi của bạn");
age >= 18 ? console.log("Bạn đủ tuổi xem phim") : console.log("Bạn chưa đủ tuổi rồi man :(");
console.log(age);
