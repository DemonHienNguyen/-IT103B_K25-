let nameBook = prompt("Vui lòng nhập tên sách").trim().toUpperCase();
let bookAuthor = prompt("Vui lòng nhập tên tác giả cuốn sách").trim().toUpperCase();
let bookYear = +prompt("Vui lòng nhập năm xuất bản của sách");
document.write("Tên sách: " + nameBook + "<br>");
document.write("Tác giả: " + bookAuthor + "<br>");
document.write("Năm xuất bản: " + bookYear + "<br>");
if ((new Date().getFullYear() - bookYear) === 0) {
    document.write("Đây là sách mới");
    console.log("Đây là sách mới");
} else if ( (new Date().getFullYear() - bookYear) <= 5){
    document.write("Sách này khá mới");
    console.log("Sách này khá mới");
}else {
    document.write("Sách này cũ quá");
    console.log("Sách này cũ quá");
}