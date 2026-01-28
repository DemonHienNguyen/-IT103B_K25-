let book =  prompt ("Vui lòng nhập tên sách");
document.write("Tên sách gốc: "  + book + "<br>");
document.write("Mã sách sau khi chuẩn hóa: " +"LIB - "+ book.trim().toUpperCase() + " - " + Math.floor((Math.random() * 100) +1));
console.log("Tên sách gốc: "  + book);
console.log("Mã sách sau khi chuẩn hóa: " +"LIB - "+ book.trim().toUpperCase() + " - " + Math.floor((Math.random() * 100) +1));
