let bookName = prompt("Vui lòng nhập tên sách: ");
let borrowBook = prompt("Vui lòng nhập tên người mượn");

let bookStatusList = ["Có sẵn", "Đã mượn", "Không có sẵn"];
let bookStatus = bookStatusList[Math.floor(Math.random() * bookStatusList.length)];

let numberOfDaysBorrowed = +prompt("Vui lòng nhập số ngày mượn");
let libaryCard = confirm("Bạn có thẻ thư viện hay không");


console.log(libaryCard);
console.log(bookStatus);
if (bookStatus === "Có sẵn" && libaryCard){
    document.write("Chúc mừng, bạn có thể mượn sách này");
} else if(bookStatus === "Đã mượn" && numberOfDaysBorrowed < 30){
    if(libaryCard){
        document.write("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    }else{
        document.write("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} else if (bookStatus === "Không có sẵn"){
    document.write("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}else{
    throw new Error("Thông tin không hợp lệ, vui lòng nhập lại");
}


