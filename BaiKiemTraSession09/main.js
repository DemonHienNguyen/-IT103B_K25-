let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
let orderReports = [];
console.log(bringSuvenues(orders, revenues, orderReports));
console.log("Vậy tổng là: " + totalSuvenues(revenues));
function bringSuvenues(arr, revenues, newArray) {
    let line;
    arr.forEach((Value, index) => {
        line = "";
        line += `${Value} mang về ${revenues[index]}`;
        newArray.push(line);
    });
    return newArray;
}
function totalSuvenues(revenues) {
    const result = revenues.filer(value => value > 0);
    return result.reduce((arc, cur) => arc + cur, 0);
}
