let userName = prompt("Vui lòng nhập tên người dùng: ");
let userRoll = prompt("Vui lòng nhập các vai trò: (admin  -  student  -  guest)").toLowerCase();
let cardAccountBalance = +prompt("Nhập số dư tài khoản thẻ");
let libraryCardStatus = prompt("Vui lòng nhập thẻ thư viện: (true - nếu đang hoạt động / rỗng/nhập khác để coi như bị khóa)");
if (libraryCardStatus === "khác") {
    libraryCardStatus = null;
}
let newUserRoll = "";
let bookRequest = "";
let day = "";

let NumberDaysOverduereturningBooks = +prompt("Vui lòng nhập số ngày hạn trả sách");

if (cardAccountBalance === null) {
    cardAccountBalance = 0;
}

let total = 0;
let money1 = 5000;
let money2 = 10000;
let money3 = 200000;
console.log(libraryCardStatus === "");
console.log(cardAccountBalance);


switch (userRoll) {
    case "admin":
        console.log("Quyền hạn: Chào Admin, bạn có toàn quyền hệ thống");
        document.write("Chào Admin, bạn có toàn quyền hệ thống" + "<br>");
        newUserRoll = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        console.log("Chào sinh viên, bạn có thể mượn sách");
        document.write("Chào sinh viên, bạn có thể mượn sách" + "<br>");
        newUserRoll = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        document.write("Chào khách, bạn chỉ có thể đọc tại chỗ" + "<br>");
        newUserRoll = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        console.log("Lỗi: Vai trò không hợp lệ !");
        document.write("Lỗi: Vai trò không hợp lệ !" + "<br>");
        newUserRoll = "Lỗi: Vai trò không hợp lệ !";
}


if (userName !== null && (userRoll === "student" || userRoll === "admin") && cardAccountBalance > 0 && libraryCardStatus) {
    console.log("Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH");
    document.write("ĐƯỢC PHÉP MƯỢN SÁCH" + "<br>");
    bookRequest = "Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH";
} else if (userName === null) {
    console.log("YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ TÊN TRỐNG");
    document.write("YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ TÊN TRỐNG" + "<br>");
    bookRequest = "YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ TÊN TRỐNG";
} else if (userRoll === "guest") {
    console.log("YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ VAI TRÒ LÀ GUEST");
    document.write("YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ VAI TRÒ LÀ GUEST" + "<br>");
    bookRequest = "YÊU CẦU BỊ TỪ CHỐI VÌ ĐỂ VAI TRÒ LÀ GUEST";
} else if (cardAccountBalance === 0) {
    console.log("YÊU CẦU BỊ TỪ CHỐI VÌ TIỀN ĐỂ = 0");
    document.write("YÊU CẦU BỊ TỪ CHỐI VÌ TIỀN ĐỂ = 0" + "<br>");
    bookRequest = "YÊU CẦU BỊ TỪ CHỐI VÌ TIỀN ĐỂ = 0";
} else if (libraryCardStatus === null) {
    console.log("YÊU CẦU BỊ TỪ CHỐI VÌ THẺ THƯ VIỆN BỊ KHÓA");
    document.write("YÊU CẦU BỊ TỪ CHỐI VÌ THẺ THƯ VIỆN BỊ KHÓA" + "<br>");
    bookRequest = "YÊU CẦU BỊ TỪ CHỐI VÌ THẺ THƯ VIỆN BỊ KHÓA";
}else{
    document.write("YÊU CẦU BỊ TỪ CHỐI VÌ VAI TRÒ KHÔNG HỢP LỆ" + "<br>");
    bookRequest = "YÊU CẦU BỊ TỪ CHỐI VÌ VAI TRÒ KHÔNG HỢP LỆ";
}

if (NumberDaysOverduereturningBooks <= 0) {
    console.log("Trình trạng trả sách: Cảm ơn bạn đã trả đúng hạn");
    day = "Cảm ơn bạn đã trả đúng hạn"
    document.write("Cảm ơn bạn đã trả đúng hạn" + "<br>");
    document.write(`Tiền phạt: 0 VNĐ`);
    console.log("Tiền phạt: 0 VNĐ");
} else if (NumberDaysOverduereturningBooks <= 5 && NumberDaysOverduereturningBooks >= 1) {
    total = money1 * NumberDaysOverduereturningBooks;
    day = `Chậm ${NumberDaysOverduereturningBooks} ngày`
    console.log(`Tiền phạt: ${total} VNĐ`);
    document.write(`Phạt: ${total}` + "<br>");
} else if (NumberDaysOverduereturningBooks <= 10 && NumberDaysOverduereturningBooks >= 6) {
    total = money2 * NumberDaysOverduereturningBooks;
    day = `Chậm ${NumberDaysOverduereturningBooks} ngày`
    console.log(`Tiền phạt: ${total} VNĐ`);
    document.write(`Phạt: ${total}` + "<br>");
} else if (NumberDaysOverduereturningBooks > 10) {
    total = money3;
    day = `Chậm ${NumberDaysOverduereturningBooks} ngày`
    console.log(`Tiền phạt: ${total} VNĐ`);
    document.write(`Phạt: ${total} VNĐ` + "<br>");
}
console.log (`  --------Hệ thống Mượn trả--------
                Người dùng: ${userName}
                Quyền hạn: ${newUserRoll}
                Kết quả mượn: ${bookRequest}
                Tình trạng trả sách: ${day}
                Tiền phạt: ${total} VNĐ`);