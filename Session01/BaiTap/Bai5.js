let nameProduce = prompt("Vui lòng nhập tên sách");
let yearProduce = +prompt("Vui lòng nhập năm xuất bản của sách");
let yearToday  = 2026;
let ageYear = yearToday - yearProduce;
document.write("Tên của sách: " + nameProduce + "<br>");
document.write("Tuổi của sách: " + ageYear);
console.log("Tên của sách: " + nameProduce);
console.log("Tuổi của sách: " + ageYear);