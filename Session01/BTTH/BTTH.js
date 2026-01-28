let bookName = prompt("Vui lòng nhập tên sách của bạn").trim().toUpperCase();
let bookAuthor = prompt("Mời bạn nhập tên tác giả cuốn sách").trim().toUpperCase();
let year = +prompt("Nhập năm xuất bản của bạn");
let bookId = bookAuthor.slice(0,3) + year + " - " + Math.floor((Math.random() *1000)+1);
let price = parseFloat(prompt("Mời bạn nhập giá cuốn sách"));
let quantity = +prompt("Mời bạn nhập số lượng sách");
let bookAge = new Date().getFullYear() - year;
let sumAllBook = price * quantity;
let ramdomBookShell = Math.floor((Math.random() *10)+1)
document.write("Mã sách: " + bookId + "<br>");
document.write("Tên sách: " + bookName + "<br>");
document.write("Tác giả: " + bookAuthor + "<br>");
document.write("Năm xuất bản: " + year + "<br>");
document.write("Tuổi sách: " + bookAge + "<br>");
document.write("Tổng giá trị: " + sumAllBook + "VNĐ" + "<br>");
document.write("Ngăn kệ gợi ý: " + "Kệ số "  + ramdomBookShell);
console.log(` -----PHIẾU NHẬP KHO-----
                Mã sách: ${bookId} 
                Tên sách: ${bookName}
                Tác giả: ${bookAuthor}
                Năm xuất bản: ${year}
                Tuổi sách: ${bookAge}
                Tổng giá trị: ${sumAllBook} VNĐ
                Ngăn kệ gợi ý: kệ số ${ramdomBookShell}`);