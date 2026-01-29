let bookName = prompt("Vui lòng nhập tên sách");
let bookStatus = Math.random()  <0.5 ? "Có sẵn" : "Đã mượn";
let publicationYear = prompt("Vui lòng nhập năm xuất bản của sách");


let bookYear = new Date().getFullYear() - publicationYear;
console.log(bookStatus);
if (bookStatus === "Có sẵn" && bookYear <= 5){
    console.log("Sách này mới và có sẵn để mượn");
    document.write("Sách này mới và có sẵn để mượn");
}else if (bookStatus === "Đã mượn" && bookYear <= 10){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    document.write("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (bookStatus === "Đã mượn" && bookYear > 10){
    console.log("Sách này đã mượn và khá cũ");
    document.write("Sách này đã mượn và khá cũ");
} else if (bookStatus === "Có sẵn" && bookYear > 5){
    console.log("Sách này có sẵn nhưng đã lâu năm");
    document.write("Sách này có sẵn nhưng đã lâu năm");
}