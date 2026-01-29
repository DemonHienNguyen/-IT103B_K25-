let numBooks = +prompt("Vui lòng nhập số lượng sách trong thư viện");
/* 
    Cách 1
*/
// switch (true) {
//     case numBooks < 10 && numBooks >=0 :
//         document.write("Thư viện ít sách quá, cần đầu tư thêm sách");
//         console.log("Thư viện ít sách quá, cần đầu tư thêm sách");
//         break;
//     case numBooks >= 10 && numBooks <= 20:
//         document.write("Thư viện có số sách vừa đủ ");
//         console.log("Thư viện có số sách vừa đủ ");
//         break;
//     case numBooks > 20:
//         document.write("Thư viện có nhiều sách");
//         console.log("Thư viện có nhiều sách");
//         break;
//     default:
//         document.write("số sách không hợp lý");
//         console.log("số sách không hợp lý");
//         break;
// }
/*  Cách 2 */
if (numBooks < 10 && numBooks >=0 ) {
    document.write("Thư viện ít sách quá, cần đầu tư thêm sách");
    console.log("Thư viện ít sách quá, cần đầu tư thêm sách");
} else if (numBooks >= 10 && numBooks <= 20) {
    document.write("Thư viện có số sách vừa đủ ");
    console.log("Thư viện có số sách vừa đủ ");
} else if (numBooks > 20) {
    document.write("Thư viện có nhiều sách");
    console.log("Thư viện có nhiều sách");
} else {
    document.write("số sách không hợp lý");
    console.log("số sách không hợp lý");
}