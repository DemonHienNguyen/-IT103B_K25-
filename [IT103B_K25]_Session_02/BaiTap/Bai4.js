let nameBook = prompt("Vui lòng nhập tên sách");
let borrowerBookName = prompt("Vui lòng nhập tên người mượn");
let favoriteLevel = +prompt("Vui lòng chọn mức độ yêu thích (1: ít thích - 5: rất thích)");
switch(favoriteLevel){
    case 5 : case 4:
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay !");
        document.write("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay !");
        break;
    case 3 :
        console.log("Sách này khá ổn, có thể mượn");
        document.write("Sách này khá ổn, có thể mượn");
        break;
    case 2: case 1:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        document.write("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    default:
        document.write("Mức độ không tương thích");
}   