let bookName = prompt("Vui lòng chọn tên sách");
let typeBook = prompt("Vui lòng chọn thể loại sách");
let bookStatus = Math.random() < 0.5 ? "Có sẵn" : "Đã mượn";
console.log(bookStatus);


if ( typeBook === "Khoa học" || typeBook === "Lịch sử" && bookStatus === "Có sẵn"){
    document.write("Sách này có sẵn trong thư viện");
}else if (typeBook === "Khoa học" || typeBook === "Lịch sử" && bookStatus === "Đã mượn"){
    document.write("Sách đã được mượn");
}else if (typeBook === "Văn học" || typeBook === "Truyện"){
    document.write("Sách này có thể đọc giải trí");
}else{
    document.write("Sách này không có ở thư viện bên tôi ! ");
}