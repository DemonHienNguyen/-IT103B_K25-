// Bài này DO EM: NGUYỄN MINH HIỂN Đề 006
let bookList = [
    { id: 1, name: "Tây du ký", price: 30000, author: "Kim Jong Won", category: "Tiểu thuyết" },
    { id: 2, name: "Độc đắc nhân tâm", price: 60000, author: "Nguyễn Nhật Minh", category: "Kinh tế" },
    { id: 3, name: "Cách công nghệ phát triển", price: 20000, author: "Nguyễn Du", category: "Khoa học" },
    { id: 4, name: "Bách khoa toàn thư", price: 30000, author: "Nguyễn Nhật Ký", category: "Lịch sử" },
    { id: 5, name: "Iran đánh với Mỹ", price: 45000, author: "Kim Jong Won", category: "Lịch sử" },
    { id: 6, name: "Dế mèn phiêu lưu ký", price: 55000, author: "Kim Jong Won", category: "Tiểu thuyết" },
]
// chức năng 1:
let addBookIntoList = (obArray) => {
    let idWannaToAdd;
    let nameWannaToAdd;
    let priceWannaToAdd;
    let authorWannaToAdd;
    let categoryWannaToAdd;
    while (true) {
        idWannaToAdd = prompt("Vui lòng nhập ID muốn thêm vào !");
        if (obArray.some(c => c.id === +idWannaToAdd)) {
            alert("ID sách đã tồn tại, vui lòng chọn ID khác");
            continue;
        }
        if (isNaN(Number(idWannaToAdd)) || idWannaToAdd === "" || idWannaToAdd === null) {
            alert("Id bạn nhập không đúng với dữ liệu");
            continue;
        }
        break;
    }
    while (true) {
        nameWannaToAdd = prompt("Vui lòng nhập tên muốn thêm vào");
        if (nameWannaToAdd === null || nameWannaToAdd === "") {
            alert("Tên sách nhập không phù hợp !");
            continue;
        }
        if (obArray.some(c => c.name === nameWannaToAdd)) {
            alert("Tên sách đã có trong kho.");
            continue;
        }
        break;
    }
    while (true) {
        priceWannaToAdd = prompt("Nhập giá của cuốn sách: ");
        if (priceWannaToAdd === null || priceWannaToAdd === "" || isNaN(Number(priceWannaToAdd)) || Number(priceWannaToAdd) < 0) {
            alert("Giá sách phải là số và lớn hơn 0");
            continue;
        }
        break;
    }
    while (true) {
        authorWannaToAdd = prompt("Vui lòng nhập tên của tác giả");
        if (authorWannaToAdd === null || authorWannaToAdd === "") {
            alert("Tên tác giả nhập không được để trống !");
            continue;
        }
        break;
    }
    while (true) {
        categoryWannaToAdd = prompt("Vui lòng nhập thể loại sách");
        if (categoryWannaToAdd !== "Tiểu thuyết" && categoryWannaToAdd !== "Kinh tế" && categoryWannaToAdd !== "Khoa học" && categoryWannaToAdd !== "Lịch sử") {
            alert("Thể loại không hợp lệ. Phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
            continue;
        }
        break;
    }
    let bookWannaToAdd = {
        id: +idWannaToAdd,
        name: nameWannaToAdd,
        price: +priceWannaToAdd,
        author: authorWannaToAdd,
        category: categoryWannaToAdd,
    }
    obArray.push(bookWannaToAdd);
    alert(`Đã thêm sách: ${nameWannaToAdd}`);
}
// chức năng 2: Xóa sách 
let deleteBook = (obArray) => {
    let nameWannaToDelete;
    let checked;
    nameWannaToDelete = prompt("Vui lòng nhập tên sách muốn xóa");
    let resultIndex = obArray.findIndex(c => c.name === nameWannaToDelete);
    if (resultIndex !== -1) {
        alert(`Đã tìm thấy ID : ${obArray[resultIndex].id} - Tên sách: ${nameWannaToDelete}`);
        checked = window.confirm("Bạn chắc có muốn xóa hay không !");
        if (checked) {
            obArray.splice(resultIndex, 1);
            alert("Xóa sách thành công !");
        } else {
            alert("sách không bị xóa khỏi kho");
        }
    } else {
        alert("Tên sách không tồn tại");
    }
}

// chức năng 3: hiển thị danh sách
let displayBookList = (obArray) => {
    alert("Đã in ra ngoài console");
    console.log("=== DANH SÁCH CÁC CUỐN SÁCH ===");
    obArray.forEach(c => {
        console.log(`ID: ${c.id} | Tên: ${c.name} | Giá: ${c.price.toLocaleString("vi-VN")} VNĐ | Tác giả: ${c.author} | Thể Loại: ${c.category}`);
    });
    console.table(obArray);
}
// Chức năng 4: cập nhập danh sách
let updateBook = (obArray) => {
    let nameWannaToUpdate;
    let newPrice;
    let newCategory;
    nameWannaToUpdate = prompt("vui lòng nhập tên sách muốn cập nhập");
    let resultIndex = obArray.findIndex(c => c.name === nameWannaToUpdate);
    if (resultIndex !== -1) {
        alert(`Đã tìm thấy: ID: ${obArray[resultIndex].id} - Tên sách: ${nameWannaToUpdate}`);
        while (true) {
            newPrice = prompt(`Vui lòng nhập Giá mới cho sách: (Giá cũ ${obArray[resultIndex].price})`);
            if (newPrice === null || newPrice === "" || isNaN(Number(newPrice)) || Number(newPrice) < 0) {
                alert("Giá sách phải là số và lớn hơn 0");
                continue;
            }
            break;
        }
        while (true) {
            newCategory = prompt(`Vui lòng nhập thể loại mới cho sách (Thể loại cũ: ${obArray[resultIndex].category}`);
            if (newCategory !== "Tiểu thuyết" && newCategory !== "Kinh tế" && newCategory !== "Khoa học" && newCategory !== "Lịch sử") {
                alert("Thể loại không hợp lệ. Phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
                continue;
            }
            break;
        }
        obArray[resultIndex].price = +newPrice;
        obArray[resultIndex].category = newCategory;
        alert(`Đã cập nhật sách: ${nameWannaToUpdate}`);
    } else {
        alert("Tên sách không tồn tại!");
    }
}
// chức năng 5: tìm sách:
let findNameBookOrAuthor = (obArray) => {
    let choose;
    do {
        choose = +prompt(`=== MENU TÌM KIẾM ===
1. Tìm kiếm theo tên
2. Tìm kiếm theo tên tác giả
0. Thoát`);
        switch (choose) {
            case 1:
                findByNameBook(obArray);
                break;
            case 2:
                findByAuthorBook(obArray);
                break;
            case 0:
                break;
            default:
                alert("Lựa chọn bạn chọn không hợp lý !");
        }
    } while (choose !== 0);
}
// chức năng phụ trong 5: tìm kiếm theo tên sách
let findByNameBook = (obArray) => {
    let nameWannatoFind;
    nameWannatoFind = prompt("Vui lòng nhập tên sách mà bạn muốn tìm !");
    let result = obArray.filter(c => c.name === nameWannatoFind);
    if (result.length > 0) {
        alert("Kết quả được in ra trong console");
        console.log("Sách tìm thấy: ", result.map(c => `${c.name}, Tác giả: ${c.author}, Giá: ${c.price}`));
    } else {
        alert(`Không tìm thấy tên sách là: ${nameWannatoFind}`);
    }
}
// chức năng phụ trong chức năng 5: tìm kiếm tên tác giả
let findByAuthorBook = (obArray) => {
    let authorWannaToFind;
    authorWannaToFind = prompt("Vui lòng nhập tên tác giả mà bạn muốn tìm");
    let result = obArray.filter(c => c.author === authorWannaToFind);
    if (result.length > 0) {
        alert("Kết quả được in ra trong console");
        console.log(`Các cuốn sách của tác giả ${authorWannaToFind}: `, result.map(c => `${c.name}`));
    } else {
        alert(`Không tìm thấy tên tác giả là: ${authorWannaToFind}`);
    }
}
//
// chức năng 6: Lọc sách theo thể loại
let filterByCategory = (obArray) => {
    let categoryWannaToFilter;
    while (true) {
        categoryWannaToFilter = prompt("Vui lòng nhập thể loại mà bạn muốn lọc");
        if (categoryWannaToFilter !== "Tiểu thuyết" && categoryWannaToFilter !== "Kinh tế" && categoryWannaToFilter !== "Khoa học" && categoryWannaToFilter !== "Lịch sử") {
            alert("Thể loại không hợp lệ. Phải là một trong các giá trị: 'Tiểu thuyết', 'Kinh tế', 'Khoa học', 'Lịch sử'.");
            continue;
        }
        break;
    }
    let result = obArray.filter(c => c.category.toLowerCase() === categoryWannaToFilter.toLowerCase());
    alert("Danh sách được in ở console !");
    console.log(`Danh sách các sách thể loại ${categoryWannaToFilter}`, result);

}
// chức năng 7: Tính tổng giá trị kho sách !;
let totalPriceBook = (obArray) => {
    let result = obArray.reduce((sum, cur) => sum + cur.price, 0).toLocaleString("vi-VN");
    alert(`Vậy tổng giá trị tồn kho là: ${result} VND`);
}
//chức năng 8: sắp xếp 
let sortAscOrDesc = (obArray) => {
    let choice;
    do {
        choice = +prompt(`=== MENU SẮP XẾP ===
1. Sắp xếp tăng dần
2. Sắp xếp giảm dần
0. Thoát`);
        switch(choice){
            case 1:
                sortAsc(obArray);
                break;
            case 2:
                sortDesc(obArray);
                break;
            case 0:
                break;
            default:
                alert("Lựa chọn bạn nhập không chính xác !");
        }
    }while(choice !== 0)
}
//Chức năng sắp xếp tăng dần
let sortAsc = (obArray) => {
    let result = [...obArray].sort((a, b) => a.price - b.price);
    alert("Danh sách được sắp xếp ở trong console !");
    console.log("DANH SÁCH SẮP XẾP TĂNG DẦN");
    console.table(result);
}
// chức năng sắp xếp giảm dần
let sortDesc = (obArray) => {
    let result = [...obArray].sort((a, b) => b.price - a.price);
    alert("Danh sách được sắp xếp ở trong console !");
    console.log("DANH SÁCH SẮP XẾP GIẢM DẦN");
    console.table(result);
}
//
//chức năng 9:  Tìm kiếm sách theo khoảng giá
let filterByPrice = (obArray) => {
    let lowerPrice;
    let higherPrice;
    while(true){
        lowerPrice = prompt("Vui lòng nhập giá khởi đầu :");
        if(lowerPrice === null || lowerPrice === "" || isNaN(Number(lowerPrice)) || Number(lowerPrice) < 0){
            alert("Giá khởi đầu không hợp lệ ! vui lòng nhập lại ");
            continue;
        }
        break;
    }
    while(true){
        higherPrice = prompt("Vui lòng nhập giá cuối (LƯU Ý: GIÁ CUỐI PHẢI LỚN HƠN GIÁ ĐẦU)");
        if(higherPrice === null || higherPrice === "" || isNaN(Number(higherPrice)) || Number(higherPrice) < 0){
            alert("Giá cuối không hợp lệ ! Vui lòng nhập lại ");
            continue;
        }
        if(Number(higherPrice) < Number(lowerPrice)){
            alert("Giá cuối không được nhỏ hơn giá đầu");
            continue;
        }
        break;
    }
    let result = obArray.filter(c => c.price >= Number (lowerPrice) && c.price <= Number(higherPrice));
    if(result.length === 0){
        alert("Không có sách trong khoảng giá này");
    }else{
        alert("Danh sách theo khoảng tiền được in ra console !");
        console.log(`DANH SÁCH CÁC CUỐN SÁCH THEO KHOẢNG GIÁ TỪ ${lowerPrice} - ${higherPrice} là: `, result);
    }
}

let displayMenu = () => {
    return prompt(`=== MENU QUẢN LÝ KHO SÁCH
1. Thêm sách
2. Xóa sách
3. Hiển thị danh sách
4. Cập nhập thông tin sách
5. Tìm sách
6. Lọc sách theo thể loại
7. Tính tổng giá trị kho sách
8. Sắp xếp sách theo giá
9. Tìm kiếm sách theo khoảng giá
0. Thoát`);
}
let printMenu = () => {
    let choice;
    do {
        choice = +displayMenu();
        switch (choice) {
            case 1:
                addBookIntoList(bookList);
                break;
            case 2:
                deleteBook(bookList);
                break;
            case 3:
                displayBookList(bookList);
                break;
            case 4:
                updateBook(bookList);
                break;
            case 5:
                findNameBookOrAuthor(bookList);
                break;
            case 6:
                filterByCategory(bookList);
                break;
            case 7:
                totalPriceBook(bookList);
                break;
            case 8:
                sortAscOrDesc(bookList);
                break;
            case 9:
                filterByPrice(bookList);
                break;
            case 0:
                alert("Cảm ơn vì đã sử dụng chương trình !");
                break;
            default:
                alert("Lựa chọn bạn nhập không hợp lý !");
        }
    } while (choice !== 0);
}
printMenu();
