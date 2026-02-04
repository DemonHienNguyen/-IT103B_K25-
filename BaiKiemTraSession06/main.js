let nameString = "Quý, Nam, Lan, Hùng, Nam";
let students  = nameString.split(", ");
console.log("Mảng sinh viên trước khi đảo ngược ");
for(let i = 0; i < students.length; i ++){
    console.log(`${i+1}. ${students[i]}`);
}
console.log("Mảng sau khi đảo ngược");
students.reverse();
for(let i = 0; i < students.length; i ++){
    console.log(`${i+1}. ${students[i]}`);
}
// phương thức này có thể thay đổi được cả mảng gốc !
if(students.includes("Lan")){
    console.log(`Tên "Lan" Tồn tại trong mảng`);
}else{
    console.log("Tên Lan không tồn tại trong mảng");
}
let find = false;
for(let i = 0; i < students.length ; i++){
    if(students[i] === "Nam"){
        find = true;
        index = i;
        break;
    }
}
if(find){
    console.log(`Tìm Thấy Bạn Nam Tại vị trí ${index}`);
}else{
    console.log(`Không tìm thất được bạn Nam`);
}
// Câu 2
let price = [100, 200, 300, 400]; 
// in 
console.log("Mảng giá trị của phần tử");
for(let ele of price){
    console.log(`${ele}`);
}
console.log("Mảng chỉ số của phần tử");
for(let i in price){
    console.log(`${i}`);
}
let sumOfThePrice = 0;
for(let i = 0 ; i < price.length; i++){
    if(i % 2=== 0){
        sumOfThePrice += price[i];
    }
}
console.log(`Tổng Các phần tử trong mảng nhưng chỉ tín các phần tử ở vị trí chẵn là: ${sumOfThePrice}`);
