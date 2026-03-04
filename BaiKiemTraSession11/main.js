let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];
let findProduct = (arr, productID) => {
    const result = arr.filter(c=> c.id === productID);
    if(result.length){
        console.log(result);
    }else{
        console.log("Không tìm thấy sản phẩm");
    }
}
findProduct(products, "P03");

// bài 2
let testPriceProduct = (arr) => {
    let allPriceOver0 = arr.every(c => c.price > 0);
    if(allPriceOver0){
        console.log("Dữ liệu bảng giá hợp lệ");
    }else{
        const theProduct = arr.find(c => c.price < 0);
            console.log("Sản phẩm không đủ điều kiện: \n", theProduct);
    }
}
testPriceProduct(products);
//bài 3: 

let formatDisplay = (arr) => {
    let catalogDisplay= [];
    arr.forEach(c => {
        let rows = "";
        rows += `${c.name} - Giá ${c.price} | Trạng thái: ${c.inStock ? "Còn hàng" : "Hết hàng" }`;
        catalogDisplay.push(rows);
    });
    console.log(catalogDisplay);
}
formatDisplay(products);